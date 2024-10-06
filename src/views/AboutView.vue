<!-- هنا في صفحه ال view  بعمل fetch للداتا من مكان تاني  -->

<template>
  <div>
    
    <countercomp/>
  </div>
  
  <!-- <counter/>
  <br>
  <br>
  <input type="text" v-model="lastname" class="border border-black">
   <p class="text-[red]">{{ validatelastname }}</p>
  <br>
  <br>
  <input type="number" v-model="age" class="border border-black">
  <p class="text-[red]">{{ validateage }}</p>
  <br>
  <br>
  <div class="about"> -->
    <!-- <input type="text" v-model="username" class="border border-black"> -->
<!-- egy
    <input type="text" v-model="egp" class="border border-black">
sud
    <input type="text" v-model="sud" class="border border-black"> -->
    <!-- <h1>This is an about page</h1> -->
    <!-- هنا بقوله ان الداتا بتساوي ال المتغير اللي هجيبه من الصفحه التانيه  -->
    <!-- <AboutSection  :data="items"  :haspara="false"/> -->
    
    <!-- {{items}} -->
    
  <!-- </div> -->
</template>
<script setup >
// onMounted زي ref لازم يتعمل ليهم import من vue
import {ref , onMounted, watch, computed} from "vue";
const items = ref(null);
const username = ref(null);
const lastname = ref(null);
const age = ref(null);
const egp = ref(null);
const sud = ref(null);
import AboutSection from "@/components/About/AboutSection.vue";
import counter from "@/components/About/counter.vue"
import countercomp from "@/components/About/countercomp.vue"
// import { onMounted } from "vue";
// fetch('https://fakestoreapi.com/products')
// .then((res) => {
//    let data = res.json();
//    return data;
// }).then((res)=>{
// console.log(res);
// items.value = res;
// // items= البيانات اللي جايه من ال الرابط وده اسم انا مسميه ممكن يتغير عادي 
// // value = دي بقوله عاوز قيمه البيانات اللي جواها 
// // =res = دي يعني خلي المغير دا يساوي ال res
// });

function dataon ( ){
  fetch('https://fakestoreapi.com/products')
.then((res) => {
   let data = res.json();
   return data;
}).then((res)=>{
console.log(res);
items.value = res;
// items= البيانات اللي جايه من ال الرابط وده اسم انا مسميه ممكن يتغير عادي 
// value = دي بقوله عاوز قيمه البيانات اللي جواها 
// =res = دي يعني خلي المغير دا يساوي ال res
});
};
// onMounted
// دي بستخدمها لو اكون عاوز اخلي حاجه تحصل واو حاجه تظهر اول اما الصفحه تحمل وبتبقي كده 
onMounted(() => {
  dataon();
  console.log("scced");
});
// او ممكن اكتب اللي عاوز اكتبه جواها اكتبه جوه funciton 
// واكتب اسم ال funciton جوه ال onMounted 

watch (
  // كده بيقولك راقب المتغير دا 
() => username.value,
// واللي بعدها دي اللي هتتنفذ لما اغير في اللي فوق
() => {
  console.log(username.value);
}
);
watch(
() => egp.value,
() => {
  sud.value = egp.value *12;
}
)
watch(
() => sud.value,
() => {
  egp.value = sud.value /12;
}
)
// دي معناها زي كده بس الفرق ان دي بتتعمل زي وممكن اكتب جواها شرط عادي او اي حاجه عاوزها  funciton    v-model 
// مش زي موديل كده لازم يكون في حقل و p علشان تشتغل 
const validatelastname = computed (()=>{
if(!lastname.value){
  return 'Last name is required';
}else if (lastname.value.length < 6) {
return 'لازم يبقي اكبر من 6 حروف'
}else{
  return `HELLO ${lastname.value}`
}

});
const validateage = computed (()=>{
  if (!age.value){
    return 'Age is required';
  } else if (age.value < 18 || age.value >= 25){
    return 'يجب ان يكون عمرك اكبر من 18 واقل من 26';
  }
})
</script>