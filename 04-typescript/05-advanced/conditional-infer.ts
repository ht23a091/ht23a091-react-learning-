type Each<T> = T extends Array<infer U> ? U : T;

let num = 5;
const numArr = [3, 6, 9];
const strArr = ['a', 'b', 'c'];
type NA = Each<typeof numArr>;
type N = Each<typeof num>;
type S = Each<typeof strArr>;