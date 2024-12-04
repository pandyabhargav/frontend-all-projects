let factdata = document.querySelector("#fact");
const  getfact = async () => {
   await fetch("https://cat-fact.herokuapp.com/facts")
    .then(res => {
        return res.json();
    })
    .then(data => {
        factdata.innerHTML = data[0].text;
    })
    .catch(error => {
        console.log('fetch error', error);
    });
}