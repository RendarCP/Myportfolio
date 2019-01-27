<template>
    <div>
        <div>
            <h1 id="pf-title">My PortFolio</h1>
            <div class="pf-content" v-for="portfolio in pflist">
               <img :src="portfolio.imgUrl" id="img-size">
               <p><a v-bind:href="portfolio.gitUrl" target="_blank">{{ portfolio.title }}</a></p>
               <p>{{ portfolio.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '../firebase.js';
import { storage, functions } from 'firebase';
export default {
    data(){
      return{
        pflist:'',
        // calcontents : '간단한 계산기 두 숫자 입력후 계산 ',
        // dischargeCal : '입대일 입력후 전역일 계산기(단축기간 계산 업데이트예정)',
        // memo : '메모장을 벤치마킹하여 제작한 간단 메모장(학교 프로젝트)',
        // puzzlegame : '사진선택후 게임시작후 랜덤으로 섞이는 퍼즐게임',
        // traview : '여행리뷰/후기 사이트 여행일정등을 등록 확인(졸업 프로젝트)'
      }
    },
    created(){
        firebase.database().ref('portfolio').on('value',(snapshot)=>{
            //console.log(snapshot.val());
            this.pflist = snapshot.val();
            //console.log(this.pflist);
        });
    },

}
</script>

<style>
#pf-title{
    text-align: center;
}
.pf-content{
    float:center;
    margin: 20px;
    border-radius: 25px;
    border: 2px solid #636e72;
    text-align: center;
}
.pf-content img{
    margin-top: 20px;
    width:300px;
}
</style>
