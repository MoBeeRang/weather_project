export const getClothingKeyword = (temperature) => {
    if (temperature < 0) {
        return 'winter coat';
    } else if (temperature >= 0 && temperature <= 10) {
        return 'warm clothes';
    } else if (temperature > 10 && temperature <= 20) {
        return 'light jacket';
    } else if (temperature > 20 && temperature <= 30) {
        return 'summer outfit';
    } else {
        return 'beachwear';
    }
};