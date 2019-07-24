<template>
  <div id="app">
    <div class="sugar-qq-box">
      <!--个人信息-->
      <div class="sugar-qq-info">
        <!--顶部工具栏-->
        <div class="sugar-qq_toolbar">
          <span class="logo"></span>
          <span class="close"></span>
        </div>
      </div>
    </div>
    <!-- <router-link to="/sugar/user">to user</router-link>
    <router-view></router-view>-->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import mixins from '../mixins/mixins';
@Component({
  mixins: [mixins]
})
export default class Index extends Vue {
  private getResult(): void {
    this.axios.get('http://localhost:10001/user.js').then((res: any) => {
      console.log('result', res);
    });
  }

  private created(): void {
    this.getResult();
  }
}
</script>

<style lang="scss">
#app {
  .sugar-qq-box {
    width: 350px;
    height: 700px;
    background: #fff;
    margin: 50px auto;
    box-shadow: 1px 1px 10px #ccc;
    border-radius: 3px;

    .sugar-qq_toolbar {
      height: 30px;
      span {
        display: block;
      }
      .logo {
        float: left;
        background: url('../assets/qq.svg') no-repeat center;
        width: 30px;
        height: 30px;
      }
      .close {
        background: url('../assets/close.png') no-repeat center;
        width: 30px;
        height: 30px;
        float: right;
        cursor: pointer;
        border-top-right-radius: 3px;
        &:hover {
          background-color: rgb(255, 84, 57);
        }
      }
    }
  }
  .sugar-qq-info {
    background: url('../assets/main.png');
    height: 140px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
}
</style>
