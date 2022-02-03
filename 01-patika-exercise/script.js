// console.log("Hello World");

// document.write("Hello Yunus");

// alert("Hello World");

// Hadi dene:
// JavaScript içerisine alert('Ekrana uyarı çıkartır! Bu metni değiştirebilirsin!')
// ve
// document.write('Gördüğün ekrana burada yazılanları basar!');
// bu komutları yazdırabilir ve neler yaptıklarını deneyimleyebilirsin!

// console.log("Gördüğün ekrana burada yazılanları basar!");
// document.write("Gördüğün ekrana burada yazılanları basar!");

// let serverName;
// console.log(serverName);

// serverName = "https://patika.dev";
// console.log(serverName);

// let password = "pass1234";
// console.log(password);

// let fullName = "Hakan Yalcınkaya";
// console.log(fullName);

// fullName = "Lorem ipsum dolar sit..";
// console.log(fullName);

// fullName += "Deneme yeni eklenen bilgi";
// console.log(fullName);

// const serverPassword = "saldflafsğpdlfmsfdmalfşmd";
// console.log(serverPassword);

// let price = 100;
// let tax = 0.18;
// let priceTax = price * tax;
// let total = price + priceTax;
// console.log(price, tax, priceTax, total);

// let counter = 320;
// counter++;
// counter++;
// counter++;
// counter++;
// counter++;
// counter++;
// counter--;
// counter *= 2;
// console.log(counter);

// let isActive = false;
// isActive = true;
// console.log(isActive);

// let userName;
// let isUserName = Boolean(userName);
// console.log(isUserName);

// let price = 199;
// console.log(typeof price);

// let number1 = "11";
// console.log(parseInt(number1));

// console.log(document.URL);
// console.log(document.location);
// console.log(document.location.hostname);
// console.log(document.location.pathname);

// document.body.style.backgroundColor = "red";

// let title = document.getElementById("title");
// title.innerHTML = "Degisen Bilgi";
// console.log(title.innerHTML);

// let fullName = prompt("LUtfen Adınınzı Yazınız?");
// console.log(fullName);

// let greeting = document.querySelector("#greeting");

// greeting.innerHTML = `${greeting.innerHTML} <small>${fullName}</small>`;

// let firstChild = document.querySelector("ul#list>li:first-child");
// firstChild.innerHTML = "İlk isim degistirildi";

// let lastChild = document.querySelector("ul#list>li:last-child");
// lastChild.innerHTML = "son isim degistirildi";

// let ulDOM = document.querySelector("ul#list");
// let liDOM = document.createElement("li");

// liDOM.innerHTML = "Kendi Olusturdugumuz Oge";
// ulDOM.prepend(liDOM);

// let greeting = document.querySelector("#greeting");

// greeting.classList.add("text-primary");

// console.log(greeting.classList);

// let price = "100";

// console.log(price == 1);
// console.log(price == 100);

// console.log(price === 1);
// console.log(price === 100);

// console.log(price != 1);

// let username = prompt("Kullanıcı Adınınz Giriniz");

// if (username.length > 0) {
//   console.log(`Kullanıcı bilginiz ${username}`);
// } else {
//   console.log("Bilgi yok");
// }

// let userName = prompt("Kullanıcnı Adınız:");
// let age = prompt("Yasınınz:");

// if (userName && age >= 18) {
//   console.log("Ehliyet Alabilir");
// } else if (!userName) {
//   console.log("Kullanıcın adınınz yokb");
// } else if (!age) {
//   console.log("Ehliyet alamaz ya da yas bilgi yok");
// }

// let userName = prompt("Kullanıcı Adınınz Giriniz");
// let info = document.querySelector("#info");

// info.innerHTML = `${
//   userName.length > 0 ? userName : "Kullanıcı Bilginiz Bulunamadı"
// }`;

// let score = prompt("Sınav puan durumunuz?");
// let textInfo = " ve Harf notunuz ";

// if (score >= 0 && score <= 100) {
//   if (score >= 90) {
//     console.log(`Sınav puanın ${score}  ${textInfo} 🤩`);
//   } else if (score >= 85) {
//     console.log(`Sınav puanın ${score}  ${textInfo} 🤩`);
//   } else if (score >= 80) {
//     console.log(`Sınav puanın ${score}  ${textInfo} 🤩`);
//   } else if (score >= 75) {
//     console.log(`Sınav puanın ${score}  ${textInfo} 🤩`);
//   } else if (score >= 70) {
//     console.log(`Sınav puanın ${score}  ${textInfo} 🤩`);
//   } else if (score >= 65) {
//     console.log(`Sınav puanın ${score}  ${textInfo} 🤩`);
//   } else if (score >= 60) {
//     console.log(`Sınav puanın ${score}  ${textInfo} 🤩`);
//   } else if (score >= 50) {
//     console.log(`Sınav puanın ${score}  ${textInfo} 🤩`);
//   } else if (score <= 49 && score >= 0) {
//     console.log(`Sınav puanın ${score}  ${textInfo} 😱`);
//   }
// } else {
//   console.log("Yanlış puan bilgisi girilmiştir.");
// }

