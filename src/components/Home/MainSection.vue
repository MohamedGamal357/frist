<template>
  <p>your name is {{ name }}</p>
  <p>your age is {{ age }}</p>
  <p v-if="age < 19">غير مسموح لك بالدخول</p>
  <p v-else>اهلا بك</p>
  <!-- v-if = دي عموما في حاله تحقق الشرط بيتظهر عادي انما لو الشرط ماتتحققش مش بتظهر اصلا وال p  عكس show بتاعها مش بياخد مكان في الكود   -->
  <p v-if="job">your job is {{ job }}</p>
  <p v-else></p>
  <!--v- model  دي بنستخدمها لو عاوز اربط بين حاجتين بمعني اللي يتغير هنا يتغير هنا  -->
  <form action="">
    <input type="text" v-model="username" />
    <p>your name is {{ username }}</p>
  </form>
  <form action="">
    <select v-model="selectvalue">
      <option value="developer">Developer</option>
      <option value="teacher">Teacher</option>
      <option value="engineer">Engineer</option>
    </select>
  </form>
  select your job {{ selectvalue }}
  <br />
  <!-- v-show = دي معناها لو متفعله هتظهر عادي لو لا هتبقي موجوده حجزه مكانها لاكن مش ظاهرة  -->
  <button @click="show">click</button>
  <!-- @ هي هياها v-on:click  نفس الوظيفه بس @دي اختصار  -->
  <br />
 
  <p v-show="isvisible">مرحيا بك</p>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
    <!-- item = دا متغير انا اللي مسميه -->
    <div
      v-for="item in items"
      :key="item.id"
      class="border border-2 border-red-600 rounded-2xl p-4 relative"
    >
      <!--اوv-bind:: دي معناها انا بقوله ياخد القيمه اللي في src يتعامل معاها كا قيمه مش نص او رابط  -->
      <img
        :src="item.image"
        :alt="item.title"
        class="w-[150px] h-[150px] m-auto"
      />
      <h3 class="font-bold text-xl line-clamp-1">
        {{ item.title }}
      </h3>
      <!-- line-clamp-2= دي لو في كلام كتير بتعمل كام سطر وتخلي الباقي نقط -->
      <p class="line-clamp-2">
        {{ item.description }}
      </p>
      <div class="absolute top-[1.25rem] left-[1.0rem] bg-yellow-400 rounded-full px-4 py-2">
        {{ item.rating.rate }}
      </div>
      <div class="absolute top-[7.75rem] left-3 bg-yellow-400 rounded-full px-4 py-2">
  <button @click="addn++">+</button>
  {{ addn }}
  <button @click="addn--">_</button>
  {{ adds }}
</div>
      <div>
        <!-- <p class="absolute top-3 left-3 bg-yellow-400 rounded-full px-4 py-2">price</p> -->
        <div
          class="absolute top-[4.5rem] left-3 bg-yellow-400 rounded-full px-4 py-2"
        >
          {{ item.price }}
        </div>
      </div>
    </div>
  </div>
  <!-- {{ items }} -->
</template>

<script setup>
//  دي حاجه في اساسيه لازم اعملها import علشان اعرف استخدمها
import { ref } from "vue";
const name = ref(localStorage.getItem("fullname"))
const username = ref("moahmed");
const age = 22;
const job = "dev";
const items = ref(null);
const isvisible = ref(true);
const addn = ref(0);
const adds = ref();
const selectvalue = ref("Developer");
// ref دي حاجه في vue لازم تكون موجوده
// ref دي بكتبها لما اعوز ادي للحاجه قيمه مبدئيه كده

fetch("https://fakestoreapi.com/products")
  .then((res) => {
    let data = res.json();
    return data;
  })
  .then((res) => {
    console.log(res);
    items.value = res;
    // items= البيانات اللي جايه من ال الرابط وده اسم انا مسميه ممكن يتغير عادي
    // value = دي بقوله عاوز قيمه البيانات اللي جواها
    // =res = دي يعني خلي المغير دا يساوي ال res
  });
function show() {
  isvisible.value = !isvisible.value;
}
</script>

<style></style>
