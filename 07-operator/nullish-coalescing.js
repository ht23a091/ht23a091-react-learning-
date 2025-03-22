const users = [
    // ユーザー1
    {
        name: 'Patty Rabbit',
        address: {
            town: 'Maple Town',
        },
    },
    // ユーザー2
    {
        name: 'Rolley Cocker',
        address: {},
    },
    // ユーザー3
    null,
];

for (const u of users) {
    const user = u ?? { name: '(Somebody)' };
    const town = user?.address?.town ?? '(Somewhere)';
    console.log(`${user.name} lives in ${town}`);
}