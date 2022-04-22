
console.log("Hello")

fetch(`http://localhost:5000/weatherAPI?place=helsinki`).then(response => {
    response.json().then(data => console.log(data))
})