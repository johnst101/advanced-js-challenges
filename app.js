// Q1: Show rating
function showRating(rating) {
  let finalRating = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    i === rating - 1 ? (finalRating += "*") : (finalRating += "* ");
  }
  Number.isInteger(rating) ? finalRating : (finalRating += ".");
  return finalRating;
}
console.log(showRating(4.5));

// Q2: Sort by lowest to highest price
function sortLowToHigh(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));

// Q3: Sortt by highest to lowest prrice
function sortHighToLow(arr) {
  return arr.sort((a, b) => b.price - a.price);
}

console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 },
  ])
);

// Q4: Promises (watched a bunch of videos on this)

// Q5: Find all the posts by a single user
async function postsByUser(uid) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await promise.json();
  const posts = result.filter(element => element.userId === uid);
  console.log(posts);
}

postsByUser(4);

// Q

// Q

// Q

// Q
