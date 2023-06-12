import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';


export default function Sobre() {
    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            
            <Text style={styles.text}>Um pouco sobre nós</Text>
            <Text style={styles.conteudo}>Uma peça artesanal de resina epóxi é um objeto criado manualmente utilizando a técnica de moldagem e cura da resina epóxi. 
            Ela é um material líquido transparente que, quando combinado com um agente de cura, endurece e se transforma em um plástico rígido e durável.
            {'\n'}{'\n'}{'\n'}
            A arte em resina epóxi envolve despejar camadas de resina colorida em um molde, criando diferentes efeitos e padrões. 
            Esses moldes podem ser de diversos materiais, como silicone, madeira, plástico ou metal, e podem ter formas variadas, como joias, esculturas, peças decorativas
            ou até mesmo superfícies revestidas.
            {'\n'}{'\n'}{'\n'}
            As peças artesanais em resina são apreciadas por sua beleza e originalidade. Elas podem ser usadas como joias, objetos de decoração, enfeites, esculturas,
            entre outros. A versatilidade desse material permite a criação de peças únicas, com texturas, formas e cores diversas, tornando-as verdadeiras obras de arte.
            
            
            </Text>
            
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#FFF8DC",
    },

    text: {
        fontSize:22,
        color: "#fff",
        marginBottom:50,
        textAlign: 'left',
        marginRight:120,
        padding:10,
        backgroundColor: "#FFA07A",
        
    },
    conteudo:{
        textAlign: 'justify',
        marginLeft:15,
        marginRight:15

    }

});