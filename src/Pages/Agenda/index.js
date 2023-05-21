import React,{Component} from "react";
import {View, Text, StyleSheet } from 'react-native';

export default class Agenda extends Component{
    render(){
        // console.log(this.props.data.dateService)
        const date = new Date(this.props.data.dateService);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        const price = parseFloat(this.props.data.price);
        const formattedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        return(
            <View style={styles.container}>
                <Text style={styles.date}>{formattedDate}</Text>
                <Text style={styles.client}>{this.props.data.client}</Text>
                <Text style={styles.service}>{this.props.data.service}</Text>
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