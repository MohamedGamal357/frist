<template>
  <button @click="incounter">click Me</button>
</template>

<script setup>
import { ref } from "vue";
const counter = ref(0);

function incounter(){
    counter.value++;
  console.log(counter.value)
}

// emit
// دي بنستخدمها لما نجتاج ننقل بيانات من كومبونات الي صفحه رئيسية 
// اول حاجه بنعرفه والخطوه دي هتبقي ثابته علي طول معادا اسم المتغير 
const emit = defineEmits(["updatecount"]);

</script>
