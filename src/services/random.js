
export const randomNumber = (min = 1, max = 20) => {
    return Math.floor(Math.random() * (max - min + min)) + min;
}

export const randomArrBirdNames = (arrNameBirds, lengthNewArr = 5) => {

    const length = arrNameBirds.length
    const start = Math.floor(Math.random() * ((length) - 0 + 0)) + 0;
    const end = start + lengthNewArr;
    const newArray = arrNameBirds.slice(start, end);

    return newArray;
}