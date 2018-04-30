import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'

import { getDogs } from './../service/FetchData.js'
import SingleItem from './SingleItem.js'


export default class HomeScreen extends Component {

  state = {
    isLoading: true,
    data: []
  }

  componentDidMount() {
    getDogs()
      .then(response => {
        this.setState({
          isLoading: false,
          data: response })
        })
      .catch(error => {
        this.setState({
          isLoading: false, 
          data: []
        })
      })
  }

  render() {
      const { data, isLoading } = this.state;
      return (
        <View style={styles.container}>
        {isLoading && <ActivityIndicator size="large"/> }
        {!isLoading && 
          <FlatList
            data={data}
            numColumns={3}
            contentContainerStyle={styles.list}
            keyExtractor={item => item.id}
            renderItem={({item}) => 
              <TouchableOpacity 
              onPress={() => this.props.navigation.push("Detail", item)}
              >
                <SingleItem data={item} />
              </TouchableOpacity>
            }
          />
        }
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center'
  },
});
