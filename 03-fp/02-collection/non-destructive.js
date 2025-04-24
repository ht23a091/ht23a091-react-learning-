const list = [4, 8, 2, 6];

// slice()を使う方法
const sortedList = list.slice().sort((n, m) => n < m ? -1 : 1);
console.log(sortedList, list);

// スプレッド構文を使う方法
const reverseList = [...list].reverse();
console.log(reverseList, list);