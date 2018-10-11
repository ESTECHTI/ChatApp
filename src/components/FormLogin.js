import React,  { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';
import { redColor, strongYellow, lightGray, whiteColor } from '../Colors';


class formLogin extends Component {

    _autenticarUsuario() {
        const { email, senha } = this.props;

        this.props.autenticarUsuario({ email, senha });
        this.props.navigation.navigate('Principal')
    }

    renderBtnAcessar(){

         if(this.props.loading_login) {
             return (
                 <ActivityIndicator  size= "large" color= {redColor}/>
             )
         }
        return(
            <TouchableOpacity style={{ 
                backgroundColor: redColor, 
                height: 40,
                borderRadius: 20, 
                justifyContent: 'center', }} 
                onPress={() => this._autenticarUsuario()}
                >
                <Text style={{ alignSelf: 'center', fontSize: 20, color: whiteColor }}>Acessar</Text>
            </TouchableOpacity>
        )
    }

    render(){
        return(
            <View style={{ flex: 1, padding: 10, backgroundColor: whiteColor }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 25, color: redColor }}>TellMe</Text>
                    <Icon name='forum' size={40} color= {redColor} />
                </View>
            
                <View style={{ flex: 2 }}>
                    <TextInput value={this.props.email} style={{ fontSize: 20, height: 45, color: redColor }} placeholder="E-mail" placeholderTextColor={redColor} onChangeText={texto => this.props.modificaEmail(texto)}/>
                    <TextInput secureTextEntry value={this.props.senha} style={{ fontSize: 20, height: 45, color: redColor }} placeholder="Senha" placeholderTextColor={redColor} onChangeText={texto => this.props.modificaSenha(texto)}/>
                    
                    <Text style={{ fontSize: 18, color: strongYellow }}>{this.props.erroLogin}</Text>

                    <TouchableOpacity  onPress={() => Actions.formCadastro()}>
                        <Text style={{ fontSize: 18, color: lightGray }}>
                            Ainda não tem cadastro? Cadastra-se! 
                        </Text>
                    </TouchableOpacity>
                   
                </View>
                
                <View style={{ flex: 2 }}>
                    {this.renderBtnAcessar()}
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login
    }
)

export default connect(mapStateToProps, {modificaEmail, modificaSenha, autenticarUsuario})(formLogin)