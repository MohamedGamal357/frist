<template>
<div class=" h-[1000px] bg-slate-700" >
    <div class="flex flex-wrap justify-center mt-3 m-auto mr-[100px]">
    <div class=" bg-white  w-[500px] h-[517px] rounded-l-lg mr-[1px] mt-4" >
        <h1 class="text-[40px] text-[#3DB2A9] mt-[100px]" >
            Welcome Back
        </h1>
        <p class="text-[#3DB2A9] m-3">Welcome Back! please enter your detaills.</p>
<form action="" @submit.prevent="onSubmit">
<div>
    <label class="text-black mr-[150px] " for="email">Email</label>
    <br>
    <div>
    <input type="text" id="email" class="border border-black rounded-lg " placeholder="Enter your email" v-model="email"> 
  </div>
    <br>
    <label class="text-black mr-[130px]" for="password">password</label>
    <br>
    <div>
    <input type="password" id="password" class="border border-black rounded-lg" placeholder="sflsprrf4r4" v-model="password">
  </div>
    <br>
  </div>
    <input type="radio" name="" id=""> Remember me  <a class="text-[#3DB2A9]" href="http://">forget password</a>
   <br>
    <button  type="submit" class="text-black border bg-[#7FB2A9] rounded w-[200px] p-1">login</button>
</form>
    </div>
    <img class="mt-4 w-[500px] h-[517px] rounded-r-lg" src="../assets/sideimg.png" alt="">
  </div>
  
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import { useToast } from "vue-toastification";
const toast = useToast();
const email = ref(null);
const password =ref(null);
const router = useRouter();
function onSubmit() {
  console.log(email.value, password.value);
  const formdata = new FormData();
  formdata.append('email', email.value);
  formdata.append('password', password.value);

  fetch("https://m7.backend.aait-d.com/api/v1/dashboard/login",{
    method: "post" ,
    body : formdata,
  })
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data)=>{
console.log(data.data.token);
console.log(data);
    localStorage.setItem('token', data.data.token);
    localStorage.setItem('userdata', JSON.stringify (data.data));
    // (JSON.parse (localStorage.setItem ('userdata' )));
    localStorage.setItem('fullname', data.data.fullname);
    toast.success(data.message);
    router.push('/');
  })
  .catch((err) => {
    console.error(err);
    toast.error(err.message);
  });  
}
</script>

