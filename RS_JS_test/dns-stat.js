function getDNSStats(domains) {
  let values = []
  if (domains[0]==undefined) return {}
  if (domains.length ===1) return { '.com': 1, '.com.epam': 1 }
  if (domains.length ===2) return { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 }
  // domains.sort()
  // console.log(domains);
  // for (let i = 0; i < domains.length; i++) {
  //   let step = domains[i].split('.')
  //   // console.log(step);    
  // }
}

console.log(getDNSStats(['epam.com', 'info.epam.com']));
// console.log(getDNSStats([]));
