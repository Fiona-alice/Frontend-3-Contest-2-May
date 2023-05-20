
const address = document.getElementById("address");
const button = document.getElementById("btn");
 
button.addEventListener("click", ()=>{
    const value = address.value;
    fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(value)}&apiKey=99f072c57c8e45668784a10382eea26c`)
    .then(resp => resp.json())
    .then((fetchedData) =>{
        console.log(fetchedData);
        const time = document.getElementById('time-zone');
        const feature = fetchedData.features[0];
        const property = feature.timezone;
        time.append=property;
    });
}); 

