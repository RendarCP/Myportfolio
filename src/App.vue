<template>
  <div>
    <p><pf-header></pf-header></p>
    <router-view></router-view>
  </div>
</template>

<script>
import PfHeader from './components/pf-header.vue';
export default {
  components:{
    PfHeader,
  }
}
</script>

<style>
   
</style>
