const sortedCountriesJsonUrl = 'https://gist.githubusercontent.com/ramenski/78b6ea32f3e07f9c682e3c58a9a3e10f/raw/c295b2eb2ac1fb8fc882b1d3183dd5b85d75f0ef/countries.json';
const unSortedCountriesJsonUrl = 'https://gist.githubusercontent.com/ramenski/c565767b462f610a2f867633cfadd1e4/raw/a3c90ad992aec68c0a72d23639df0400d24c2fa2/notSortedCountries.js'

export function getCountries() {
    return fetch(sortedCountriesJsonUrl)
        .then((r) => r.json())
}
