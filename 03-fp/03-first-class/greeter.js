function greeter(target) {
    const sayHello = () => {
        console.log(`Hi, ${target}!`);
    };

    return sayHello;
}

const greet = greeter('Step Jun');
greet();

// 簡略化
function greeter2(target) {
    return () => {
        console.log(`Hi, ${target}!`);
    };
}

const greet2 = greeter2('A');
greet2();

// 簡略化2
const greeter3 = (target) => () => { console.log(`Hi, ${target}!`); };
const greet3 = greeter2('B');
greet3();