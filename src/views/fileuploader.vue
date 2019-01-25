<template>
    <div>
        fileUploader
<<<<<<< HEAD
        <b-container class="test">
            <b-row class="test-row">
                <b-col cols="4">타이틀</b-col>
                <b-col cols="8">
                    <b-form-input v-model="title"
                            type="text"
                            placeholder="Enter your name">
                    </b-form-input>
                </b-col>
                <b-col cols="4">설명</b-col>
                <b-col cols="8">
                    <b-form-input v-model="contents"
                            type="text"
                            placeholder="Enter your name">
                    </b-form-input>
                </b-col>
                <b-col cols="4">githubUrl</b-col>
                <b-col cols="8">
                    <b-form-input v-model="gitUrl"
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
                <b-col cols="8"><b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file..." @change="onFileChange"></b-form-file></b-col>
            </b-row>
        </b-container>
        <b-button variant="success" class="edit-btn" @click="addPf">submit</b-button>
        <div>
            <table>
                <tr>
                    <th>
                        title
                    </th>
                    <th>
                        contents
                    </th>
                     <th>
                        giturl
                    </th> 
                </tr>
                <tr v-for="portfolio in pflist">
                    <td>
                        {{ portfolio.title }}
                    </td>
                    <td>
                        {{ portfolio.content }}
                    </td> 
                     <td>
                        {{ portfolio.gitUrl }}
                    </td> 
                </tr>
            </table>
        </div>
=======
>>>>>>> parent of ab52539... 파일업로드 뷰 제작 및 기타 사항 수정
    </div>
</template>

<script>
<<<<<<< HEAD
import firebase from 'firebase';
export default {
    data() {
        return{
            url: null,
            title: '',
            contents:'',
            file:'',
            gitUrl:'',
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
        onFileChange(e){
            // const file = e.target.files[0];
            // this.url = URL.createObjectURL(file);
            //  //console.log(file);
            // this.fileName = file.name;
            // firebase.storage().ref('image/' + file.name).put(file)
            //  //console.log(file);
            let getFile = e.target.files[0];
            console.log(getFile);
            let storageRef = firebase.storage().ref('image/'+getFile.name);
            let task = storageRef.put(getFile)
            .then(response =>{
                console.log("업로드 성공");
            //    task.snapshot.ref().getDownloadURL().then(function(downloadURL){
            //     console.log('File downloadUrl',downloadURL)});
            })
            .then(snapshot =>{
                storageRef.getDownloadURL().then(function(url){
                        console.log(url);
                })

            })
            .catch((error)=>{
                console.log(error);
            });
        },
        addPf(){
            firebase.database().ref('portfolio').push({
                title:this.title,
                content:this.contents,
                gitUrl:this.gitUrl,
            })
            .then((data)=>{console.log(data)})
            .catch((error)=>{console.log(error)});
        }
        // upload(file){
        //     console.log(file);
        //     this.fileName = file.name;
        //     firebase.storage().ref('image/' + file.name).put(file)
        //     console.log(file);
        // }
    }
=======
export default {

>>>>>>> parent of ab52539... 파일업로드 뷰 제작 및 기타 사항 수정
}
</script>

<style>
<<<<<<< HEAD
table{
    border: 1px solid gray;
}
tr{
border: 1px solid gray;
}
td{
border: 1px solid gray;
}
th{
border: 1px solid gray;
}
.img-test{
    width:300px;
    height:500px;
    
}
.test{
    border: 2px solid black;
}
.test-row{
    border: 2px solid gray;
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
#img-size {
    width: 30%;
}
=======

>>>>>>> parent of ab52539... 파일업로드 뷰 제작 및 기타 사항 수정
</style>
