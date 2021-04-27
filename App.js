import { registerRootComponent } from 'expo';
import React from 'react';

import App from './src/App';

const app = props => (
  <App />
)

export default registerRootComponent(app);
