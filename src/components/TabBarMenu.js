import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { connect } from 'react-redux';

import { habilitaInclusaoContato } from '../actions/AppActions';
import { redColor, whiteColor } from '../Colors';

const TabBarMenu = props => (

    <View style={{ backgroundColor: redColor, elevation: 4, marginBottom: 6 }}> 

        <StatusBar hidden={false}/>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{height: 80, justifyContent: 'center', backgroundColor: redColor }}>
                <Text style={{ color: whiteColor, fontSize: 20, marginLeft: 20}}>TellMe</Text>
            </View>

            <View style={{ flexDirection: 'row', marginRight: 20 }}>
                <View style={{ justifyContent: 'center', width: 50 }}>
                    <TouchableOpacity onPress={() => { Actions.adicionarContato(); props.habilitaInclusaoContato() }}>
                        <Icon name='user-plus' size={25} color= {whiteColor}/>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity 
                    onPress={() => firebase.auth().signOut().then(() => Actions.formLogin()) }
                >
                    <Text style={{ color: whiteColor, fontSize: 20}}>Sair</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
        
        <TabBar {...props} style={{ backgroundColor: redColor, elevation: 0 }}/>
    </View>
);

export default connect(null, { habilitaInclusaoContato })(TabBarMenu);