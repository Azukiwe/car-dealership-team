fetch('cars.json').then((response)=>{
    console.log('resolved',response);
    return response.json();
}).then().catch((err) => {
    console.log('rejected',err)
});