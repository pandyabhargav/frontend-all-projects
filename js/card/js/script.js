const initialData = [
    {
        name: "Rocky bhau",
        profe: "gunda",
        contc: "999999999",
        age: "18",
        path: "https://pbs.twimg.com/profile_images/1680548494577393664/DShXbFF6_400x400.jpg"
    },
    {
        name: "pushpa bhau",
        profe: "chandan chor",
        contc: "999999999",
        age: "30",
        path: "https://images.hindustantimes.com/img/2022/07/16/550x309/Allu_Arjun_1657975945381_1657975961687_1657975961687.webp"
    }
    ,
    {
        name: "jethala",
        profe: "business man",
        contc: "999999999",
        age: "25",
        path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_b3eeZhLdy7D0UizjviaWKBD2_1QtWlIAFw&usqp=CAU"
    },
    {
        name: "ms dhoni",
        profe: "cricketer",
        contc: "999999999",
        age: "40",
        path: "https://img.onmanorama.com/content/dam/mm/en/web-stories/sports/images/2023/5/24/msd3.jpg"
    },
    {
        name: "salmon bhoi",
        profe: "Havey driver",
        contc: "999999999",
        age: "99",
        path: "https://m.timesofindia.com/photo/96534332/96534332.jpg"
    }
]
// for (let i = 0; i <= data.length-1; i++) {

//     card.innerHTML += `<div><img src =${data[i].path} /><div><h4>name :${data[i].name}</h4><p>cotact :${data[i].contc}</p><p>age:${data[i].age}<p/><p>profesion:${data[i].profe}<p/></div></div>`
// }
const dataKey = "user_data";
const data = JSON.parse(localStorage.getItem(dataKey)) || initialData;
let row = document.querySelector("#card");
const display = () => {
    row.innerHTML = "";
    data.forEach((d) => {

        row.innerHTML += `<div class = "card col-3"><img src ="${d.path} " /><div><h4> Name : ${d.name}</h4><p>Profession
        ${d.profe}</p><p>Contact : ${d.contc}<p/><p>Age : ${d.age}<p/></div></div>`
    });
}
display();


const formSubmit = () => {

    event.preventDefault();

    let username = uname.value;
    let useremail = email.value;
    let usercontact = contact.value;
    let userage = age.value;
    let path = image.value;

    let dataObje = {
        name: username,
        email: useremail,
        contact: usercontact,
        age: userage,
        path // path : path
    }

    data.push(dataObje);
    localStorage.setItem(dataKey, JSON.stringify(data));
    display();

    const clearForm = () => {
        uname.value = "";
        email.value = "";
        contact.value = "";
        age.value = "";
        image.value = "";
    };
clearForm()

}
