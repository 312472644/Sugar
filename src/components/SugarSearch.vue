
<template>
  <div class="sugar-seacrch">SugarSearch.vue</div>
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
export default class SugarSearch extends Vue {}
</script>

<style lang='scss'>
.sugar-seacrch {
  padding: 10px;
  font-size: 13px;
}
</style>
    