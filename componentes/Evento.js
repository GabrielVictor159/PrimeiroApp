import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

class Evento extends React.Component{
    constructor(props){
        super(props);
    this.state = {
        input:'Baby'
    }
    this.alteraInput = this.alteraInput.bind(this);
}
    alteraInput(input){
        this.setState({input})
    }
    render(){
        return(
            <View>
                <Text>{this.state.input}</Text>
                <TextInput value={this.state.input} onChangeText={this.alteraInput}></TextInput>
                        
                
                </View>
        )
    }
}

export default Evento;