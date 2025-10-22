export function generateRandomName(){

    const currentDate =Date.now();
    // console.log(currentDate);
    const randomName =`Employe_${currentDate}`;
    return randomName;

}

generateRandomName();

export function generateRandomEmail(){

    const currentDate =Date.now();
    const randomEmail =`Employee_${currentDate}@yopmail.com`;
    return randomEmail;

}

export function generateRandomNumber(){

    const currentDate = Date.now();
    const randomNumber = `01_${currentDate}`;
    return randomNumber;

}