<template>
    <div>
        <div id="img">
            <img src="../images/MyImage.png" id="profile-img">
            <span>
                <h1>저를 소개합니다</h1>
                <div id="myname">조성욱</div>
                <div>1996년 2월 17일</div>
            </span>
            <div>
                <div class="title">Skills</div>
               <div>
                   <b-row>
                      <b-col class="list"><img src="../images/csharp.png" class="icon-img"><h1 class="skill-lg">C#</h1></b-col>
                      <b-col class="list"><img src="../images/Html_Css.png" class="icon-img"><h1 class="skill-lg">HTML/CSS</h1></b-col>
                      <b-col class="list"><img src="../images/Javascript.png" class="icon-img"><h1 class="skill-lg">JAVASCRIPT</h1></b-col>
                      <b-col class="list"><img src="../images/logo.png" class="icon-img"><h1 class="skill-lg">Vue</h1></b-col>
                  </b-row>
                  <b-row>
                      <b-col class="list"><img src="../images/React.png" class="icon-img"><h1 class="skill-lg">React</h1></b-col>
                      <b-col class="list"><img src="../images/MSSQL.png" class="icon-img"><h1 class="skill-lg">MSSQL</h1></b-col>
                      <b-col class="list"><img src="../images/JAVA.png" class="icon-img"><h1 class="skill-lg">JAVA</h1></b-col>
                      <b-col class="list"><img src="../images/android.png" class="icon-img"><h1 class="skill-lg">ANDROID</h1></b-col>
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
 #profile-img{
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
 #myname{
     font-family: 'Do Hyeon', sans-serif;
     font-size:30px;
 }
 .icon-img{ /*아이콘 이미지 지정*/
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 2px solid #dee2e6;
  background-color: #fff;
 }
 .list{ /*각각의 리스트 css*/
     background-color: #dee2e6;
     margin:10px;
     border: 5px solid #dee2e6;
 }
 .skill-lg{ /*스킬 언어명 폰트 지정*/
     font-size:40px;
     font-family: 'Anton', sans-serif;
 }
 .title{ /*기본적 타이틀 폰트 지정*/
     font-family: 'Source Code Pro', monospace;
     text-align:left;
     margin-left:20px;
     font-size:30px;
     text-decoration: overline;
 }
</style>
