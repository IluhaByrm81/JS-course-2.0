// В данной работе и далее под определением набор понимают Set. 

// Task 1
// Создайте set s1. Добавьте в него три элемента 'h', 'b', 'o', 'h'. Добавление делайте через add. Выведите в консоль получившийся набор (set) s1.

let s1 = new Set();
s1.add('h');
s1.add('o');
s1.add('b');
console.log(s1);


// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна добавить в набор s2 элементы, которые пользователь вводит в i-2. Функция должна выводить в консоль s2 после каждого добавления элемента.


let s2 = new Set()

const f2 = () => { 
   let inp = document.querySelector('.i-2');
   
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна удалить из набора s3 строку, которую пользователь вводит в i-3. Функция должна выводить в консоль s3 после каждого удаления элемента.

let s3 = new Set(['one', 'two', 'four']); // обратите внимание, как просто можно добавить массив в набор!

const f3 = () => { }

document.querySelector('.b-3').onclick = f3;


// Task 4
// При нажатии b-4 выполняете функцию f4. Функция должна проверить наличие в наборе s4 строки введенной пользователем в i-4. Если строка есть - то вывести в out-4 true. Если нет - false.

let s4 = new Set(['a', 'b', 'c', 'z']);

const f4 = () => { }

document.querySelector('.b-4').onclick = f4;

// Task 5
//  При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 количество элементов в наборе s5.


let s5 = new Set(['a', 'b', 'c', 'z', 'a2', 'b2', 'c2', 'z2']);

const f5 = () => { }

document.querySelector('.b-5').onclick = f5;

// Task 6
// При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 число уникальных элементов в массиве a6. Решение должно использовать set.

let a6 = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56];

const f6 = () => { }

document.querySelector('.b-6').onclick = f6;

// Task 7
// При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 значение пароля и проверять, чтобы пользователь в строке пароля использовал не повторяющиеся символы. Если символы уникальны, а длина пароля больше ( строго) 6 то выводите в out-7 число 1. Если есть повторяющиеся символы, или длина меньше или равна 6 - то выводите 0. Для проверки уникальности символов используйте Set.

const f7 = () => { }

document.querySelector('.b-7').onclick = f7;

// Task 8
// При нажатии b-8 выполняете функцию f8. Функция должна перебрать набор s8 и добавить в массив ar8 только числа больше 5. Выведите массив в консоль.

let s8 = new Set([1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]);
let ar8 = [];

const f8 = () => { }

document.querySelector('.b-8').onclick = f8;

// Task 9
//  При нажатии b-9 выполняете функцию f9. Функция должна принимать набор our_set в качестве параметра, преобразовывать его в строку, причем после каждого символа строки должен быть пробел. Функция должна возвращать результирующую строку. 
// В нашем примере результат должен быть 9 8 7 6 5 

const f9 = our_set => { }

document.querySelector('.b-9').onclick = () => {
    let s9 = new Set([9, 8, 7, 6, 5]);
    document.querySelector('.out-9').innerHTML = f9(s9);
}

// Task 10
// При нажатии b-10 выполняете функцию f10. Функция должна принимать набор set в качестве параметра и выводить его в указанный элемент. Элемент указывается как второй параметр функции f10. Вывод значений - через пробел.

const f10 = (out_set, elem) => { }

document.querySelector('.b-10').onclick = () => {
    let a10 = new Set(['4', '5', '6']);
    f10(a10, '.out-10');
};


// Task 11
//  При нажатии b-11 выполняете функцию f11. Функция должна преобразовать массив a11 в набор. И выводить в консоль. Изучите вывод получившегося набора. Разберитесь почему так происходит.
// Да, эта задача решена! Просто разберитесь.

const f11 = () => {
    let s = new Set();
    s.add([1]);
    s.add([1]);
    console.log(s);
}

document.querySelector('.b-11').onclick = f11;

// Task 12
//   При нажатии b-12 выполняете функцию f12. Функция должна преобразовать строку str12 в массив, так, что каждая буква - отдельный элемент массива. Потом создать набор на основе массива и возвратить его.

let str12 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';

const f12 = () => {

}

document.querySelector('.b-12').onclick = () => {
    console.log(f12());
}

// Task 13
//  При нажатии b-13 выполняете функцию f13. Функция должна преобразовать строку str13 в массив, причем каждая буква - отдельный элемент массива. Потом создать набор на основе массива. Затем, перебирая набор поэлементам, найти сколько раз каждый символ встречается в исходном массиве. Результат - в виде объекта типа { символ : количество, символ : количество } вывести в консоль и возвратить.
// пример результата для строки 'Hello ho'
// { "H" : 1, 'e' : 1, 'l' : 2, "o" : 2, " ": 1}

let str13 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';


const f13 = () => {

    // return
}

document.querySelector('.b-13').onclick = () => {
    console.log(f13());
}
//************************************************************** */

// task 1 --------------------
const btn1 = document.querySelector('.btn1');
const s1 = new Set();
s1.add('a');
s1.add(1);
s1.add('word');
s1.add(true);
btn1.onclick = () => console.log(s1);

// task 2 ---------------------------
const inp2 = document.querySelector('.inp2');
const btn2 = document.querySelector('.btn2');
const s2 = new Set();
btn2.onclick = () => {
  s2.add(inp2.value);
  console.log(s2);
};

// task 3 ----------------------------
const btn3 = document.querySelector('.btn3');
btn3.onclick = () => {
  inp2.value.trim().length === 0
    ? alert('input is empty')
    : s2.delete(inp2.value);
  console.log(s2);
};
// task 4 ------------------------------
const btn4 = document.querySelector('.btn4');
btn4.onclick = () => {
  inp2.value.trim().length === 0
    ? alert('input is empty')
    : console.log(s2.has(inp2.value));
};
// task 5 ------------------------------
const btn5 = document.querySelector('.btn5');
btn5.onclick = () => console.log(s2.size);

