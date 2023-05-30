function cakes(recipe, available) {
  let enough = true;
  let amounts = [];
  for (const ingredient in recipe) {
    if (available[ingredient] < recipe[ingredient] || available[ingredient] === undefined) {
      enough = false;
      console.log('not enough');
      return 0;
    }
    else {
      amounts.push(Math.floor(available[ingredient] / recipe[ingredient]));
    }
  }
  return Math.min(...amounts);
}