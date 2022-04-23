function getSeason(date) {
  return date.toString === Date.prototype.toString      
  // toString().__proto__.__proto__.__proto__
  // if (String(date)) throw new Error("Invalid date!")
  // if (!date.getDay` `) return "Invalid date!"
  // console.log( !date.getDay());
  // console.log( date);
  if (date == undefined) return 'Unable to determine the time of year!'
  let season = {
    'winter': ['Dec', 'Jan', 'Feb'],
    'spring': ['Mar', 'Apr', 'May'],
    'summer': ['Jun', 'Jul', 'Aug'],
    'autumn': ['Sep', 'Oct', 'Nov']
  }

  let dateArr = date.toString().split(' ')
  for (let key in season) {
    if (season[key].includes(dateArr[1])) return key
  }
  throw new Error("Invalid date!") 
}

// console.log(getSeason(new Date(1812, 8, 9, 10, 11, 12)))

// console.log(getSeason({ John: 'Smith' }));
const fakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));
console.log(getSeason( (new Date(2019, 11, 22, 23, 45, 11, 500))));
console.log(getSeason( fakeDate));

const [
  winter,
  spring,
  summer,
  autumn,
] = [
      new Date(2019, 11, 22, 23, 45, 11, 500),
      new Date(2018, 4, 17, 11, 27, 4, 321),
      new Date(2017, 6, 11, 23, 45, 11, 500),
      new Date(1994, 8, 26, 3, 0, 11, 500),
  ];
// console.log(getSeason(spring));

// console.log(getSeason('foo'));
// console.log(getSeason({ John: 'Smith' }));
// console.log(getSeason(20192701));
// console.log(getSeason([2019, '27', 0 + '1']));
// console.log(getSeason(() => new Date()));