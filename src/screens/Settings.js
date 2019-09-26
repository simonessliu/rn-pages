import React from 'react';
import {View, Text, StyleSheet, FlatList, Button, ScrollView,TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';


const Settings = () => {
    return (
        <ScrollView style = {styles.background}>
            <View style = {styles.box}>
                <View style={{marginLeft: 5, marginRight: 5}}>
                    <View style = {{flexDirection:'row', justifyContent:'space-between', marginBottom:20}}>
                        <Text style={styles.header}>Setting pages</Text>
                        <View style={styles.container}>
                            <Text style={{marginTop:5, fontSize: 12}}>Edit</Text>  
                            <AntDesign name = "right" size = {18} style={{marginTop:3}}/>
                        </View>
                       
                    </View>               
                    <View style = {styles.container}>
                        <View style= {{flex:1}}>
                            <Text style={styles.text}>Name</Text>
                            <Text style={styles.subtext}>Scott KKK</Text>
                        </View> 
                        <View style= {{flex:2}}>
                            <Text style={styles.text}>Name</Text>
                            <Text style={styles.subtext}>Scott KKK</Text>
                        </View> 
                    </View>   
                </View>                 
            </View>
            <View style = {styles.box}>
                <View style={{marginLeft: 5, marginRight: 5}}>
                    <View style = {{flexDirection:'row', justifyContent:'space-between', marginBottom:20}}>
                        <Text style={styles.header}>Setting pages</Text>
                        <View style={styles.container}>
                            <Text style={{marginTop:5, fontSize: 12}}>Edit</Text>  
                            <AntDesign name = "right" size = {18} style={{marginTop:3}}/>
                        </View>
                       
                    </View>               
                    <View style = {styles.container}>
                        <View style= {{flex:1}}>
                            <Text style={styles.text}>Name</Text>
                            <Text style={styles.subtext}>Scott KKK</Text>
                        </View> 
                        <View style= {{flex:2}}>
                            <Text style={styles.text}>Name</Text>
                            <Text style={styles.subtext}>Scott KKK</Text>
                        </View> 
                    </View>   
                </View>                 
            </View>
            <View style = {styles.box}>
                <View style={{marginLeft: 5, marginRight: 5}}>
                    <View style = {{flexDirection:'row', justifyContent:'space-between', marginBottom:20}}>
                        <Text style={styles.header}>Setting pages</Text>
                        <View style={styles.container}>
                            <Text style={{marginTop:5, fontSize: 12}}>Edit</Text>  
                            <AntDesign name = "right" size = {18} style={{marginTop:3}}/>
                        </View>
                    
                    </View>               
                    <View style = {styles.container}>
                        <View style= {{flex:1}}>
                            <Text style={styles.text}>Name</Text>
                            <Text style={styles.subtext}>Scott KKK</Text>
                        </View> 
                        <View style= {{flex:2}}>
                            <Text style={styles.text}>Name</Text>
                            <Text style={styles.subtext}>Scott KKK</Text>
                        </View> 
                    </View>   
                </View>                 
            </View>
            <View style = {styles.box}>
                <View style={{marginLeft: 5, marginRight: 5}}>
                    <View style = {{flexDirection:'row', justifyContent:'space-between', marginBottom:20}}>
                        <Text style={styles.header}>Setting pages</Text>
                        <View style={styles.container}>
                            <Text style={{marginTop:5, fontSize: 12}}>Edit</Text>  
                            <AntDesign name = "right" size = {18} style={{marginTop:3}}/>
                        </View>
                    
                    </View>               
                    <View style = {styles.container}>
                        <View style= {{flex:1}}>
                            <Text style={styles.text}>Name</Text>
                            <Text style={styles.subtext}>Scott KKK</Text>
                        </View> 
                        <View style= {{flex:2}}>
                            <Text style={styles.text}>Name</Text>
                            <Text style={styles.subtext}>Scott KKK</Text>
                        </View> 
                    </View>   
                </View>                 
            </View>
            <View style = {styles.box}>
                <View style={{marginLeft: 5, marginRight: 5}}>
                    <View style = {{flexDirection:'row', justifyContent:'space-between', marginBottom:20}}>
                        <Text style={styles.header}>Setting pages</Text>
                        <View style={styles.container}>
                            <Text style={{marginTop:5, fontSize: 12}}>Edit</Text>  
                            <AntDesign name = "right" size = {18} style={{marginTop:3}}/>
                        </View>
                    
                    </View>               
                    <View style = {styles.container}>
                        <View style= {{flex:1}}>
                            <Text style={styles.text}>Name</Text>
                            <Text style={styles.subtext}>Scott KKK</Text>
                        </View> 
                        <View style= {{flex:2}}>
                            <Text style={styles.text}>Name</Text>
                            <Text style={styles.subtext}>Scott KKK</Text>
                        </View> 
                    </View>   
                </View>                 
            </View>    
        </ScrollView>
    )
}

Settings.navigationOptions = ({navigation}) => {
    return{
        title:'Setting',
        headerTintColor:'white',
        headerStyle:{
            backgroundColor:'black'
        },
        headerLeft: <TouchableOpacity>
            <AntDesign name="left" size={20} style={{color:'white'}}/>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor:'#E6E6E6'
    },
    container: {
        flexDirection: 'row',
    },
    box: {
        marginTop: 10,
        width: '100%',
        height:126,
        flexDirection:'column',
        backgroundColor: '#FFFFFF',
        justifyContent:'space-between',
        paddingVertical: 20,
        paddingHorizontal:10    
    }, 
    header: {
        fontSize: 20,
    },
    text: {
        fontSize: 16, 
    },

    subtext: {
        fontSize: 12,
        marginTop:5,
        color: '#717171'
    }
})

export default Settings