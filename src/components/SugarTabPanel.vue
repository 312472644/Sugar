
<template>
  <div>
    <slot v-if="isShow"></slot>
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
export default class SugarTabPanel extends Vue {
  @Prop()
  private label!: string;

  @Prop()
  private name!: string;
  private isShow = (this.$parent as any).activeName === this.name;

  @Watch('$parent.activeName')
  private changeValue(val: string) {
    this.isShow = (this.$parent as any).activeName === this.name;
  }
}
</script>

<style lang='scss'>
</style>
    