
<template>
  <div class="sugar-info">
    <div class="sugar-image">
      <img src="../assets/user.jpg" />
      <div :class="['user-state',getState]" @click.stop="dialog=!dialog"></div>
      <!--改变用户状态-->
      <div class="user-state-box" v-if="dialog">
        <ul>
          <li @click.stop="state = item.state" v-for="(item,index) in stateArray" :key="index">
            <span :class="item.class"></span>
            <span>{{item.text}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="sugar-user_name">
      <span class="user-name">{{info.name}}</span>
      <span class="user-desc">{{info.desc}}</span>
    </div>
    <div class="weather"></div>
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

import { UserStateEnum } from '../enum/enum';

@Component
export default class UserInfo extends Vue {
  @Prop({ type: Object })
  private info!: object;

  // 用户状态
  private state: string = 'online';
  private dialog: boolean = false;
  private stateArray = [
    {
      state: UserStateEnum.onLine,
      class: 'state-online',
      text: '在线'
    },
    {
      state: UserStateEnum.offLine,
      class: 'state-offline',
      text: '离线'
    },
    {
      state: UserStateEnum.busy,
      class: 'state-busy',
      text: '忙碌'
    }
  ];

  // computed 属性
  private get getState(): string | undefined {
    let className;
    if (this.state === UserStateEnum.onLine) {
      className = 'state-online';
    } else if (this.state === UserStateEnum.offLine) {
      className = 'state-offline';
    } else if (this.state === UserStateEnum.busy) {
      className = 'state-busy';
    }
    return className;
  }

  private created() {
    this.hideDialog();
  }

  private hideDialog() {
    const vue = this;
    document.addEventListener('click', () => {
      vue.dialog = false;
    });
  }
}
</script>

<style lang='scss'>
.sugar-info {
  margin-top: 5px;
  height: 60px;
  .sugar-image {
    width: 60px;
    height: 60px;
    padding-left: 10px;
    float: left;
    position: relative;
    img {
      width: inherit;
      height: inherit;
      border-radius: 50%;
    }
  }

  .sugar-user_name {
    color: #fff;
    padding-left: 10px;
    float: left;
    padding-top: 6px;
    span {
      display: block;
    }
    .user-name {
      font-weight: bold;
      position: relative;
    }

    .user-desc {
      padding-top: 10px;
      font-size: 12px;
    }
  }

  .weather {
    background: url(/img/weather.9ea56720.svg) no-repeat center;
    height: inherit;
    float: right;
    width: 50px;
    cursor: pointer;
  }
  .user-state {
    right: 0;
    position: absolute;
    bottom: 0;
    margin-right: 0 !important;
    cursor: pointer;
  }
  .user-state-box {
    background: #fff;
    width: 200px;
    box-shadow: 1px 1px 10px #ccc;
    position: absolute;
    left: 55px;
    margin-top: 15px;
    border-radius: 3px;
    padding: 8px 0;
    ul,
    li {
      padding: 0;
      margin: 0;
    }

    li {
      list-style-type: none;
      line-height: 30px;
      padding-left: 15px;
      font-size: 13px;
      color: #666;
      &:hover {
        background: #f5f9fd;
        cursor: pointer;
      }
    }
  }

  %state-circle {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: text-bottom;
    margin-right: 15px;
  }

  .state-online {
    @extend %state-circle;
    background-color: #09f175;
  }

  .state-busy {
    @extend %state-circle;
    background-color: #fd563c;
  }

  .state-offline {
    @extend %state-circle;
    background-color: #adadad;
  }
}
</style>
    