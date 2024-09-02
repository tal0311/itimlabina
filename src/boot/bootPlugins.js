// src/boot/myPlugin.js

import { boot } from 'quasar/wrappers';
import {svgPlugin} from 'src/plugins.js';   

export default boot(({ app }) => {
  app.use(svgPlugin); 
});
