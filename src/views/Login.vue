<template>
  <div class="login">
    <div class="login-box">
      <div class="login-body">
        <div class="login-main">
          <div class="sugar-item">
            <span>密码登录</span>
          </div>
          <div class="sugar-item">
            <input type="text" class="sugar-input" placeholder="输入用户名" />
          </div>
          <div class="sugar-item">
            <input type="password" class="sugar-input" placeholder="输入密码" />
          </div>
          <div class="sugar-item">
            <button class="sugar-button sugar-btn-primary" type="button" @click="loginPage">立即登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
  Watch,
  Emit,
  Model
} from 'vue-property-decorator';

@Component({})
export default class Login extends Vue {
  private loginPage(): void {
    sessionStorage.setItem('token', 'true');
    this.$router.push({
      name: 'index'
    });
  }
}
</script>

<style lang="scss">
.login {
  height: 650px;
  .login-box {
    background: url('../assets/login_banner_bg.jpg') no-repeat;
    background-size: 100% 100%;
    height: inherit;
  }
  .login-body {
    background: url('../assets/login_banner_ele.png') no-repeat;
    margin: 0 auto;
    text-align: center;
    width: 1280px;
    position: relative;
    height: 590px;
    background-position-y: 60px;
  }
  .login-main {
    background: #fff;
    position: absolute;
    right: 160px;
    z-index: 100;
    border-radius: 3px;
    cursor: default;
    width: 340px;
    height: 400px;
    top: 100px;
  }
  .sugar-item:first-child {
    text-align: left;
  }
  .sugar-item {
    margin: 30px 15px;
  }
}
</style>
