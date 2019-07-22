<template>
  <div>
    ts test
    <span>
      <p>{{user}}</p>
      <input type="text" v-model="dataParam.userName" @input="change">
      {{dataParam.userName}}
    </span>
    <p>watch的方法</p>
    <p>参数传值:{{param}}</p>
    <p>Vuex值：{{vuexName}}</p>
    <p>Getter值：{{gettersName}}</p>
    <button @click="changeMutationVuex">Mutation</button>
    <button @click="changeActionVuex">Action</button>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Watch,
  Emit,
  Model
} from 'vue-property-decorator';
import User from '../imp/User';
import mixins from '../mixins/mixins';
import { State, Mutation, Action, Getter } from 'vuex-class';

@Component({
  mixins: [mixins]
})
export default class Test extends Vue {
  // Getter的使用
   @Getter('userNameResult') private gettersName: any;
  // vuex的使用
  @State(state => state.user.userName)
  private vuexName?: string;
  // Mutation的使用
  @Mutation('UPDATE_USER') private UPDATE_USER: any;
  @Action('ASYNC_UPDATE_USER') private ASYNC_UPDATE_USER: any;
  // 自定义属性和方法
  @Model('change')
  // 组件传参
  @Prop()
  private age?: number;
  @Prop() private param?: string;
  // 定义属性
  private dataParam: any = {
    userName: null
  };
  private data: string | null = null;
  private user: User = new User();
  // 定义方法(相当于methods)
  private createUser(): void {
    console.log(this);
    // const userParam = new User(1, 'sugar', '312472644');
    // this.user = userParam.addUser(userParam);
  }
  // 生命周期
  private created() {
    this.createUser();
  }
  // Mutation方法的调用
  private changeMutationVuex(): void {
    this.UPDATE_USER(this.dataParam.userName);
  }
  // Action方法的调用
  private changeActionVuex(): void {
    this.ASYNC_UPDATE_USER(this.dataParam.userName);
  }
  // 数据监听
  @Watch('user.Name', { deep: true })
  private changeValue(newValue: string, oldValue: string) {
    // alert(`newValue:${newValue}---oldValue:${oldValue}`);
  }
  // 给父组件传值
  @Emit()
  private change(): any {
    return this.dataParam.userName;
  }
}
</script>


<style>
</style>
