export const getTemperatureColor = (temperature) => {
    if (temperature < 4) {
        return 'rgb(0, 102, 204)'; // 차가운 파란색
    } else if (temperature >= 4 && temperature <= 8) {
        return 'rgb(51, 153, 255)'; // 밝은 파란색
    } else if (temperature > 8 && temperature <= 11) {
        return 'rgb(102, 204, 255)'; // 하늘색
    } else if (temperature > 11 && temperature <= 16) {
        return 'rgb(153, 204, 102)'; // 연한 녹색
    } else if (temperature > 16 && temperature <= 19) {
        return 'rgb(204, 204, 102)'; // 옅은 노란색
    } else if (temperature > 19 && temperature <= 22) {
        return 'rgb(255, 204, 102)'; // 밝은 주황색
    } else if (temperature > 22 && temperature <= 27) {
        return 'rgb(255, 102, 51)'; // 진한 주황색
    } else {
        return 'rgb(255, 51, 51)'; // 강렬한 빨간색
    }
};