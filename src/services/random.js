// import { arrNameBirds } from './data';

export const randomNumber = (max = 20) => {
    return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

export const randomArrBirdName = (arrNameBirds, lengthNewArr = 5) => {

    const length = arrNameBirds.length
    const start = Math.floor(Math.random() * ((length) - 0 + 0)) + 0;
    const end = start + lengthNewArr;
    const newArray = arrNameBirds.slice(start, end);

    return newArray;
}