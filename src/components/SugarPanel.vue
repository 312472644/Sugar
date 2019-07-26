
<template>
  <div>
    <slot></slot>
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
export default class SugarPanel extends Vue {}
</script>

<style lang='scss'>
</style>
    