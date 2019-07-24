<template>
  <div id="app">
    <span>app</span>
    <router-link to="/sugar/user">to user</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
export default class Index extends Vue {}
</script>

<style>
</style>
