
//  fetch("https://dog.ceo/api/breeds/list/all");
//  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

//  // Using Fetch API to make a GET request
//  fetch(apiUrl)
//    .then(response => {
//      // Check if the response status is OK (200)
//      if (!response.ok) {
//        throw new Error(`Network response was not ok: ${response.status}`);
//      }
//      // Parse the response body as JSON
//      return response.json();
//    })
//    .then(data => {
//      // Process the fetched data
//      console.log('Fetched Data:', data);
//      // Do something with the data here
//    })
//    .catch(error => {
//      // Handle any errors that occurred during the fetch
//      console.error('Fetch Error:', error);
//    });

// breeds1 = [];
// let ul = document.querySelector("#ul");
// let div = document.querySelector("#div");

// let showdata = async () => {
//     await fetch("https://dog.ceo/api/breeds/list/all").then(res => {
//         return res.json();
//     })
//         .then(data => {
//             const breeds = (data.message);
//             for (const key in breeds) {

//                 let myObj = {
//                     breedname: key,
//                     subBreed: breeds[key]
//                 }
//                 //  breeds1.push(key);
//                 breeds1 = [...breeds1, myObj];

//             }
//         })
//         .catch(error => {
//             console.log('fetch error', error);
//         });
//     display(breeds1);
// }

// const display = (allbreeds) => {
//     allbreeds.forEach((element, index) => {
//         ul.innerHTML += `<li class ="border p-1"><button onclick="return getSubbreed();">${index + 1} - ${element.breadname}</button></li>`;
//     });
// }

// showdata();
// const getSubbreed = (id) => {
//     console.log(breeds1[id].subBreed);
//     subBreedDisplay(breeds1[id].subBreed);
// }

// const subBreedDisplay = (subBreed) => {

//     if (subBreed.length == 0) {
//         div.innerHTML = `<p>No subbreed found....</p>`
//     } else {
//         let str = '<ol>';
//         subBreed.forEach(sub => {
//             str += `<li>${sub}</li>`;
//         })
//         str += `</ol>`;
//             div.innerHTML = str;
//     }


// }
let breeds1 = [];
let ul = document.querySelector("#ul");
let div = document.querySelector("#div");

let showdata = async () => {
    await fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => {
           return res.json();
        })
        .then(data => {
            const breeds = data.message;
            for (const key in breeds) {
                let myObj = {
                    breedname: key,
                    subBreed: breeds[key]
                }
                breeds1 = [...breeds1, myObj];
            }
        })
        .catch(error => {
            console.log('fetch error', error);
        });
    display(breeds1);
}

const display = (allbreeds) => {
    allbreeds.forEach((element, index) => {
        ul.innerHTML += `<li class="border p-1"><button onclick="return getSubbreed(${index});">${element.breedname}</button></li>`;
    });
}

const getSubbreed = (id) => {
    console.log(breeds1[id].subBreed);
    subBreedDisplay(breeds1[id].subBreed);
}

const subBreedDisplay = (subBreed) => {
    if (subBreed.length == 0) {
        div.innerHTML = '<p>No subbreed found....</p>';
    } else {
        let str = '<ol>';
        subBreed.forEach(sub => {
            str += `<li>${sub}</li>`;
        })
        str += '</ol>';
        div.innerHTML = str;
    }
}

showdata();
