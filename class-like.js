class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }
  toString() {
    return this.name + ' is a ' + this.type
  }
  type() {
    return this.type
  }
  name() {
    return this.name
  }
}

var dog = new Animal('Max', 'dog');
console.log(
  dog.toString()
);

//array helpers
Array.prototype.square = function () {
  return this.map(function (n) { return n * n; });
}
Array.prototype.cube = function () {
  return this.map(function (n) { return n * n * n; });
}
Array.prototype.average = function () {
  return this.sum() / this.length;
}
Array.prototype.sum = function () {
  return this.reduce(function (a, b) { return a + b; }, 0);
}
Array.prototype.even = function () {
  return this.filter(function (item) { return 0 == item % 2; });
}
Array.prototype.odd = function () {
  return this.filter(function (item) { return 0 != item % 2; });
}

console.log(2 ** 3);
Array.prototype.reduce = function (process, memo = this.shift()) {
  this.forEach((e) => memo = process(memo, e));
  return memo;
}


let Cat = function (name, weight) {
  Cat.count = (Cat.count || 0) + 1;
  Cat.sum = (Cat.sum || 0) + weight;
  Object.defineProperty(
    this, "weight", {
    get: function () { return weight },
    set: function (e) { Cat.sum -= weight; Cat.sum += e; weight = e }
  }
  )
};

Cat.averageWeight = function () { return Cat.sum / Cat.count }


