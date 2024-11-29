export const getWeatherKeyword = (id) => {
    console.log(id)
    const iconName = id.toLowerCase()
    const images = {}
    switch (iconName) {
        case "clear sky":
            images.weatherType="clear" //clear,rain,snow,cloudy 파티클 효과
            images.name = "맑음" //화면에 보여질 내용
            images.icon = "01d@2x" //날씨 아이콘(낮)
            images.backgroundImage = "/images/backgroundImage/clear.png" //화면에 보여질 배경사진
            break;
        case "few clouds":
            images.weatherType="cloudy" //clear,rain,snow,cloudy
            images.name = "약간 구름"
            images.icon = "02d@2x"
            images.backgroundImage = "/images/backgroundImage/clear.png"
            break;
        case "scattered clouds":
            images.weatherType="cloudy" //clear,rain,snow,cloudy
            images.name = "구름 조금"
            images.icon = "03d@2x"
            images.backgroundImage = "/images/backgroundImage/clear.png"
            break;
        case "broken clouds":
            images.weatherType="cloudy" //clear,rain,snow,cloudy
            images.name = "짙은 구름"
            images.icon = "04d@2x"
            images.backgroundImage = "/images/backgroundImage/clear.png"
            break;
        case "shower rain":
            images.weatherType="rain" //clear,rain,snow,cloudy
            images.name = "소나기"
            images.icon = "09d@2x"
            images.backgroundImage = "/images/backgroundImage/notClear.png"
            break;
        case "rain":
            images.weatherType="rain" //clear,rain,snow,cloudy
            images.name = "비"
            images.icon = "10d@2x"
            images.backgroundImage = "/images/backgroundImage/notClear.png"
            break;
        case "thunderstorm":
            images.weatherType="rain" //clear,rain,snow,cloudy
            images.name = "폭풍우"
            images.icon = "11d@2x"
            images.backgroundImage = "/images/backgroundImage/notClear.png"
            break;
        case "snow":
            images.weatherType="snow" //clear,rain,snow,cloudy
            images.name = "눈"
            images.icon = "13d@2x"
            images.backgroundImage = "/images/backgroundImage/notClear.png"
            break;
        case "mist":
            images.weatherType="cloudy" //clear,rain,snow,cloudy
            images.name = "옅은 안개"
            images.icon = "50d@2x"
            images.backgroundImage = "/images/backgroundImage/notClear.png"
            break;
        default:
            images.weatherType="clear" //clear,rain,snow,cloudy
            images.name = "맑음"
            images.icon = "01d@2x"
            images.backgroundImage = "/images/backgroundImage/clear.png"
            break;
    }
    return images
};