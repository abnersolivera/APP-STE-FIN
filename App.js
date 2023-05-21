import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import api from './src/Services/Api'
import Agenda from './src/Pages/Agenda'
import Detalhe from './src/Pages/Detalhe'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agenda: [],
      detalhe: []
    }
  }

  async componentDidMount() {
    try {
      const response = await api.get('Calendario/events?DataInicio=2023/05/01&DataFinal=2023/05/21', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      });
      this.setState({
        agenda: response.data.data,
        detalhe: response.data.details
      });
    } catch (error) {
      console.log('Error:', error);

    }
  }
  render() {    
    return (
      <SafeAreaView styles={styles.container}>
        <FlatList
          data={this.state.agenda}
          renderItem={({ item }) => <Agenda data={item} />}
        />
        <FlatList
          data={this.state.detalhe}
          renderItem={({ item }) => <Detalhe data={item} />}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  }
});