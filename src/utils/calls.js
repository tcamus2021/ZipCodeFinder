export const getCity = (zipCode) => {
    const url = 'https://api.zippopotam.us/us/' + zipCode;
    return fetch(url)
};