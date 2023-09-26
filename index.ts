console.log("Hello via Bun!");

const obj = {
  id: 2020152,
  name: "Reo Hakuta",
  birthDate: "2004-08-03",
  age: 19,
  gender: "male",
} as const;

const array = [1, 2, 3, 4, 5] as const;

console.table(obj);
console.table(array);
