import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';

export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

                <Text style={styles.titulo}>Bem vindo ao{'\n'}Studio Panizz.Art</Text>
                <Text style={styles.conteudo}>Aqui você acompanha as nossas novidades, além de ficar por dentro de todas as promoções exclusivas do App</Text>
                <Image 
                source={require('../../../assets/logo.png')}
                style={styles.logo}></Image>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFF8DC",
    },

    titulo: {
        fontSize: 28,
        color: "#FF8A65",
        textAlign:'center',
        marginBottom:50,
        marginTop: 20
    },
    conteudo: {
        fontSize: 17,
        textAlign: 'justify',
        marginLeft:15,
        marginRight:15

    },
    logo: {
        width:250,
        resizeMode:'contain'
    }

});