import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default class Inicial extends React.Component{
    render(){
        return(
            <View style={styles.conteudoBtn}>
                <Button 
                title="Adicionar Item"
                color="blue"
                onPress={()=>
                    this.props.navigation.navigate('AdicionarItens')
                }
                />
                <Button 
                title="Listar Itens"
                color="blue"
                onPress={()=>
                    this.props.navigation.navigate('ListarItens')
                }
                />
            </View>
        )
    }
}
const styles= StyleSheet.create({
        conteudoBtn:{
            flex:1,
            flexDirection:'column',
            justifyContent:'center'
        },
});