<template>
    <div>this profile
        <div id="img">
            <img src="../assets/logo.png" id="home-img">
            <span>
                <h1>저를 소개합니다</h1>
                블라블라블라~~~~~!블라블라블라~~~~~!블라블라블라~~~~~!블라블라블라~~~~~!블라블라블라~~~~~!
            </span>
            <div>
                <h1>Skills</h1>
               <div>
                   <b-row>
                      <b-col class="list"><img src="../assets/csharp.png" class="icon-img">C#</b-col>
                      <b-col class="list"><img src="../assets/Html_Css.png" class="icon-img">HTML/CSS</b-col>
                      <b-col class="list"><img src="../assets/Javascript.png" class="icon-img">JAVASCRIPT</b-col>
                      <b-col class="list"><img src="../assets/logo.png" class="icon-img">Vue</b-col>
                  </b-row>
                  <b-row>
                      <b-col class="list"><img src="../assets/React.png" class="icon-img">React</b-col>
                      <b-col class="list"><img src="../assets/MSSQL.png" class="icon-img">MSSQL</b-col>
                      <b-col class="list"><img src="../assets/JAVA.png" class="icon-img">JAVA</b-col>
                      <b-col class="list"><img src="../assets/android.png" class="icon-img">ANDROID</b-col>
                  </b-row>
               </div>
            </div>
        </div>
        <div></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
 #home-img{
       width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid #fff;
  background-color: black;
 }
 #img{
     text-align:center; 
    display:block;
 }
 .icon-img{
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 2px solid #dee2e6;
  background-color: #fff;
 }
 .list{
     background-color: #dee2e6;
     margin:10px;
     border: 5px solid #dee2e6;
 }
</style>
