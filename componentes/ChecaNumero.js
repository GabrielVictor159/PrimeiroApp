import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default props =>
<View>
    {validaParOuImpar(props.numero)}
</View>

function validaParOuImpar(numero){
    return numero %2 ==0
    ? <Text >O numero é par</Text>
    : <Text>O numero é impar</Text>
}