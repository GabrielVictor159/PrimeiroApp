import React from "react";
import {Button, Text, View, TextInput, StyleSheet} from 'react-native';
import curso from '../Model/CursosModel';
class CursoApi extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dados: {},
            url: 'https://8543-2804-d59-842b-ee00-c42-f1a2-4ab1-b79c.sa.ngrok.io/Api/Cursos/',
            id: '745a6c2e-7127-48c3-8a4d-0c48409ef76b',
            cursoPersist: {
                nomeDoCurso: '',
                valorDoCurso: ''
            }
        }
    }
  getAllCursos= async() =>{
        fetch(this.state.url)
        .then(response => response.json())
        .then(responseJson=>{
            this.setState({dados: responseJson})
            return responseJson;
        })
        .catch((error) =>{
            console.error(error);
        })
       };

 
       getOneCurso = async() =>{
        fetch(this.state.url+id)
        .then(response => response.json())
        .then(responseJson=>{
            this.setState({dados: responseJson})
            return responseJson;
        })
        .catch((error) =>{
            console.error(error);
        });
       }
    deleteOneCurso = async() =>{
        fetch(this.state.url+id, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(responseJson=>{
            this.setState({dados: responseJson})
            return responseJson;
        })
        .catch((error) =>{
            console.error(error);
        });
       }
       postOneCurso = async() =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nomeDoCurso: nomeDoCurso, valorDoCurso: valorDoCurso})
        };
        fetch(this.state.url+id, {
          requestOptions 
        })
        .then(response => response.json())
        .then(responseJson=>{
            this.setState({dados: responseJson})
            return responseJson;
        })
        .catch((error) =>{
            console.error(error);
        });
       }
    render(){
        return (
        <View>
            <Text>{JSON.stringify(this.state.dados)}</Text>
            <View>
            <Button 
                onPress={this.getAllCursos()}
                title="Listar Todos os cursos"
                accessibilityLabel="Busque um curso pelo id"
                />
                <Button 
                onPress={this.getOneCurso(this.state.id)}
                title="Listar um curso"
                accessibilityLabel="Busque um curso pelo id"
                />
            </View>
            <View>
            <TextInput 
            onChangeText={nomeDoCurso => {this.setState({cursoPersist})}}
            value={this.setState({nomeDoCurso})}
            />
            </View>
        </View>
        )
    }
}


export default CursoApi;