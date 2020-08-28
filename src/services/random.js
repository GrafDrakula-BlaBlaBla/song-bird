const randomNumber = (max = 20) => {
    return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

export default randomNumber;