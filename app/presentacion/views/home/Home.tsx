import React, {useState} from "react";
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import stylesHome from "./StylesHome";
import styles from "./StylesHome";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamalist} from "../../../../App";
import NavBar from "../../componentes/NavBar";


function Home () {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamalist>>();
    const [isNavBarVisible, setNavBarVisible] = useState(false);

    return (
        <View style={styles.container}>
            {isNavBarVisible && (
                <NavBar
                    onClose={() => setNavBarVisible(false)}
                    onNavigate={(route) => {
                        setNavBarVisible(false);
                    }}
                />
            )}
            <View style={styles.navbar}>
                <View style={styles.navbarNombre}>
                    <TouchableOpacity onPress={()=>{
                        setNavBarVisible(true);
                    }}>
                        <Image style={styles.imagen} source={require('../../../../assets/menu.png')} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#000",
                        marginLeft: 10,
                    }}>Medallium</Text>
                </View>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("Profile");
                }}>
                    <Image style={styles.imagen} source={require('../../../../assets/user.jpg')} />
                </TouchableOpacity>
            </View>
            <View style={styles.containerFilter}>
                <TextInput style={styles.filter}></TextInput>
            </View>
            <View style={styles.containerBotones}>
                <TouchableOpacity style={styles.botonFiltro}>
                    <Text>Tribus</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonFiltro2}>
                    <Text>Elementos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonFiltro3}>
                    <Text>Rango</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonFiltro4}>
                    <Text>Fase</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerCardYoKai}>
                <Text style={styles.text}>Populares</Text>
                <View style={styles.card}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textNombre}>Jibanyan</Text>
                        <Text style={styles.textNombre}>ジバニャン</Text>
                    </View>
                    <View style={styles.containerCorazon}>
                        <Image source={require("../../../../assets/Heart.png")}></Image>
                    </View>
                    <View style={styles.containerImagenYoKai}>
                        <Image
                            source={require("../../../../assets/jibanyan.png")}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.containerIcons}>
                        <Image source={require("../../../../assets/guapo.png")}
                                style={styles.icons}
                        />
                        <Image source={require("../../../../assets/fuego.png")}
                               style={styles.icons}/>
                        <Image source={require("../../../../assets/rangod.png")}
                               style={styles.icons}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Home;