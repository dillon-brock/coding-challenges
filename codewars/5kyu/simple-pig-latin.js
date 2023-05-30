function pigIt(str){
  return str.split(' ')
    .map(w => /[A-Za-z]/g.test(w) ? w.slice(1) + w[0] + 'ay' : w)
    .join(' ')
}