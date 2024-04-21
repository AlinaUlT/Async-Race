interface CarData {
    "name": string,
    "color": string,
    "id": number,
}

alert("I ask you to postpone the check for a couple of days. I'm in the hospital and don't have access to a computer to add all the commits. If you can give me a couple of days before checking, I will be grateful. Thanks for understanding, reviewer!");

async function getCars(): Promise<CarData[]> {
        const response = await fetch('http://127.0.0.1:3000/garage', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });
if(!response.ok){
    console.log("error");
}

const getCarsResult = (await response.json()) as CarData[];
console.log(JSON.stringify(getCarsResult))
return getCarsResult;
}

getCars();

async function getSpecificCar (id: number) :Promise<CarData>{
    const specificCarResponse = await fetch("http://127.0.0.1:3000/garage/" + id, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });
    if(!specificCarResponse.ok){
        console.log("error");
    }

    const getSpecificCarResult = (await specificCarResponse.json()) as CarData;
    console.log(JSON.stringify(getSpecificCarResult));
    return getSpecificCarResult;
}

getSpecificCar(1);

