import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NeomorphBlur } from 'react-native-neomorph-shadows';
const categories = ['Entertainment'];
const business = ['Business'];
const politics = ['Politics'];
const health = ['Health'];
const tech = ['Technology'];
const sport = ['Sports'];

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Categories extends Component {
  state = {};
  render() {
    return (
      
      <View style={{  flexDirection: 'column',  elevation:2, backgroundColor:'white' }}>
<View>
        <LinearGradient start={{x: 0.5, y: 0.5}} end={{x: 0.5, y: 0}} colors={[/* '#8a9a5b','#e6ffc9','#9ab973', */'#d6dec1','#dcdcdc','#d6dec1' ]} style={styles2.linearGradient}/>
      </View>
        
          {categories.map((category, index) => (
            <TouchableOpacity style={{ margin:10, width:80,flexDirection:'column',height:80,backgroundColor:'white', shadowColor:'blue',  elevation:10, borderWidth:1, borderColor:'lightblue',
             bottom:680,left:40, borderRadius:20}}
              key={index}
              onPress={() =>
                this.props.navigation.navigate('GetNews', {
                  category,
                })
              }>
              <View >
              <NeomorphBlur
            darkShadowColor="#000066"
  style={styles2.Icon_Style}
/>
                <Image
                  style={{height:75,width:75, bottom:75, left:4, borderRadius:20}} resizeMode='contain' source={require('../assets/entertainment_png.png')}>
                </Image>
                <Text
                  style={{
                    bottom:69,
                    fontWeight:'bold',
                    fontSize:12,
                    color:'#354230'
                  }}>
                  {category}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          {business.map((category, index) => (
            <TouchableOpacity style={{margin:10,width:80,flexDirection:'column',height:80,backgroundColor:'white', shadowColor:'blue',  elevation:10, borderWidth:1, borderColor:'lightblue',
            bottom:780, left:150, borderRadius:20 }}
              key={index}
              onPress={() =>
                this.props.navigation.navigate('GetNews', {
                  category,
                })
              }>
              <View>
              <NeomorphBlur
            darkShadowColor="#000066" 
  style={styles2.Icon_Style}
/>
                <Image
                  style={{height:70,width:70, bottom:75, left:4, borderRadius:10}} resizeMode='contain' source={require('../assets/b1.png')}>
                </Image>
                <Text
                  style={{
                    bottom:65,
                    fontWeight:'bold',
                    fontSize:12,
                    color:'#354230',
                    left:14
                  }}>
                  {category}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          {health.map((category, index) => (
            <TouchableOpacity style={{margin:10, width:80,flexDirection:'column',height:80,backgroundColor:'white', shadowColor:'blue',  elevation:10, borderWidth:1, borderColor:'lightblue',
            bottom:880, left:260, borderRadius:20 }}
              key={index}
              onPress={() =>
                this.props.navigation.navigate('GetNews', {
                  category,
                })
              }>
              <View>
              <NeomorphBlur
            darkShadowColor="#000066" // <- set this
           
  style={styles2.Icon_Style}
/>
                <Image
                  style={{height:68,width:68, bottom:75, left:4, borderRadius:20}}  source={require('../assets/doc.png')}>
                </Image>
                <Text
                  style={{
                    bottom:60,
                    fontWeight:'bold',
                    fontSize:12,
                    color:'#354230',
                    left:20
                  }}>
                  {category}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
 
       
          {tech.map((category, index) => (
            <TouchableOpacity style={{margin:10, width:80,flexDirection:'column',height:80,backgroundColor:'white', shadowColor:'blue',  elevation:10, borderWidth:1, borderColor:'lightblue',
            bottom:855, left:40, borderRadius:20 }}
              key={index}
              onPress={() =>
                this.props.navigation.navigate('GetNews', {
                  category,
                })
              }>
              <View>
              <NeomorphBlur
            darkShadowColor="#000066" // <- set this
           
  style={styles2.Icon_Style}
/>
                <Image
                  style={{height:78,width:75, bottom:80, left:1, borderRadius:20, borderColor:'black', borderWidth:0}} resizeMode='contain' source={require('../assets/tech.png')}>
                </Image>
                <Text
                  style={{
                    bottom:68,
                    fontWeight:'bold',
                    fontSize:12,
                    color:'#354230',
                    left:10
                  }}>
                  {category}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          {sport.map((category, index) => (
            <TouchableOpacity style={{margin:10,width:80,flexDirection:'column',height:80,backgroundColor:'white', shadowColor:'blue',  elevation:10, borderWidth:1, borderColor:'lightblue',
            bottom:955, left:150, borderRadius:20 }}
              key={index}
              onPress={() =>
                this.props.navigation.navigate('GetNews', {
                  category,
                })
              }>
              <View>
              <NeomorphBlur
            darkShadowColor="#000066" // <- set this
            
  style={styles2.Icon_Style}
/>
                <Image
                  style={{height:78,width:75, bottom:80, left:1,borderRadius:20,  }} resizeMode='contain' source={require('../assets/sports.png')}>
                </Image>
                <Text
                  style={{
                    bottom:68,
                    fontWeight:'bold',
                    fontSize:12,
                    color:'#354230',
                    left:18
                  }}>
                  {category}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          

        </View>
      
    );
  }
}
const styles2 = StyleSheet.create({
  linearGradient: {height: deviceHeight,width: 411,},
  Icon_Style: {
    shadowRadius: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    width: 80,
    height: 80,
  
}

  
});
export default Categories;