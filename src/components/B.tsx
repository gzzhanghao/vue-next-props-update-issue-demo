import { h, defineComponent } from 'vue';

export default defineComponent({
  setup(props) {
    return () => h('span', { ...props })
  },
})