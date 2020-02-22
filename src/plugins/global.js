import Vue from 'vue';
// import Dialog from '../components/Dialog.vue';

import create from './create';

function initGlobal() {
  Vue.prototype.$create = create;
}

export default initGlobal;
