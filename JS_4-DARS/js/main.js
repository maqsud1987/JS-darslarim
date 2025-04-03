// aler() - Ogohlantiruvchi suzuvchi oyna [ aler - тревога,ogohlantirish]
/*
alert("Assalomu Alaykum")
*/

// confirm() - Ogohlantiruvchi suzuvchi oyna faqat unda 2 ta tugmasi bor [confirm - подтверждать,tasdiqlash]

/*var date = confirm("Siz hozir uydamisiz?");
if(date){
    alert("Unda yaxshi")
}else{
    alert("Dam ham olib turing")
} */

// prompt() - suzuvchi oyna bunda foydalanuvchi ma'lumot kiritadi  [prompt - срочный,so'rov]  

/*var date =prompt("Yoshingiz nechada?" ); 
console.log(date);*/

// null - bo'sh joy,hech qanday yozuvsiz

var azo = null;
if(confirm('Saytimizga azo b\'lasizmi')){
    azo = prompt('Ismingiz')
    alert("Salom " + azo)
}else{
    alert("Raxmat salomat bo'ling")
}
    
