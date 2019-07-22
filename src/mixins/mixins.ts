import { Vue, Component } from 'vue-property-decorator';
declare module 'vue/types/vue' {
  // 自定义vue全局属性
  interface Vue {
    $myProperty: string | null;
  }
}

@Component
// Vue实现了 interface Vue接口，所以Vue新增的属性，继承了Vue的子类都能访问
export default class Mixins extends Vue {
  public $myProperty: string | null = null;
  public created() {
    this.methodFromMixins(222);
  }
  public methodFromMixins(value: number | string): void {
    console.log('mixins', value);
  }
}
