
const weatherForm = document.querySelector("form");
const searchInput = document.querySelector("input");
const message1 = document.querySelector(".message1");
const message2 = document.querySelector(".message2");


weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const location = searchInput.value;
    message1.textContent = "LOADING...";
    message2.textContent = "";
    // fetchData(location);
    fetch(`/weatherAPI?place=${location}`).then(res => res.json().then(data => {
        if(data.error){
            message1.textContent = data.error;
        } else{
           return[
                message1.textContent = data.place,
                message2.textContent = data.weather
            ]
        }
    }));
});

const fetchData = async(location) => {
    const resAPI = await fetch(`/weatherAPI?place=${location}`);
    const resData = await resAPI.json();
    if(resData.error){
        message1.textContent = resData.error;
    } else{
       return[
            message1.textContent = resData.place,
            message2.textContent = resData.weather
       ]
    };
};
