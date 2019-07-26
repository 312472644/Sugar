
<template>
  <div class="tab-container">
    <div class="sugar-table clear">
      <ul>
        <li
          :class="{'active':item.name == activeName}"
          :style="getLabelWidth"
          v-for="(item,index) in slotArray"
          :key="index"
          @click="activeName = item.name"
        >
          <span>{{item.label}}</span>
        </li>
      </ul>
    </div>
    <div class="sugar-tab-panel">
      <slot></slot>
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
export default class SugarTab extends Vue {
  @Prop()
  private value!: string;

  // 获取标签数据
  private slotArray: any = [];
  private activeName = this.value;
  private created() {
    this.getSlotData();
  }

  // 获取标签数据
  private getSlotData() {
    const slots: any = this.$slots.default;
    if (slots) {
      slots.forEach((t: any) => {
        this.slotArray.push(t.componentOptions.propsData);
      });
    }
  }

  // 动态获取宽度
  private get getLabelWidth(): string {
    const width = 100 / this.slotArray.length;
    return `width:${width}%`;
  }
}
</script>

<style lang='scss'>
.tab-container {
  max-height: calc(100% - 140px);
  overflow: auto;
  &:hover::-webkit-scrollbar-thumb {
    display: block;
  }
}
.sugar-table {
  padding: 0 15px;
  border-bottom: 1px solid #f0f0f0;
  li {
    float: left;
    display: block;
    line-height: 40px;
    font-size: 13px;
    color: #666;
    text-align: center;
    position: relative;
    cursor: pointer;
    &.active > span {
      position: relative;
      display: inline-block;
      &::after {
        content: '';
        border: 1px solid #bd1619;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 -15px -1px -15px;
      }
    }
    // &.active:after {
    //   content: '';
    //   border: 1px solid #bd1619;
    //   position: absolute;
    //   bottom: 0;
    //   left: 0;
    //   right: 0;
    //   margin-bottom: -1px;
    // }
  }
}
.sugar-tab-panel {
  font-size: 13px;
}

::-webkit-scrollbar {
  background: #fff;
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: #d7d7d7;
  width: 8px;
  border-radius: 4px;
  display: none;
}
</style>
    