<template>
    <!--<div class="nav">
        <nav>
            <router-link to="/home" class="nav-font">Home</router-link>
            <router-link to="/aboutme" class="nav-font">About me</router-link>
            <router-link to="/portfolio" class="nav-font">Portfolio</router-link>
            <router-link to="/contactme" class="nav-font">Contact me</router-link>
        </nav>-->
        <div>
       <b-navbar type="dark" variant="link" class="nav" toggleable>
         <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
           <b-collapse is-nav id="nav_dropdown_collapse">
            <b-navbar-nav>
              <b-nav-item><router-link to="/home" class="nav-font">Home</router-link></b-nav-item>
              <b-nav-item><router-link to="/aboutme" class="nav-font">About me</router-link></b-nav-item>
              <b-nav-item><router-link to="/portfolio" class="nav-font">Portfolio</router-link></b-nav-item>
              <b-nav-item><router-link to="/contactme" class="nav-font">Contact me</router-link></b-nav-item>
           </b-navbar-nav>
        </b-collapse>
        </b-navbar>
     </div>
</template>

<script>
export default {

}
</script>

<style>
.nav{
  background-color: gainsboro;
  margin-top:20px;
}
.nav-font{
    margin-right: 30px;
    text-decoration: none;
    -webkit-text-fill-color: #212529;
}
.nav-font:hover{
    text-decoration: none;
    -webkit-text-fill-color:#adb5bd;
}
</style>
