function fact(x) {
  if (x > 1) {
    return x * fact(x - 1);
  } else {
    return 1;
  }
}

let book = {
  topic: "Javascript",
  edition: 7,
};

let primes = [2, 3, 5, 7];

let empty = [];

let points = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
];

let data = {
  trial1: [
    [1, 2],
    [3, 4],
  ],

  trial2: [
    [2, 3],
    [4, 5],
  ],
};
