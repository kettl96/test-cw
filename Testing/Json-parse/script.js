const cardInfoArr = 
[
  {
    "name": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 122,
    "img": "/img/1.jpg"
  },
  {
    "name": "Мужские Кроссовки Nike Air Max 270",
    "price": 210,
    "img": "/img/2.jpg"
  },
  {
    "name": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 99,
    "img": "/img/3.jpg"
  },
  {
    "name": "Кроссовки Puma X Aka Boku Future Rider",
    "price": 199,
    "img": "/img/4.jpg"
  },
  {
    "name": "Мужские Кроссовки Under Armour Curry 8",
    "price": 199,
    "img": "/img/5.jpg"
  },
  {
    "name": "Мужские Кроссовки Nike Kyrie 7",
    "price": 199,
    "img": "/img/6.jpg"
  },
  {
    "name": "Мужские Кроссовки Jordan Air Jordan 11",
    "price": 199,
    "img": "/img/7.jpg"
  },
  {
    "name": "Мужские Кроссовки Nike LeBron XVIII",
    "price": 199,
    "img": "/img/8.jpg"
  },
  {
    "name": "Мужские Кроссовки Nike Lebron XVIII Low",
    "price": 199,
    "img": "/img/9.jpg"
  },
  {
    "name": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 199,
    "img": "/img/10.jpg"
  },
  {
    "name": "Кроссовки Puma X Aka Boku Future Rider",
    "price": 199,
    "img": "/img/11.jpg"
  },
  {
    "name": "Мужские Кроссовки Nike Kyrie Flytrap IV",
    "price": 199,
    "img": "/img/12.jpg"
  }
]


function parse(arr) {
  return JSON.stringify(arr)
}
console.log(parse(cardInfoArr));