import React,{Component} from "react";
import {View, Text, StyleSheet } from 'react-native';

export default class Detalhe extends Component{
    render(){
        console.log(this.props.data.totalPrice)
        const totalPrice = parseFloat(this.props.data.totalPrice);
        const formattedPrice = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return(
            <View style={styles.container}>
                <Text style={styles.date}>{this.props.data.designComHenna}</Text>
                <Text style={styles.price}>{formattedPrice}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    client: {
        fontSize: 14,
        marginBottom: 4,
    },
    service: {
        fontSize: 14,
        marginBottom: 4,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});