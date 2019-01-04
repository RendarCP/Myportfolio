<template>
    <div class="nav">
        <span>
            <router-link to="/home" class="nav-font">Home</router-link>
            <router-link to="/aboutme" class="nav-font">About me</router-link>
            <router-link to="/portfolio" class="nav-font">Portfolio</router-link>
            <router-link to="/contactme" class="nav-font">Contact me</router-link>
        </span>
    </div>
    
</template>

<script>
export default {

}
</script>

<style>
.nav{
  background-color: gainsboro;
  text-align:center; 
  display:block;
  margin-top: 20px;
}
.nav-font{
    margin-right: 30px;
}
</style>
