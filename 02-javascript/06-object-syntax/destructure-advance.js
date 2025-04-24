const responce = {
    data: [
        {
            id: 1,
            name: 'Patty Rabbit',
            email: 'patty@maple.town',
        },
        {
            id: 2,
            name: 'Rolley Cocker',
            email: 'rolley@palm.town',
        },
        {
            id: 3,
            name: 'Bobby kumanov',
            email: 'bobby@maple.town',
        }
    ],
};

const { data: users = [] } = responce;
console.log(users)