import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, Alert} from 'react-native';
import db from '../config'
import { ScrollView } from 'react-native-gesture-handler';

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
        }
    }
    login=async(email, password)=>{
        if (email && password){ 
            try{ 
                const response = await firebase.auth().signInWithEmailAndPassword(email,password);
             if(response){ 
                this.props.navigation.navigate('Transaction')
            }
        } 
            catch(error){ 
                switch (error.code) {
                case 'auth/user-not-found': Alert.alert("user dosen't exists")
                break;
                case 'auth/invalid-email': Alert.alert('incorrect email or password') 
                break; 
            }
        }
    } 
            else{
                Alert.alert('enter email and password'); 
            }
        }
    render(){
        return(
            <KeyboardAvoidingView>
            <View>
                <Image
                source={require("../assets/booklogo.jpg")}
                style={{width:200, height:200}}/>
                <Text style={{textAlign:"center", fontSize:30}}>UNITY</Text>
            </View>
            <View>
            <TextInput placeholder="Email ID" keyboardType="email.address" style={StyleSheet.loginbox} onChangeText={
                (text)=>{
                    this.setState({emailId:text})
                }
            }></TextInput>
            <TextInput placeholder="Enter Password" style={StyleSheet.loginbox} secureTextEntry={true} onChangeText={
                (text)=>{
                    this.setState({
                        password:text,
                    })
                }
            }></TextInput>
            </View>
            <View>
                <TouchableOpacity style={{height:30, width:90, borderWidth:1}} onPress={()=>{
                    this.login(this.state.emailId,this.state.password)}}>
                    <Text>LOGIN</Text></TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        )
    }
}