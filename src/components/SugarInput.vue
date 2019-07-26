
<template>
  <div class="search-box">
    <div class="icon-search"></div>
    <input type="text" @input="input" class="search-text" placeholder="搜索" />
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
export default class SugarInput extends Vue {
  @Emit()
  private input(): string {
    const e: any = event;
    return e.target.value;
  }
}
</script>

<style lang='scss'>
.search-box {
  position: relative;
  .search-text {
    outline: none;
    border: none;
    height: 30px;
    width: 100%;
    padding-left: 30px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.3);
    color: #fff;
  }

  ::-webkit-input-placeholder {
    color: #fff;
  }

  .icon-search {
    position: absolute;
    width: 30px;
    height: 30px;
    background: url('../assets/search.png') no-repeat center;
  }
}
</style>
    