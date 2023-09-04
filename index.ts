// 1 task
let a: number;
let b: string;
let c: boolean;

// 2 task

// interface IAreaFormula {
//   A: any;
//   p: number;
//   r: number;
// }
// enum Formula1 {
//   p = 3.14,
// }
// function calculateArea(radius: number) {
//   let A = Formula1.p * radius ** 2;
//   return A;
// }
// console.log(calculateArea(5));

function calculateArea(radius: number): number {
  const pi = 3.14;
  const area = pi * radius ** 2;
  return area;
}
console.log(calculateArea(5));

//

function calculateDensity(m: number, v: number): number {
  const density = m / v;
  return density;
}
console.log(calculateDensity(100, 50));

// 3
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  colors: string[];
};

const products: Product[] = [
  {
    id: 1,
    title: "Эркин",
    description: "Дотер",
    price: 10000,
    colors: ["red", "black"],
  },
  {
    id: 2,
    title: "Арген",
    description: "Танкист",
    price: 20000,
    colors: ["silver"],
  },
  {
    id: 3,
    title: "Атай",
    description: "Танцор",
    price: 100000,
    colors: ["green"],
  },
];
console.log(products);