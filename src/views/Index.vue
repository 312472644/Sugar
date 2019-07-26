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
                <li @click="saveSkin(item.class)" v-for="(item,index) in colors" :key="index">
                  <span :class="item.class"></span>
                  <span style="padding-top:5px">{{item.text}}</span>
                </li>
              </ul>
            </div>
          </span>
          <span class="close"></span>
        </div>
        <user-info :info="qqInfo"></user-info>
        <div class="sugar-qq-search">
          <sugar-input v-model="searchValue"></sugar-input>
        </div>
      </div>
      <sugar-tab v-if="!hasShowResult" value="contacts">
        <sugar-tab-panel label="联系人" name="contacts">
          <SugarCollapse :data="friends"></SugarCollapse>
        </sugar-tab-panel>
        <sugar-tab-panel label="空间" name="zone">空间</sugar-tab-panel>
        <sugar-tab-panel label="消息" name="message">消息</sugar-tab-panel>
      </sugar-tab>
      <SugarSearch v-else :data="searchResult"></SugarSearch>
    </div>
    <!-- <router-link to="/sugar/user">to user</router-link>
    <router-view></router-view>-->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import mixins from '../mixins/mixins';
import UserInfo from '../components/UserInfo.vue';
import SugarInput from '../components/SugarInput.vue';
import SugarTab from '../components/SugarTab.vue';
import SugarTabPanel from '../components/SugarTabPanel.vue';
import SugarCollapse from '../components/SugarCollapse.vue';
import SugarSearch from '../components/SugarSearch.vue';

@Component({
  mixins: [mixins],
  components: {
    UserInfo,
    SugarInput,
    SugarTab,
    SugarTabPanel,
    SugarCollapse,
    SugarSearch
  }
})
export default class Index extends Vue {
  private qqInfo: object = {
    name: 'Sweety Xiong',
    desc: '大梦谁先觉，平生我自知'
  };

  // 搜索结果
  private searchResult: [] = [];
  // 是否展示搜索结果
  private hasShowResult: boolean = false;
  // 搜索值
  private searchValue: string | null = null;
  private colorPick = {
    currColor: sessionStorage.getItem('skin') || 'skin-sun',
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

  private friends = [
    {
      groupName: '分组一',
      friends: [
        {
          name: '张三'
        },
        {
          name: '李四'
        }
      ]
    },
    {
      groupName: '分组二',
      friends: [
        {
          name: '张三'
        },
        {
          name: '李四'
        }
      ]
    },
    {
      groupName: '分组三',
      friends: [
        {
          name: '张三'
        },
        {
          name: '李四'
        }
      ]
    },
    {
      groupName: '分组四',
      friends: [
        {
          name: '张三'
        },
        {
          name: '李四'
        }
      ]
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

  // 保存皮肤
  private saveSkin(className: string) {
    this.colorPick.currColor = className;
    sessionStorage.setItem('skin', className);
  }

  // 搜索数据
  private filterData() {
    this.searchResult = [];
    const cloneData = JSON.parse(JSON.stringify(this.friends));
    cloneData.forEach((item: any) => {
      item.friends.forEach((friends: any) => {
        // 正则表达式匹配字段
        const flagField = friends.name.replace(
          new RegExp(this.searchValue as any, 'g'),
          '<font style="color:#009BDB">' + this.searchValue + '</font>'
        );
        friends.flag = friends.name.indexOf(this.searchValue) > -1;
        friends.name = flagField;
        if (friends.flag) {
          this.searchResult.push(friends as never);
        }
      });
    });
  }

  @Watch('searchValue')
  private showResult(val: string) {
    this.hasShowResult = val ? true : false;
    this.filterData();
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

  .sugar-qq-search {
    position: absolute;
    bottom: 0;
    height: 30px;
    right: 0;
    left: 0;
  }
  .sugar-qq-info {
    height: 140px !important;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    position: relative;
  }
}
</style>
