<template>
  <div class="hello">
    <p>{{parentValue}}</p>
    <test v-model="parentValue" param="this is test param"></test>
    <span>组件v-model绑定:</span>
    {{parentValue}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Test from './Test.vue';

@Component({
  components: { Test }
})
export default class HelloWorld extends Vue {
  private parentValue?: string = '';
  private getParnet(param: string): void {
    console.log('param', param);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
