import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Image, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {getDogs, getDogsAsync} from './../service/FetchData.js'

const screenWidth = Dimensions.get('window').width;


export default class HomeScreen extends Component {

    state = {
        numberOfLikes: 0
    }

    onImgPress = () => (
        console.log('test')
    )

    render() {
        const data = this.props.navigation.state.params || {}
        return (
            <TouchableWithoutFeedback onPress={this.onImgPress}>
                <View>
                    <Image 
                        style={[{width: screenWidth,  height: screenWidth} ]}
                        source={{ uri: data.imageUrl }} 
                    /> 
                    <Text>
                        <Ionicons name="ios-heart-outline" size={34} color="black" style={{ marginTop: 12, marginLeft: 15 }} />
                        {data.numberOfLikes}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({

});