// task 6 -----------------------------
const btn6 = document.querySelector('.btn6');
const a6 = [1, 'df', 55, true, 'new', 55, 'df', 1];
const s6 = new Set(a6);
btn6.onclick = () => console.log(s6.size);

// task 7 -----------------------------
const btn7 = document.querySelector('.btn7');
const inp7 = document.querySelector('.inp7');

btn7.onclick = () => {
  a7 = inp7.value.split('');
  s7 = new Set(a7);
  if (a7.length !== s7.size) {
    alert('you must input only uniq simbols in password');
  } else {
    console.log('ok');
  }
};

// task 8 --------------------------------
const btn8 = document.querySelector('.btn8');
const s8 = new Set([1, '2', 3, '4', 5, 6, '7']);
const even8 = set => {
  let result = '';
  let count = 0;
  for (let e of set) {
    if (count % 2 === 0) console.log(e);
    count++;
  }
};

btn8.onclick = () => even8(s8);

// task 9 --------------------------
const btn9 = document.querySelector('.btn9');
const s9 = new Set([1, '2', 3, '4', 5, 6, '7']);

const reverse = set => {
  const arr91 = [...set];
  const arr9 = arr91.reverse();
  for (let i = 0; i < arr9.length; i++) {
    console.log(arr9[i]);
  }
};

btn9.onclick = () => reverse(s9);

// task 10 ----------------------------
const arr10 = [1, 2, 3, 3, 3, 4, 5, 6, 6, 6, 7, 8, 9, 9, 88, 8];
const btn10 = document.querySelector('.btn10');
const s10 = new Set(arr10);
let r10 = {};

btn10.onclick = () => {
  for (let e of s10) r10[e] = 0;
  //  заполняем ассоц. массив всеми оригинальными значениями
  // по одной штуке
  for (let i = 0; i < arr10.length; i++) {
    const el = arr10[i];
    r10[el] = r10[el] + 1;
  }
  console.log(r10); // в ассоциативном массиве возвращаем ключ -
  // элемент исходного массива, значение - количество элементов в нем
};

// task 11 ------------------------------
const div11 = document.querySelector('.div11');
const inp11 = document.querySelector('.inp11');
const btn11 = document.querySelector('.btn11');
const arrSet = ['1', '2', '3', '4', '5', '6'];

const set11 = arr11 => {
  const val = inp11.value;
  if (!arr11.includes(val)) {
    arr11.push(val);
  }
  div11.innerHTML = arr11;
};

btn11.onclick = () => set11(arrSet);

// task 12 ------------------------------
const set12 = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
const btn12 = document.querySelector('.btn12');

btn12.onclick = () => {
  const arr12 = [];
  for (let el of set12) {
    arr12.push(el);
  }
  console.log(arr12);
};
// task 13 ------------------------------
const div13 = document.querySelector('.div13');
const btn13 = document.querySelector('.btn13');
const set13 = new Set([1, 2, 3, 4, 5, 6]);
const showSet13 = (set, div, sep) => {
  for (let el of set) div.innerHTML += `${el}${sep} `;
};

btn13.onclick = () => showSet13(set13, div13, ';');

// task 15 ---------------------------
const btn15 = document.querySelector('.btn15');
const arr15 = [[1, 0], [1, 0], [2, 0]];
const set15 = new Set();

for (let i = 0; i < arr15.length; i++) {
  set15.add(arr15[i]);
}
btn15.onclick = () => console.log(set15.size);

// task 16 ------------------------------
const btn16 = document.querySelector('.btn16');
const arr16 = [{ Ivan: 1 }, { Ivan: 1 }, { Ivan: 2 }, { Serg: 0 }];
const set16 = new Set();

for (let i = 0; i < arr16.length; i++) {
  set16.add(arr16[i]);
}
btn16.onclick = () => console.log(set16.size);

// task 17 ----------------------------------
const btn17 = document.querySelector('.btn17');

btn17.onclick = () => {
  const u17 = 'Primer';
  const set17 = new Set(u17);
  console.log(set17); //0: "P" 1: "r" 2: "i" 3: "m" 4: "e"
};

// task 18 -------------------------------
const btn18 = document.querySelector('.btn18');

const countLetters = str => {
  const set18 = new Set(str);
  const arr = str.split(''); //делаем массив из строки

  const res = {}; // массив аккумулятор результата

  for (let el of set18) res[el] = 0; // задаем нулевые значения в результирующий массив-аккумулятор
  for (let i = 0; i < arr.length; i++) {
    res[arr[i]]++;
  }

  console.log(res);
};

btn18.onclick = () => countLetters('hello world hello world');

// task 19 ----------------------------------
const div19 = document.querySelector('.div19');
const btn19 = document.querySelector('.btn19');
const set19 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

btn19.onclick = () => {
  let out = '';
  let counter = 1;
  for (let el of set19) {
    if (counter % 2 === 0) out += `${el}, `;
    counter++;
  }

  div19.innerHTML = out;
};

// task 20 ----------------------------------
const btn20 = document.querySelector('.btn20');
const arr20 = [1, 2, 3, 4, 5, 6, 7, 8];

btn20.onclick = () => {
  const set1 = new Set();
  const set2 = new Set();
  for (let i = 0; i < arr20.length; i++) {
    const el = arr20[i];
    el % 2 === 0 ? set1.add(el) : set2.add(el);
  }

  console.log(set1, set2);
};
