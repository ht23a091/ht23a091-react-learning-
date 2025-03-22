const patty = {
    name: 'Patty Rabbit',
    email: 'pattty@maple.town',
    address: { town: 'Maple Town'},
};

const rolley = { ...patty, name: 'Rolley Coker'};
console.log(rolley);
console.log(patty);
rolley.email = 'rolley@palm.town';
rolley.address.town = 'Palm Town';

console.log(patty);