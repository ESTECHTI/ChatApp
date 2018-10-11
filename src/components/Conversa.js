import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { View, TextInput, TouchableOpacity, ListView, Text, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { redColor, strongYellow, lightGray, whiteColor, beigeColor, blackColor, lightGreen } from '../Colors';
import { modificaMensagem, enviarMensagem, conversaUsuarioFetch } from '../actions/AppActions';

class Conversa extends Component {

    componentWillMount() {
        this.props.conversaUsuarioFetch(this.props.contatoEmail)
        this.criaFonteDeDados( this.props.conversa );
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.contatoEmail != nextProps.contatoEmail) {
            this.props.conversaUsuarioFetch(nextProps.contatoEmail)
        }
        this.criaFonteDeDados(nextProps.conversa);
    }

    criaFonteDeDados( conversa ) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows( conversa )
    }

    _enviarMensagem() {
        const { mensagem, contatoNome, contatoEmail } = this.props;

        this.props.enviarMensagem(mensagem, contatoNome, contatoEmail)
    }

    renderRow(texto) {

        if(texto.tipo === 'e') {
            return (
                <View style={{ alignItems: 'flex-end', marginTop: 5, marginBottom: 5, marginLeft: 40 }}>
                    <Text style={{ 
                        fontSize: 18, 
                        borderRadius: 8,
                        color: whiteColor, 
                        padding: 10, 
                        backgroundColor: lightGreen, 
                        elevation: 1 
                        }}>{texto.mensagem}</Text>
                </View>
            )
        }
        return (
            <View style={{ alignItems: 'flex-start', marginTop: 5, marginBottom: 5, marginRight: 40 }}>
                    <Text style={{ 
                        fontSize: 18, 
                        borderRadius: 8,
                        color: whiteColor, 
                        padding: 10, 
                        backgroundColor: lightGreen, 
                        elevation: 1 
                        }}>{texto.mensagem}</Text>
                </View>
        )
    }

    render(){
        return(
            <View style={{ flex: 1, backgroundColor: beigeColor, padding: 10 }}>
                    <View style={{flex: 1, paddingBottom: 20 }}>
                        <ListView 
                            enableEmptySections
                            dataSource={this.dataSource}
                            renderRow={this.renderRow}
                        />
                    <View style={{ flexDirection: 'row', height: 60 }}>
                        <TextInput 
                            value={this.props.mensagem}
                            onChangeText={texto => this.props.modificaMensagem(texto)}
                            style={{ flex: 4, backgroundColor: whiteColor, fontSize: 18, borderRadius: 15 }} 
                            keyboardType='default'
                        />
                        <TouchableOpacity
                            onPress={this._enviarMensagem.bind(this)}
                        >
                            <Icon name='paper-plane' size={40} color= {redColor}/>
                        </TouchableOpacity>
                    </View>
                    </View>
                    
            </View>
        )
    }
}

mapStateToProps = state => {

    const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
        return { ...val, uid };
    });

    return ({
        conversa,
        mensagem: state.AppReducer.mensagem
    })
}

export default connect(mapStateToProps, { modificaMensagem, enviarMensagem, conversaUsuarioFetch })(Conversa)