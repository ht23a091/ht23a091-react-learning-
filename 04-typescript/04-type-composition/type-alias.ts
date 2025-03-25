type Unit = 'USD' | 'EUR' | 'JPY' | 'GBP';

type TCurrency = {
    unit: Unit;
    amount: number;
};

interface ICurrency {
    unit: Unit;
    amount: number;
}

const PriceA: TCurrency = { unit: 'JPY', amount: 1000 };
const PriceB: ICurrency = { unit: 'USD', amount: 10 };

console.log(PriceA);
console.log(PriceB);