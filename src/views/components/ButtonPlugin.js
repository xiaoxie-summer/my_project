// ParticleButtonPlugin.js
import ParticleButton from './ButtonPlugin.vue';

const ParticleButtonPlugin = {
  install(Vue, options) {
    // 注册全局组件
    Vue.component('ParticleButton', ParticleButton);
    
    // 可以添加全局配置
    if (options) {
      // 这里可以添加全局默认配置
    }
  }
};

export default ParticleButtonPlugin;