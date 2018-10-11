import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } from '../actions/AutenticacaoActions';
import { redColor, strongYellow, whiteColor } from '../Colors';

class formCadastro extends Component {

    _cadastraUsuario(){

        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({ nome, email, senha });
    }

    renderBtnCadastro() {
        if(this.props.loading_cadastro) {
            return (
                <ActivityIndicator  size= "large" color= {redColor}/>
            )
        }
        return(
            <TouchableOpacity style={{ backgroundColor: redColor, justifyContent: 'center', height: 40 }} onPress={() => this._cadastraUsuario()}>
                <Text style={{ color: whiteColor, fontSize: 20, textAlign: 'center' }}>Cadastrar</Text>
            </TouchableOpacity>
        )
    }

    render(){
        return(
            <View style={{ flex: 1, padding: 10, backgroundColor: whiteColor }}>
                <View style={{ flex: 4, justifyContent: 'center' }}>
                    <TextInput value={this.props.nome} placeholder="Nome" placeholderTextColor= {redColor} style={{ fontSize: 20, height: 45, color: redColor  }} onChangeText={texto => this.props.modificaNome(texto)}/>
                    <TextInput value={this.props.email} placeholder="E-mail" placeholderTextColor= {redColor} style={{ fontSize: 20, height: 45, color: redColor  }} onChangeText={texto => this.props.modificaEmail(texto)}/>
                    <TextInput secureTextEntry value={this.props.senha} placeholder="Senha" placeholderTextColor= {redColor} style={{ fontSize: 20, height: 45, color: redColor  }} onChangeText={texto => this.props.modificaSenha(texto)}/>
                    <Text style={{ color: strongYellow, fontSize: 18 }}>{this.props.erroCadastro}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    {this.renderBtnCadastro()}
                </View>
            </View>
        )
    }
 }

 const mapStateToProps = state => {
     return(
     {
         nome: state.AutenticacaoReducer.nome,
         email: state.AutenticacaoReducer.email,
         senha: state.AutenticacaoReducer.senha,
         erroCadastro: state.AutenticacaoReducer.erroCadastro,
         loading_cadastro: state.AutenticacaoReducer.loading_cadastro
     }
  );
}

 export default connect(mapStateToProps, {modificaEmail, modificaSenha, modificaNome, cadastraUsuario})(formCadastro);