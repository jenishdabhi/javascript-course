"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////

// const renderCountry = function (data,className='') {
//   var txt = document.createElement("p");
//   txt.innerHTML = `<article class="country${className}">
//   <img class="country__img" src="${data[0].flags.png}"/>
//   <div class="country__data">
//     <h3 class="country__name">${data[0].name.common}</h3>
//     <h4 class="country__region">${data[0].region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data[0].population / 1000000
//     ).toFixed(1)} Million</p>
//     <p class="country__row"><span>🗣️</span>${data[0].capital}</p>
//     <p class="country__row"><span>💰</span>${data[0].languages.por}</p>
//   </div>
// </article>`;

//   countriesContainer.insertAdjacentElement("beforeend", txt);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   //AJAX call-1 Country
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   // console.log(request.responseText);

//   request.addEventListener("load", function () {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//     //render country 1
//     renderCountry(data);
    //Get Neighbour country

    // const neighbour = data[0].capital;
    // // if (!neighbour) return;

    //AJAX call-2 neighbour
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

// request2.addEventListener("load", function () {
//   const data2 = JSON.parse(this.responseText);
//   console.log(data2);
//   renderCountry(data2);
// });
//   });
// };

// getCountryAndNeighbour('usa');
// getCountryAndNeighbour('australia ')

// const request2 = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

// const request = fetch("https://restcountries.com/v3.1/name/portugal");
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0].region);
//       const neighbour = data[0].capital;
//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//     })
//       .then(response => response.json())
//       .then(data => renderCountry(data[0].region,'neighbour'))
    
// };
// getCountryData("portugal");

console.log('Test Start');
setTimeout(() => 
  console.log('0 Second timer')
, 0);
Promise.resolve('resolved promise 1').then(res => console.log(res));
console.log('Test end');