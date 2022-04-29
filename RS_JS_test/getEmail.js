function getEmailDomain(email) {
  let cut = email.split('@')
  return cut[cut.length - 1]
}

console.log(getEmailDomain('very.unusual.@.unusual.com@usual.com'));
console.log(getEmailDomain('prettyandsimple@example.com'));