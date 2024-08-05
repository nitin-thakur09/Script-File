// Question 1

// {
//     let array=[1,2,3,4];
//     array.map((x)=>{
//         x=x**2;
//         console.log(x);
//     })
// }


// Question 2

{
    let grade=stdscr(Number(prompt()));
    function stdscr(value){
    return (value > 80 && value <= 100) ? "A" :
    (value > 60 && value <= 80) ? "B" :
    (value > 50 && value <= 60) ? "C" :
    (value > 33 && value <= 50) ? "D" :
    (value >= 0 && value <= 33) ? "F" :
    "Invalid";
}
}

// Question 3

// {
//     let car = {
//     companyName: 'Honda',
//     model: 'Amaze',
//     year: 2020
// };

// function changeCarYear(nyear) {
//     car.year = nyear;
// }

// changeCarYear(2024);

// const { model, year } = car;

// console.log(`Model: ${model}`);
// console.log(`Year: ${year}`);
// }

// Question 4

// {
//     function isPrime(num) {
//         if (num <= 1) return false;
//         if (num <= 3) return true;
//         if (num % 2 === 0 || num % 3 === 0) return false;
//         for (let i = 5; i * i <= num; i += 6) {
//             if (num % i === 0 || num % (i + 2) === 0) return false;
//         }
    
//         return true;
//     }
//     const numbers = [2, 3, 4, 5, 10, 13, 17, 18, 19, 23, 25];
//     const primes = numbers.filter(isPrime);
//     console.log(primes);
// }

// Question 5

// {
//     Map:
//     Transform ,Data, Extract, Properties ,Format Data
//     Filter:
//     Filter by Condition, Remove Unwanted Elements ,Search for Items    
//     Reduce:
//     Sum Values ,Flatten Arrays ,Count Occurrences ,Combine Objects
// }

// Question 6

// {
//     async function fetchdata(){
//         const response=await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         try{
//         if(!response.ok){
//             throw new Error(`Http Error ${response.status}`);

//         }
//         const data=await response.json();
//         console.log(data);
//     }
//     catch{
//         console.error('Error fetching data:', error);
//     }
// }
// fetchdata()
// }

// Question 7

{
    const person = {
        name: 'John Doe',
        address: {
            street: '123 Elm St',
            city: 'Springfield',
            zip: '12345'
        },
        contact: {
            email: 'john.doe@example.com',
            phone:"9682XXXXXX"
        }
    };

    const phoneNumber = person.contact?.phone;
    
    console.log(phoneNumber);
}