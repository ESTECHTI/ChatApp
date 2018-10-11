import React,  { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/AppActions';
import { redColor, strongYellow, whiteColor } from '../Colors';

class AdiconarContato extends Component {

    renderAdiconarContato() {
        if(!this.props.cadastro_resultado_inclusao){
            return (
                
                <View style={{ flex: 1, backgroundColor: whiteColor }}>
                    <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
                        <TextInput 
                            placeholder= 'E-mail'
                            style={{ fontSize: 20, height: 45, color: redColor }}
                            placeholderTextColor={redColor}
                            onChangeText={(texto) => this.props.modificaAdicionaContatoEmail(texto) }
                            value={this.props.adiciona_contato_email}
                        />
                    </View>
                    <View style={{ flex: 1, padding: 10 }}>
                        <TouchableOpacity style={{ backgroundColor: redColor, height: 40, justifyContent: 'center' }}
                            onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email) }
                        >
                            <Text style={{ color: whiteColor, fontSize: 20, alignSelf: 'center' }}>Adiconar</Text>
                        </TouchableOpacity>
                        <Text style={{ color: strongYellow, fontSize: 20 }}>{this.props.cadastro_resultado_txt_erro}</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center' }}>Cadastro realizado com sucesso!</Text>
                    <Icon name='thumbs-up' size={60} color= {redColor}/>
                </View>
            )
        }
    }

    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center' }}>
                { this.renderAdiconarContato() }
            </View>
        )
    }
    
}

const mapStateToProps = state => (
    {
        adiciona_contato_email: state.AppReducer.adiciona_contato_email,
        cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
        cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao
    }
)

export default connect(mapStateToProps, { modificaAdicionaContatoEmail, adicionaContato })(AdiconarContato);