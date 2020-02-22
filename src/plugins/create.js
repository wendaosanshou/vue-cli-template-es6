import Vue from 'vue';

function create(Component, props) {
  const vm = new Vue({
    render(h) {
      return h(Component, { props });
    },
  }).$mount();

  // 将生成dom元素追加⾄body
  document.body.appendChild(vm.$el);

  // 给组件实例例添加销毁方法
  const comp = vm.$children[0];
  comp.remove = () => {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  };
}

export default create;
