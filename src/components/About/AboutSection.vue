<!--  هنا في الكومبونانت بكتب الداتا اللي عايزها تتعرض في تاج وبعدين افتح تاج سكريبت واكتب فيه 
  defineprops  templete  -->


<template>
    <!-- دي معناها لو اتحقق الشرط اظهر الكلام دا في الحاله الافتراضيه اللي هي defult = true -->
     <h2 v-if="haspara">moahmed Gamal Abd Elmaged</h2>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
    <!-- item = دا متغير انا اللي مسميه -->
     
    
    <div
      v-for="item in data"
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
      <div class="absolute top-3 left-3 bg-yellow-400 rounded-full px-4 py-2">
        {{ item.rating.rate }}
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
</template>

<script setup >
// defineprops = دي بستخدمها لما اكون عاوز انقل او انسخ داتا من مكان لمكان تاني
defineProps({
    data: {
        // دي معناها ان الداتا مطلوبه لازم تكون موجوده ولا false يبقي مش لازم تكون موجوده
        required: true,
    },

    haspara:{
        // دي يعني مش لازم يرجع معاها بيانات 
        required:false,
        // كده القيمه الافتراضيه ليها true يعني لو مكتبتش شرط هيتحقق القيمه الافتراضيه 
        default : true,
        // دي معناها نوع البيان طالما صح وغلط يبقي boolean ولو مثلا نص يبقي string مثلا 
        type:Boolean
    }

})


</script>