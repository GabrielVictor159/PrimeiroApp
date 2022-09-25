import React from "react";
import {View} from 'react-native';

class DimensoesFixas extends React.Component{
    render(){
        return(
            <View style={{width:'100%', height:'100%', flexDirection:'row'}}>
                <View style={{width:50, height:50, backgroundColor:'blue'}} />
                <View style={{width:100, height:100, backgroundColor:'red'}} />
                <View style={{width:150, height:150, backgroundColor:'black'}} />
            </View>
        );
    }
};

export default DimensoesFixas;