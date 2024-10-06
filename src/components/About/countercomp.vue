<template>
    <div>
        <button @click="counterco.dec">-</button>
        {{ counterco.count}}
        <button @click="counterco.add">+</button>
        <br>
        double count {{ counterco.doubleCount }}
    </div>
   
</template>

<script setup>
import { usecounter } from "@/store/counter.js";
const counterco = usecounter();
</script>

<!-- هنا بقي في الصفحة دي بنعمل كوبونانت فيها الداتا اللي كانت في ملف store  
 وبكده اقدر استخدمه في اي صفحه اروح انادي عليه بس واعمل للكوبونات import 
 وانده عليه باسم المتغير اللي عرفت بيه  -->