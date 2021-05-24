// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

let a = 7;
let b = 9;
console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

let c = 7;
let d = 9;
let cd = c / d;

document.querySelector('.out-2').textContent = cd;

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

let e = 3;
let f = 5;
let ef = e + f;

document.querySelector('.out-3').textContent = ef;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.

let e1 = '3';
let f1 = 5;
let e1f1 = e1 + f1;

document.querySelector('.out-4').textContent = (e1f1 + ' ==>  это не сложение, а конкатенация строк.');

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

let e2 = 3;
let f2 = 0;
let e2f2 = e2 / f2;

document.querySelector('.out-5').textContent = (e2f2 + ' ==> получается бесконечность');

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.

let e3 = 3;
let f3 = 'Hello';
let e3f3 = e3 + f3;

document.querySelector('.out-6').textContent = (e3f3 + ' ==>  это не сложение, а конкатенация строк.');

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.

let e4 = 3;
let f4 = 'Hello';
let e4f4 = e4 * f4;

document.querySelector('.out-7').textContent = (e4f4 + ' ==> является значением, представляющим не-число');

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

function t8() {

   console.log(inputValueT8.value);
}

let inputValueT8 = document.querySelector('.i-8');
document.querySelector('.b-8').onclick = t8;

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

function t9() {

   console.log(inputValueT9.value);
   inputValueT9.value = '';

}

let inputValueT9 = document.querySelector('.i-9');
document.querySelector('.b-9').onclick = t9;

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

function t10() {

   let num = +inputValueT10.value;
   console.log(num * 10);

}

let inputValueT10 = document.querySelector('.i-10');
document.querySelector('.b-10').onclick = t10;

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

function t11() {

   let num = +inputValueT11.value;
   console.log(num + 10);

}

let inputValueT11 = document.querySelector('.i-11');
document.querySelector('.b-11').onclick = t11;

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

function t12() {
   
   let name = inputValueName.value;
   let surName = inputValueSurName.value;
   divOut12.textContent = (`Hello ${name} ${surName}`);

}

let inputValueName = document.querySelector('.i-12_1');
let inputValueSurName = document.querySelector('.i-12_2');
let divOut12 = document.querySelector('.out-12');
document.querySelector('.b-12').onclick = t12;

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

function t13() {

   let numOutOne = +numOne.value;
   let numOutTwo = +numTwo.value;
   divOut13.innerHTML = (numOutOne + numOutTwo);

}

let numOne = document.querySelector('.i-13_1');
let numTwo = document.querySelector('.i-13_2');
let divOut13 = document.querySelector('.out-13');
document.querySelector('.b-13').onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

let inputChange = document.querySelector('.i-14');
inputChange.value = 'Hello';

// document.querySelector('.i-14').value = 

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector('.i-15');
y.style.border = '2px solid red'

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

function t16() {

   let numInp_1 = +oneNum.value;
   let numInp_2 = +twoNum.value;
   outDiv.innerHTML = (numInp_1 + numInp_2);

}

let oneNum = document.querySelector('.i-16-1');
let twoNum = document.querySelector('.i-16-2');
let outDiv = document.querySelector('.out-16');
document.querySelector('.b-16').onclick = t16;

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

function t17() {
   
   outDivT.innerHTML = parseInt(t.value);

}

let t = document.querySelector('.i-17');
let outDivT = document.querySelector('.out-17');
document.querySelector('.b-17').onclick = t17;

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

function t18() {
   
   console.log(parseFloat(tt.value));

}

let tt = document.querySelector('.i-18');
let outt = document.querySelector('.out-18');
document.querySelector('.b-18').onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

function t19() {

   let inpOut19_1 = +inp19_1.value;
   let inpOut19_2 = +inp19_2.value;
   out19.innerHTML = (inpOut19_1 + inpOut19_2)

}

let inp19_1 = document.querySelector('.i-19-1');
let inp19_2 = document.querySelector('.i-19-2');
let out19 = document.querySelector('.out-19');
document.querySelector('.b-19').onclick = t19;

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

function t20() {

   let inpOut20_1 = inp20_1.value;
   let inpOut20_2 = inp20_2.value;
   let inpOut20_3 = +inp20_3.value;
   let inpOut20_4 = inp20_4.value;
   divOut20.innerHTML = (`'Уважаемый ${inpOut20_1}, ${inpOut20_2}, ваш возраст ${inpOut20_3} года, по профессии вы ${inpOut20_4}'`);
}

let inp20_1 = document.querySelector('.i-20-1');
let inp20_2 = document.querySelector('.i-20-2');
let inp20_3 = document.querySelector('.i-20-3');
let inp20_4 = document.querySelector('.i-20-4');
let divOut20 = document.querySelector('.out-20');

document.querySelector('.b-20').onclick = t20;
