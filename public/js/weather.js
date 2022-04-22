
const weatherForm = document.querySelector("form");
const searchInput = document.querySelector("input");

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const location = searchInput.value;
    fetchData(location);
});

const fetchData = async(location) => {
    const resAPI = await fetch(`http://localhost:5000/weatherAPI?place=${location}`);
    const resData = await resAPI.json();
    if(resData.error) return console.log(resData.error);
    return console.log(resData);
};
