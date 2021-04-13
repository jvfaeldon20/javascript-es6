function getAddress(province, country){
    const addressData = {province,country};
    return addressData;
}

let data = getAddress('Laguna', 'Philippines');
console.warn(data.country);