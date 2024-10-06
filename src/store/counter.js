// دا سطر اساسي وكل اللي فيه ثابت 
import { defineStore } from "pinia";
// عباره عن مخزن بخزن فيها متغيرات انا فوق عرفته وتحت بقي استخدمه باسمه  defineStore 
// اول حاجه بكتب اسمه وافتح قوس وتاني حاجه بعد الاسم بتبقي اسم معبر من عندي علشان اقدر استخدمها بيه تاني ونفتح قوسين ونكتب جواها المتغيرات والمتغيرات هنا اسمها state وافتح ارووfunciton واكتب جوه الداتا 
export const usecounter =  defineStore('counterstore', {
// varaible/data: state دي اللي بنكتب جواها المتغيرات  
  state: () => {
    // ولازم نخزن المتغيرات في return 
   return{
  count: 0,
  };
  },
// function
//  بيبقي اسمها هنا actions
actions:{
 add(){
  this.count++;
 },
 dec(){
  this.count--;
 }
} ,
getters:{
  doubleCount(){
   return this.count * 2;
  },
 
},

  });
// كده احنا عملناه بس علشان استخدمه احطه جوه متغير واستخدم المتغير 
// ومن المتغير دا اقدر استخدمه في اي صفحه بس قبل اما استخدمه لازم اعمله export من هنا وفي الصفحه التاني اعمل import
