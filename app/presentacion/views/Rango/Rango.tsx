import {Image, View, Text, TouchableOpacity, ScrollView} from "react-native";
import React from "react";
import {TextPrincipales} from "../../componentes/TextPrincipales";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../App";
import {styles} from "./StylesRango";
import {CardYoKai} from "../../componentes/CardYoKai";
import {Filtro} from "../../componentes/Filtro";

const Rango = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={require("../../../../assets/back.png")} style={styles.icon}/>
                </TouchableOpacity>
                <TextPrincipales text={"Rango"}/>
            </View>

            <Filtro></Filtro>

            <CardYoKai
                nombre={"Jibanyan"}
                nombreJapones={"aaaa"}
                iconHeart={require("../../../../assets/heartw.png")}
                imagenYoKai={require("../../../../assets/jibanyan.png")}
                iconTribu={require("../../../../assets/guapo.png")}
                iconElemento={require("../../../../assets/fuego.png")}
                iconRango={require("../../../../assets/rangod.png")}
                id_Tribu={2}
                ></CardYoKai>
        </View>
    )
}

export default Rango;