// function hello() {
//   console.log("Hello Turkey");
//   spacex();
// }

// function spacex() {
//   console.log("Uzay Şirketi");
// }

// hello();

// let firstName = "Yunus Emre";

// function greetings(firstName = "") {
//   console.log(`Merhaba ${firstName}`);
// }

// greetings("Merve, Fatma, Hakan");

// function domIdWriteInfo(id, info) {
//   let domObject = document.querySelector("#${id}");
//   domObject.innerHTML = info;
// }

// function hello(firstName) {
//   console.log(` Merhaba Nasılsınız ${firstName}`);
// }

// hello("JavaScript");

// const helloFuncV1 = (firstName) => {
//   console.log(` Merhaba Nasılsınız ${firstName}`);
// };

// helloFuncV1("helloFuncV1");

// let greeting = document.querySelector("#greeting");
// greeting.addEventListener("mouseover", domClick);

// function domClick() {
//   console.log("Fare ile tıklandı");
//   this.style.color == "red"
//     ? (this.style.color = "black")
//     : (this.style.color = "red");
// }

// let counter = 0;
// let counterDOM = document.querySelector("#counter");
// let increseDOM = document.querySelector("#increase");
// let decreaseDOM = document.querySelector("#decrease");

// counterDOM.innerHTML = counter;

// let domain = "patika";
// let isActive = false;
// let items = [1, 2, 3, isActive, domain];
// console.log(items);

// items = [1, 2, 3];
// console.log(items);

// let emptyArray = [];

// console.log(items.length);

// let counter = 0;

// while (counter < 10) {
//   console.log(counter);
//   counter++;
// }

// let person = { name: "Selin", city: "Ankara", favoriteColor: "aqua blue" };
// let { name: foo } = person;

// console.log(foo);

// let [, pronoun, , name] = ["Merhaba", "benim", "adım", "Mehmet"];
// console.log(pronoun);
// console.log(name);

// const person = {
//   name: "John",
//   surname: "Doe",
//   age: 40,
//   fullName: function () {
//     return this.name + " " + this.surname;
//   },
// };

// console.log(person);

// // dot Notation

// console.log(person.name);
// console.log(person.age);
// console.log(person.fullName());

// person.job = "Student";
// console.log(person);
// console.log(person.job);

// // bracket notation

// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["fullName"]);
// console.log(person["fullName"]());

// let item2 = new Object();

// let item3 = {};

// console.log(item2, item3);

// let laptop1 = {
//   brand: "Apple",
//   model: "Macbook Pro",
//   modelName: "G-517",
// };

// console.log(laptop1);
// console.log(laptop1.brand);
// console.log(laptop1.model);

// laptop1.brand = "Samsung";
// console.log(laptop1);

// laptop1["brand"] = "Xamio";
// console.log(laptop1);

// laptop1.version = "1.1.2";
// console.log(laptop1);

// keys = Object.keys(laptop1);
// console.log(keys);

// console.log(Object.values(laptop1));

// function square(num) {
//   return num * num;
// }

// square(5);
// console.log(square(5));

// console.log(square(9)); //

// const myArr = [
//   6,
//   "Arin",
//   function () {
//     console.log("Array Element");
//   },
// ];

// myArr[2]();

// const myObj = {
//   age: 5,
//   name: "Steve",
//   func: function () {
//     console.log("Object Element");
//   },
// };

// myObj.func();

// console.log(
//   20 +
//     (function () {
//       return 10;
//     })()
// );

// const addFive = function (num, func) {
//   console.log(num + func());
// };

// addFive(10, function () {
//   return 5;
// });

// const sum = function () {
//   console.log(5 + 12);
// };

// sum();

// let name = "arin",
//   age = 5;

// const myObj = {
//   name: name,
//   age: age,
// };

// const myObj = {
//   name,
//   age,
// };

// console.log(myObj.name);
// console.log(myObj.age);
// THIS

// console.log(this);
// console.log(this.location);
// console.log(this.location.href);

// let x = 10;

// console.log(x);
