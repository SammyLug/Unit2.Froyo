const flavString = prompt(" Enter Icecream Flavors",                                                                                       "Vanilla,Vanilla,Vanilla,Strawberry,Coffee,Coffee")

const flavor = {
  vanilla: 3,                                                                                                                                                 strawberry: 1,
  coffee: 2,
};

for(let key in flavor) {
  console.table(Object.keys(flavor))
}

// Can you build an object to track which flavors you have observed so far?
// As you iterate through the array of flavors, when should that object be updated?
// Is your logic organized into a function?

//Create an empty object to hold counts that look like the below 
// {
  // vanilla: 3,
  // chocolate: 1,
  // mango: 2
// }

const flavorCounts = {}
for(let i=0; i<flavorArr; i++) {
  //FOR each flavor ask: is there a count for this flavor
  const flavorsSoFar = object.keys(flavorCounts)
  //IF yes, update that count (+1)
  if(flavorsSoFar.includes(flavorArr[i])) {
    flavorCounts[flavorArr[i]] += 1
  }
  else {
    flavorCounts[flavorArr[i]] = 1
  }
}
console.table(flavorCounts)

//loop over our array of flavors
//FOR each flavor, ask : is there a count for this flavor?
//IF yes, update that count (+1)
//ElSE, start counting that flavor

//{
  //vanilla: 1,
  //chocolate: 1,
  //strawberry: 1
//}

// after our loop ends, display a table with how many of each flavor they want.

