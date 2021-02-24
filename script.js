const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function () {
    let countryData = JSON.parse(this.response);
    let sum = 0;
    for (let index = 0; index < countryData.length; index++) {
        sum += +countryData[index].population;
    }
    console.log(sum);
    //Using different methods
    /*let sum1 = 0;
    for(let country of countryData){
        sum1 += +country.population;
    }
    console.log(sum1)
    let sum2 = 0;
    for (let index in countryData) {
        if(countryData.hasOwnProperty(index)) {
            sum2 += +countryData[index].population;
        }
    }
    console.log(sum2)*/
}
