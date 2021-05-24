// Task 1
// Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.

//Task 2.
//  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

//Task 3.
//  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).

class Goods { //  товары
   constructor({name, amount, image, count }) {
      this.name = name;
      this.amount = amount;  //  стоимость товаров
      this.image = image;
      this.count = count;  //  количество на складе
   }
   // showThis() {
      //    console.log(this);
      // }
      
      draw() {
         
         let p = document.createElement('p')  // создаем параграф в блоке div
         p.innerHTML = `${this.name} ${this.amount}$ <img src="img/${this.image}"/>  ${this.count}шт`  //  вывод на страницу
         console.log(p);
         return p;
      }
}

let goods = new Goods ({name: "Тыква", amount: 100, image: "/2.png", count: 5 });
document.querySelector('.out-3').appendChild(goods.draw());

// goods.showThis()

// Task 4.
// Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.

let goods2 = new Goods ({name: "Паутина", amount: 80, image: "/3.png", count: 3 });
document.querySelector('.out-4').appendChild(goods2.draw());

// goods2.showThis()

//Task 5.
// Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.

class Goods2 extends Goods {
   constructor({name, amount, image, count, sale}) {
      super({name, amount, image, count, sale})
      this.sale = sale;
   }
   
   draw() {
      let result1 = super.draw()
      if (this.sale === true) {
         document.querySelector('.out-5').innerHTML = 'SALE';
      } else {
         document.querySelector('.out-5').innerHTML = 'Sorry, but no sale';
      }
      return result1
   }
}

// Task 6.
// Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.

let goods3 = new Goods2 ({name: "Холодец", amount: 150, image: "/5.png", count: 3, sale: true})
document.querySelector('.out-6').appendChild(goods3.draw());

// goods3.showThis();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 7.
// Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.

class Valid {
   constructor({email, password, isValid = false}) {
      this.email = email;
      this.password = password;
      this.isValid = isValid;
   }
   
   show() {
      console.log(this);
   }
   
   validate() {
      let result2 = this.password.length;
      if (this.password.length >= 6) {
         this.isValid = true;
      }
      return result2;
   }
}

//Task 8.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.

//Task 9.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.

let userValidOne = new Valid ({email: 'qwerty@asd.zx', password: '12345678'});

userValidOne.show()
userValidOne.validate();
console.log(userValidOne.isValid);

let userValidTwo = new Valid ({email: 'qwer@sd.zy', password: '12345'});

userValidTwo.show()
userValidTwo.validate();
console.log(userValidTwo.isValid);

//Task 10.
// Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emailError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.

class Valid2 extends Valid {
   constructor({email, password}) {
      super({email, password});
         this.emailError = '';
         this.passwordError = '';
   }

   validate() {
      super.validate();

      if (this.email === '') {
         this.isValid = false;
         this.emailError = "email empty";
               return false
      }
      if (!this.isValid) {
         this.passwordError = "min length 6";
               return false
      }
      return true;
   }
}

//Task 11.
// Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

//Task 12.
// Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

let valid2 = new Valid2 ({email: "", password: "12345678"});
valid2.show()
valid2.validate()

let valid3 = new Valid2 ({email: "zxcv@qaz.er", password: "12345678"});
valid3.show()
valid3.validate()







