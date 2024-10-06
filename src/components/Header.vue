<template>
  <nav class="flex flex-wrap justify-between p-5 shadow-md mb-5">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/main">main</router-link> |
      <router-link to="/auth/login" class="text-[green] no-underline">Login</router-link> |
      <button @click.stop="logout" class="text-[red] font-bold">Logout</button>
    </div>
    <!-- كنا بنكتب في html عادي link لاكن هنا بنكتب router-link to="" -->
    <router-link to="/profile" class="flex flex-wrap items-center gap-5">
        <!-- ?? دي بنحطها بعد الحاجه اللي استدعيناها علشان لو مش موجوده ماتظهرش ولو موجوده تظهر عادي  -->
      <img  
        :src="userdata?.image"
        :alt="userdata?.fullname"
        class="w-[50px] h-[50px] rounded-full object-cover"
      />
      <div class="flex flex-col">
        <p>
          {{ userdata?.fullname }}
        </p>
        <p>{{ userdata?.email }}</p>
      </div>
    </router-link>
  </nav>
</template>

<script setup>
import { ref } from "vue";
// هنا حولنا الداتا من نص الي object علشان نعرف نستخدمها وعملنا جيييت من localstorage 
const userdata = ref(JSON.parse(localStorage.getItem("userdata")));
import {useRouter} from 'vue-router';
import { useToast } from "vue-toastification";
const toast = useToast();
function logout() {

    fetch("https://m7.backend.aait-d.com/api/v1/dashboard/logout",{
    method: "post" ,
    headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    }
    // الخطوة دي لازم في تسجيل الخروج لان مش هينفع ااخرج غير اما يكون المستخدم عامل تسجيل دخول  الاول فا دي بتقول اني مش هيعمل خروج الا للمسجل 
  })
  .then((res) => {
    return res.json();
  })
  .then((data)=>{
  localStorage.removeItem('token')
  localStorage.removeItem('userdata')
  localStorage.removeItem('fullname')
    toast.success("logout out successfuly");
    router.push('/auth/login');
  })
  .catch((err) => {
    toast.error("failed to logout");
  });  
}
</script>

<style>
/* بالشكل دا كده معناه ان الكلاس دا جوه الكلاس دا  */
/* .router-link-active .router-link-exact-active{

} */
/* ودا كده معناه ان في اتنين كلاس موجودين */
.router-link-active,
.router-link-exact-active {
  @apply text-gray-900 underline;
}
</style>
