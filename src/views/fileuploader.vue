<template>
    <div>
        <b-container class="container">
            <b-row>
                <b-col cols="4">타이틀</b-col>
                <b-col cols="8" class="test">
                    <b-form-input v-model="title"
                            type="text"
                            placeholder="Enter your name">
                    </b-form-input>
                </b-col>
                <b-col cols="4">설명</b-col>
                <b-col cols="8" class="test">
                    <b-form-input v-model="contents"
                            type="text"
                            placeholder="Enter your name">
                    </b-form-input>
                </b-col>
                <b-col cols="4">githubUrl</b-col>
                <b-col cols="8" class="test">
                    <b-form-input v-model="gitUrl"
                            type="text"
                            placeholder="Enter your name">
                    </b-form-input>
                </b-col>
                <b-col cols="4">imgUrl</b-col>
                <b-col cols="8" class="test">
                    <b-form-input v-model="imgUrl"
                            type="text"
                            placeholder="Enter your name">
                    </b-form-input>
                </b-col>
            </b-row>
            <b-row class="test-row">
                <b-col id="preview"><img v-if="url" :src="url" id="img-size"></b-col>
            </b-row>
            <b-row class="test-row">
                <b-col cols="4">사진첨부</b-col>
                <b-col cols="8" class="test"><b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file..." @change="onFileChange"></b-form-file></b-col>
            </b-row>
        </b-container>
        <b-button variant="success" class="edit-btn" @click="addPf">submit</b-button>
    </div>
</template>

<script>
import firebase from '../firebase.js';
import { storage, functions } from 'firebase';
export default {
    data() {
        return{
            url: null,
            title: '',
            contents:'',
            file:'',
            gitUrl:'',
            imgUrl:[],
            pflist:[]
        }
    },
    created(){
        firebase.database().ref('portfolio').on('value',(snapshot)=>{
            //console.log(snapshot.val());
            this.pflist = snapshot.val();
            console.log(this.pflist);
        });
    },
    methods: {
        preview(e){
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        },
        onFileChange(e){
            // const file = e.target.files[0];
            // this.url = URL.createObjectURL(file);
            //  //console.log(file);
            // this.fileName = file.name;
            // firebase.storage().ref('image/' + file.name).put(file)
            //  //console.log(file);
            // let getFile = e.target.files[0];
            // console.log(getFile);
            // let storageRef = firebase.storage().ref('image/'+getFile.name);
            // let task = storageRef.put(getFile)
            // .then(response =>{
            //     console.log("업로드 성공");
            //     storageRef.getDownloadURL().then(function(url){
            //         this.imgUrl = url;
            //         console.log(this.imgUrl);
            //          console.log(url);
            //     })
            // //    task.snapshot.ref().getDownloadURL().then(function(downloadURL){
            // //     console.log('File downloadUrl',downloadURL)});
            // })
            // // .then(snapshot =>{
            // //     storageRef.getDownloadURL().then(function(url){
            // //             console.log(url);
            // //     })

            // // })
            let getFile = e.target.files[0];
            this.url = URL.createObjectURL(getFile);
            console.log(getFile);
            let storageRef = firebase.storage().ref('image/'+getFile.name);
            let task = storageRef.put(getFile)
            return task
            .then((task)=>{
                console.log("업로드완료");
                storageRef.getDownloadURL().then((downloadURL)=>{
                console.log(downloadURL);
                this.imgUrl = downloadURL;
                })
            })
            .catch((error)=>{
                console.log(error);
            });
        },
        addPf(){
            // let getFile = e.target.files[0];
            // this.url = URL.createObjectURL(getFile);
            // console.log(getFile);
            // let storageRef = firebase.storage().ref('image/'+getFile.name);
            // let task = storageRef.put(getFile)
            // return task
            // .then((task)=>{
                // storageRef.getDownloadURL().then((downloadURL)=>{
                firebase.database().ref('portfolio').push({
                title:this.title,
                content:this.contents,
                gitUrl:this.gitUrl,
                imgUrl:this.imgUrl
            })
            //     })
            // })
            // firebase.database().ref('portfolio').push({
            //     title:this.title,
            //     content:this.contents,
            //     gitUrl:this.gitUrl,
            // })
            .then((data)=>{
                console.log(data)
                this.title = '',
                this.contents = '',
                this.gitUrl = '',
                this.imgUrl = '',
                this.file = '';
            })
            .catch((error)=>{console.log(error)});
        }
        // upload(file){
        //     console.log(file);
        //     this.fileName = file.name;
        //     firebase.storage().ref('image/' + file.name).put(file)
        //     console.log(file);
        // }
    }
}
</script>

<style>
.test{
    margin-top:5px;
    margin-bottom: 5px;
}
.container{
    border: 2px solid black;
}
.edit-btn{
  text-align: center;
  position: absolute;
  margin-top:30px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.file-form{
    float:center;
    text-align: center;
    width:500px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top:100px;
}
#preview {
  float:center;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
