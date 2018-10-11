import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { redColor, whiteColor } from '../Colors';

export default class boasVindas extends Component {

    render(){
        return(
            <View style={{ flex: 1, padding: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: whiteColor }}>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ color: redColor , fontSize: 30 }}>Seja Bem Vindo!</Text>
                    <Icon name='forum' size={80} color= {redColor} />
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ backgroundColor: redColor, height: 40, width: 120, justifyContent: 'center' }}  onPress={() => Actions.formLogin()}>
                        <Text style={{  alignSelf: 'center', fontSize: 18, color: whiteColor }}>
                            Fazer Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
   
}