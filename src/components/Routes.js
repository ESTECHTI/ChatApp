import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import { redColor, whiteColor } from '../Colors';

import FormLogin from './FormLogin';
import FormCadastro from './FormCadastro';
import BoasVindas from './BoasVindas';
import Principal from './Principal';
import AdicionarContato from './AdicionarContato';
import Conversa from './Conversa';

  export default props => (
      <Router navigationBarStyle={{ backgroundColor: redColor}} titleStyle={{  alignSelf: 'center', color: whiteColor }}>
        <Scene key="root" backButtonTintColor={whiteColor}>
          <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar={true}/>
          <Scene key='formCadastro' component={FormCadastro} title="Cadastro" hideNavBar={false} backButtonTextStyle={whiteColor}/>
          <Scene key='boasVindas' component={BoasVindas} title="Bem Vindo" hideNavBar={true}/>
          <Scene key='principal' component={Principal} title="Principal" hideNavBar={true}/>
          <Scene key='adicionarContato' component={AdicionarContato} title="Adicionar Contato" hideNavBar={false} backButtonTextStyle={whiteColor}/>
          <Scene key='conversa' component={Conversa} title="Conversa" hideNavBar={false} backButtonTextStyle={whiteColor}/>
          </Scene>
      </Router>
  );
  