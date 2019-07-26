
<template>
  <div class="sugar-seacrch">
    <div class="sugar-title">
      <span>好友</span>
    </div>
    <ul v-if="data.length">
      <li v-for="(item,index) in data" :key="index" v-html="item.name"></li>
    </ul>
    <div v-else class="no-record">
      <span>对不起,没有找到</span>
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
export default class SugarSearch extends Vue {
  @Prop()
  private data!: [];
}
</script>

<style lang='scss'>
.sugar-seacrch {
  font-size: 13px;
  .sugar-title {
    height: 30px;
    line-height: 30px;
    color: #666;
    padding: 0 10px;
  }
  li {
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    &:hover {
      background: #f2f2f2;
      cursor: pointer;
    }
  }
  .no-record {
    background: url('../assets/icon_no-record.svg') no-repeat center;
    height: 128px;
    position: relative;
    span {
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
    