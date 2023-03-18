import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchInput = () => {
  return (
    <View style={styles.container}>
    <TextInput
autoCorrect={false}
placeholder='Search any City'
placeholderTextColor='white'
style={styles.textInput}
clearButtonMode='always'
/>
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({


container:{
    backgroundColor:'#666',
    color:'white',
    height:40,
    width:300,
    marginTop:20,
    marginHorizontal:20,
    paddingHorizontal:10,
    borderRadius:5,
    alignSelf:'center'
    },

    textInput: {
      flex: 1,
      color: 'white',
      },
})