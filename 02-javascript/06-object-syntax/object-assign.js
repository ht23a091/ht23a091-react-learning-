const original = { a: 1, b: 2, c: 3};

const copy = Object.assign({}, original);  // 空文字列{}に、第2引数以降のプロパティを上書きしていく
console.log(copy);  // { a: 1, b: 2, c: 3 }
console.log(copy === original);  // false 値が同じでもアドレスを共有しない

const assigned = Object.assign(original, { c: 10, d: 50 }, { d: 100});
console.log(assigned);  // { a: 1, b: 2, c: 10, d: 100 }
console.log(original);  // { a: 1, b: 2, c: 10, d: 100 }  assignedと同じくoriginalは書き換えられてしまう

