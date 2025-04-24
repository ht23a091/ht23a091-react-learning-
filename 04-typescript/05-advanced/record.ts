type Animal = 'cat' | 'dog' | 'rabbit';
type AnimalNote = Record<Animal, string>;

const AnimalKanji: AnimalNote = {
    cat: '猫',
    dog: '犬',
    rabbit: '兎',
    // horse: '馬',
};

console.log(AnimalKanji);