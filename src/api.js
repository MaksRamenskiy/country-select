export function getCountries() {
    return fetch('https://gist.githubusercontent.com/MaksRamenskiy/78b6ea32f3e07f9c682e3c58a9a3e10f/raw/c295b2eb2ac1fb8fc882b1d3183dd5b85d75f0ef/countries.json')
        .then((r) => r.json())
}