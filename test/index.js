const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const f = (array) => {
  const d = array.filter((item) => item % 2 === 0);
  return d;
};

console.log(f(ar));
