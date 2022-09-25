import React from "react";
import {Button, Text, View, TextInput, StyleSheet} from 'react-native';

class UsuarioGitHub extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dados: {},
            usuario : "GabrielVictor159"
            
        }
    }
 fetchdados(){
    try {
        const response = fetch('https://api.github.com/users/${this.state.usuario}');
        const jsonconvert =  response.json();
        this.setState({ dados: jsonconvert });
      } catch (error) {
        this.setState({dados: error})
      } 
   }
   componentDidMount(){
    this.fetchdados();
   }
    render(){
        return (
        <View>
            <Text>{JSON.stringify(this.state.dados)}</Text>
            <Text>{this.state.usuario}</Text>
            <View>
                <TextInput 
                onChangeText={ usuario => {this.setState({usuario})}}
                value={this.setState.usuario}>

                </TextInput>
                
            </View>
            <View>
                <Button 
                onPress={this.fetchdados()}
                title="Buscar Dados"
                accessibilityLabel="Busque os dados do usúario do GitHub"
                />
            </View>
        </View>
        )
    }
}

export default UsuarioGitHub;