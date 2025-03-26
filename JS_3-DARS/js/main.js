 //for - operatori(tsikl shartlari,o'zgaruvchi to'g'ridan-to'g'ri for ichida yoziladi)

 /*for(var i = 10; i<=20; i += 2){
    console.log(i);
}*/

// while - operatori(o'zgaruvchi alohida,shartlar alohida)

/*var j = 1000;
while(j > 50){
    console.log(j);
    j -= 50;
}*/

/*var x = 0;
do {
    console.log(x);
    x++;
}while(x<10);*/

// break - operatori(berilgan shart bo'yicha tsikldan chiqib ketadi,to'xtaydi)

/*for(var i = 10; i<=20; i += 2){
    if(i>15)
    break; // kesish,to'xtatish
    console.log(i);
}*/

// continue - operatori(ko'rsatilgan shartni tashlab o'tib tsiklni davom ettiradi)

/*for(var i = 10; i<=20; i ++){
    if(i%2 ==0)   // 11 dan 20 gacha sonlar ichidan 2 ga qoldiqsiz bo'linadiganlarini ya'ni juftlarini tashlab
   continue;      // davom etish
    console.log(i);
}*/

// listdagi barcha elementlarni for orqali to'liq consolga chiqarish 

/*var sky = [5,7,-1,.05,2000,"matn"] // list yaratildi
for(var i = 0; i < sky.length; i++ ){ // i nomli tsikl (sky.length - sky o'zgaruvchisining elementlar sonigacha davom etadi )
    console.log("Элемент " + (i+1) + " : " + sky[i])
}*/



var arr = [10,25,-8, "matn",250,0.09,20.05]
for(var j = 0; j < arr.length; j+=1){
    console.log(" Element " + (j+1) + ":" + arr[j]);
}


 

