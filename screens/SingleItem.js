import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'


const { width } = Dimensions.get('window');

export default SingleItem = ({ data }) => {
    
    calculateImageWidth = (numColumns) => {
        return width / numColumns
    }
      
    return (
        <View>
            <Image 
            style={[styles.image, {width: this.calculateImageWidth(3)}, {height: this.calculateImageWidth(3)} ]}
            source={{ uri: data.imageUrl }} 
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
      borderWidth: StyleSheet.hairlineWidth, 
      borderColor: 'lightgray',
    },
  });