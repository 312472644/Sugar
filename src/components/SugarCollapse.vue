
<template>
  <div>
    <div class="sugar-collapse" v-for="(item,index) in data" :key="index">
      <div class="sugar-collapse_title" @click="toggle(item.groupName)">
        <span :class="show?'group-icon-down':'group-icon-left'"></span>
        <span class="group">{{item.groupName}}</span>
      </div>
      <ul v-show="item.show">
        <li class="clear" v-for="(friend,index) in item.friends" :key="index">
          <span class="user-image"></span>
          <div class="user-name">
            <span>{{friend.name}}</span>
            <span class="desc">个性签名</span>
          </div>
        </li>
      </ul>
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
@Component
export default class SugarCollapse extends Vue {
  @Prop()
  private data: any;

  private show: boolean = false;

  private created() {
    this.initData();
  }

  private initData() {
    this.data.forEach((element: any) => {
      this.$set(element, 'show', false);
    });
    console.log('this.data', this.data);
  }

  // 显示隐藏分组
  private toggle(groupName: string) {
    this.data.forEach((element: any) => {
      if (element.groupName === groupName) {
        element.show = !element.show;
      }
    });
  }
}
</script>

<style lang='scss'>
.sugar-collapse {
  .sugar-collapse_title {
    height: 30px;
    padding: 3px 15px;
    &:hover {
      background: #f2f2f2;
      cursor: pointer;
    }
  }

  .group {
    font-size: 13px;
    display: block;
    float: left;
    line-height: 30px;
    padding-left: 10px;
  }

  %group-icon {
    width: 16px;
    height: 30px;
    display: block;
    float: left;
  }

  .group-icon-left {
    @extend %group-icon;
    background: url('../assets/left.png') no-repeat center;
  }

  .group-icon-down {
    @extend %group-icon;
    background: url('../assets/down.png') no-repeat center;
  }

  li {
    height: 60px;
    padding: 0 15px;
    &:hover {
      background: #f2f2f2;
      cursor: pointer;
    }
  }

  .user-image {
    background: url(/img/user.38a84621.jpg) no-repeat center;
    display: block;
    width: 40px;
    height: 40px;
    float: left;
    background-size: contain;
    border-radius: 50%;
    margin-top: 10px;
  }

  .user-name {
    float: left;
    padding-left: 10px;
    height: inherit;
    padding-top: 10px;
    box-sizing: border-box;
    width: calc(100% - 40px);
    span {
      display: block;
      height: 15px;
    }

    .desc {
      margin-top: 5px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 100%;
    }
  }
}
</style>
    