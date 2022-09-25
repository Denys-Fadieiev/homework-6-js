// Реализовать класс RangeValidator. Обьекты, созданные им должны обладать следующими свойcтвами:
// from(число) 5
// to(число) 50

class RangeValidator {
  #from;
  #to;
  constructor (from, to) {
    this.#from = from;
    this.#to = to;
  }
// Реализовать геттеры и сеттеры для обоих свойств.
  get from() {
    return this.#from;
  }
  get to() {
    return this.#to;
  }

// Bonus tasks:
// Создать проверки которые убедятся, что число во from меньше числа to и наоборот.
// Создать проверки, которые помогут избежать попадание неправильных типов данных в from и to.

  set from(from) {
    if (from > this.to) {
      throw new RangeError(
        "Incorrect parameter, in 'from' expected number less than 'to'"
      );
      }
    
    if (typeof from !== 'number' || isNaN(from)) {
      throw new TypeError('Rectangle side must be number');
    }
    this.#from = from;
  }
  set to(to) {
    if (to < this.from) {
      throw new RangeError(
        "Incorrect parameter, in 'to' expected number more than 'from'"
      );
    }

    if (typeof to !== 'number' || isNaN(to)) {
      throw new TypeError('Rectangle side must be number');
    }
    this.#to = to;
  }

// Реализовать getter range, который будет возвращать массив, состоящий из границ диапазона from и to.
  get range () {
    return [this.from, this.to];
  }

// Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. Метод возвращает это же число, если оно входит в диапазон. И кинет ошибку, если не входит.

  validate (num){
    if(num > this.from && num < this.to){
      return num;
    }
    throw new RangeError('Incorrect parameter, ithe number must be in the given range')
  }
}

const RangeValidator1 = new RangeValidator(5, 50);
console.log(RangeValidator1);




