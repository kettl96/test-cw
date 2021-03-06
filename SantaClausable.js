function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney']
    .every(function(name) {
    return typeof obj[name] == 'function';
  });
}

var santa = {
  sayHoHoHo: function() { console.log('Ho Ho Ho!') },
  distributeGifts: function() { console.log('Gifts for all!'); },
  goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
  sayHoHoHo: function() { console.log('Oink Oink!') }
};

console.log(isSantaClausable(santa));