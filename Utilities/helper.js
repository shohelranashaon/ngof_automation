export function generateRandomName(){

    const currentDate =Date.now();
    // console.log(currentDate);
    const randomName =`Employe_${currentDate}`;
    return randomName;

}

generateRandomName();