interface customError<E = Error> {
    type: 'syntax' | 'logic' | 'runtime';
    error: E;
}

const tokenError: customError = {
    type: 'syntax',
    error: new Error('Unexpected Token')
};

console.log(tokenError);