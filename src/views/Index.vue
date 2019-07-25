<template>
  <div id="app">
    <div class="sugar-qq-box">
      <!--个人信息-->
      <div :class="['sugar-qq-info',colorPick.currColor]">
        <!--顶部工具栏-->
        <div class="sugar-qq_toolbar">
          <span class="logo"></span>
          <span class="skin" @click.stop="colorPick.dialog = !colorPick.dialog">
            <div class="skin-box" v-show="colorPick.dialog">
              <ul class="clear">
                <li
                  @click="colorPick.currColor = item.class"
                  v-for="(item,index) in colors"
                  :key="index"
                >
                  <span :class="item.class"></span>
                  <span style="padding-top:5px">{{item.text}}</span>
                </li>
              </ul>
            </div>
          </span>
          <span class="close"></span>
        </div>
        <user-info :info="qqInfo"></user-info>
      </div>
    </div>
    <!-- <router-link to="/sugar/user">to user</router-link>
    <router-view></router-view>-->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import mixins from '../mixins/mixins';
import UserInfo from '../components/UserInfo.vue';
@Component({
  mixins: [mixins],
  components: {
    UserInfo
  }
})
export default class Index extends Vue {
  private qqInfo: object = {
    name: 'Sweety Xiong',
    desc: '大梦谁先觉，平生我自知'
  };

  private colorPick = {
    currColor: 'skin-gray',
    dialog: false
  };
  // 颜色集合
  private colors = [
    {
      class: 'skin-gray',
      text: '浅灰色'
    },
    {
      class: 'skin-black',
      text: '深黑色'
    },
    {
      class: 'skin-green',
      text: '蓝绿色'
    },
    {
      class: 'skin-orange',
      text: '橙色'
    },
    {
      class: 'skin-red',
      text: '红色'
    },
    {
      class: 'skin-blue',
      text: '蓝色'
    },
    {
      class: 'skin-paris',
      text: '午夜巴黎'
    },
    {
      class: 'skin-cherry',
      text: '青葱岁月'
    },
    {
      class: 'skin-sun',
      text: '秋日暖阳'
    }
  ];

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
@import '../style/skin.scss';
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

      %tool-bar {
        width: 30px;
        height: 30px;
      }
      .logo {
        @extend %tool-bar;
        float: left;
        background: url('../assets/qq.png') no-repeat center;
      }
      .skin {
        @extend %tool-bar;
        position: relative;
        float: left;
        background: url('../assets/shirt.png') no-repeat center;
        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
          cursor: pointer;
        }

        .skin-box {
          width: 200px;
          background: #fff;
          position: absolute;
          top: 40px;
          z-index: 99;
          border-radius: 3px;
          left: 10px;
          padding: 15px 10px;
          box-shadow: 1px 1px 5px #ccc;
          li {
            display: block;
            float: left;
            font-size: 12px;
            width: 33.333333%;
            text-align: center;
            padding: 0 5px 10px 5px;
            box-sizing: border-box;
          }
        }
      }
      .close {
        @extend %tool-bar;
        background: url('../assets/close.png') no-repeat center;
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
    // background: url('../assets/main.png');
    height: 140px !important;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
}
</style>
