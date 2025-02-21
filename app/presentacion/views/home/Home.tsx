import React, { useEffect } from 'react';
import { Image, FlatList, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import styles from './StylesHome';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamlist } from '../../../../App';
import { TextPrincipales } from '../../componentes/TextPrincipales';
import { Filtro } from '../../componentes/Filtro';
import { AppFonts } from '../../themes/AppTheme';
import YokaiViewModel from './ViewModel';
import { DetallesYokaiInterface } from '../../../domain/entities/Yokai';
import RenderYokai from "./ItemYokai";

function Home() {
    const { height } = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    const { yokais, getYokais } = YokaiViewModel();

    useEffect(() => {
        getYokais();
    }, [yokais]);

    // Accede de manera segura a id_detallesYokai, convierte a cadena o devuelve una cadena vacía si está indefinido
    //const keyExtractor = (item: DetallesYokaiInterface) => item?.id_detallesYokai?.toString() || '';

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.navbarNombre}>
                    <Image source={require('../../../../assets/logo.png')} style={styles.imagen} />
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#000',
                        marginLeft: 10,
                    }}>Medallium</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Profile');
                }}>
                    <Image style={styles.imagen} source={{ uri: 'https://i.postimg.cc/yx0JFLjV/Whats-App-Image-2025-02-11-at-10-19-53.jpg' }} />
                </TouchableOpacity>
            </View>
            <Filtro />
            <View style={styles.containerBotones}>
                <TouchableOpacity style={styles.botonFiltro} onPress={() => {
                    navigation.navigate('Tribus');
                }}>
                    <Text style={{ fontFamily: AppFonts.semiBold }}>Tribus</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonFiltro2} onPress={() => {
                    navigation.navigate('Elementos');
                }}>
                    <Text style={{ fontFamily: AppFonts.semiBold }}>Elementos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonFiltro3} onPress={() => {
                    navigation.navigate('Rango');
                }}>
                    <Text style={{ fontFamily: AppFonts.semiBold }}>Rango</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonFiltro4} onPress={() => {
                    navigation.navigate("Saga");
                }}>
                    <Text style={{ fontFamily: AppFonts.semiBold }}>Saga</Text>
                </TouchableOpacity>
            </View>
            <TextPrincipales text="Populares" />
            <FlatList
                data={yokais}
                renderItem={({ item }: { item: DetallesYokaiInterface }) => <RenderYokai item={item} />}
                keyExtractor={(item) => item.id_detallesYokai.toString()}
                style={[styles.containerCardYoKai, { maxHeight: height * 0.5 }]}
                initialNumToRender={10} //los que se renderizan recien se abre la app
                windowSize={10} //items por pantalla
                // onEndReached={} evento para llamar por partes evento de desencadenado
                ListFooterComponent={<View style={{paddingVertical: 10 }}><Text style={{ textAlign: 'center' }}>no hay más elementos</Text></View>}
            />
        </View>
    );
}

export default Home;
