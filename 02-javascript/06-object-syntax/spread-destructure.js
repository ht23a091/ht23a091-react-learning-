const user = {
    id: 1,
    name:  'Patty Rabbit',
    email: 'Patty@maple.town',
    age: 8,
};
const { id, ...userWithoutId} = user;
console.log(id, userWithoutId);
// 1 { name: 'Patty Rabbit', email: 'Patty@maple.town', age: 8 }

const { name, age, ...userWithoutNameAge} = user;
console.log(name, age, userWithoutNameAge);
// Patty Rabbit 8 { id: 1, email: 'Patty@maple.town' }