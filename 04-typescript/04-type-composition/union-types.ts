interface A {
    foo: number;
    bar?: string;
}

interface B { foo: string};
interface C { bar: string};
interface D { baz: boolean};

type AorB = A | B; // { foo: number; bar?: string } or { foo: string }
type AorC = A | C;
type AorD = A | D;