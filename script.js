// Question 1

// {
//     let array=[1,2,3,4];
//     array.map((x)=>{
//         x=x**2;
//         console.log(x);
//     })
// }


// Question 2

// {
//     let grade=stdscr(Number(prompt()));
//     function stdscr(value){
//         console.log(value);
//     if(value>80&&value<=100){return "A"}
//     else if(value>60&&value<=80){return "B"}
//     else if(value>50&&value<=60){return "C"}
//     else if(value>33&&value<=50){return "D"}
//     else if(value>=0&&value<=33){return "F"}
//     else{return "Invalide"}
// }
// }

// Question 3

{
    let car = {
    companyName: 'Honda',
    model: 'Amaze',
    year: 2020
};

function changeCarYear(nyear) {
    car.year = nyear;
}

changeCarYear(2024);

const { model, year } = car;

console.log(`Model: ${model}`);
console.log(`Year: ${year}`);
}
