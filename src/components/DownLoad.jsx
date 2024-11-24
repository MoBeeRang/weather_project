import React from 'react';

const API_KEY = 'YOUR_API_KEY'; // OpenWeatherMap API 키 입력
//파일 이름을 api로 호출하여 가져옴.

function DownLoad() {
   const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        try {
          const jsonData = JSON.parse(event.target.result);

          // 대표 도시 목록
          const representativeCities = [
            { english_name: "Seoul", korean_name: "서울특별시" },
            { english_name: "Incheon", korean_name: "인천광역시" },
            { english_name: "Suwon", korean_name: "수원시" },
            { english_name: "Busan", korean_name: "부산광역시" },
            { english_name: "Ulsan", korean_name: "울산광역시" },
            { english_name: "Daegu", korean_name: "대구광역시" },
            { english_name: "Daejeon", korean_name: "대전광역시" },
            { english_name: "Cheongju", korean_name: "청주시" },
            { english_name: "Gwangju", korean_name: "광주광역시" },
            { english_name: "Jeonju", korean_name: "전주시" },
            { english_name: "Chuncheon", korean_name: "춘천시" },
            { english_name: "Gangneung", korean_name: "강릉시" },
            { english_name: "Jeju", korean_name: "제주시" }
          ];

          // 대표 도시에 해당하는 데이터만 필터링
          const filteredData = jsonData.filter((city) =>
            representativeCities.some(
              (repCity) => repCity.english_name.toLowerCase() === city.name.toLowerCase()
            )
          ).map((city) => {
            // langs가 있는지 확인 후 find 실행
            const korName = city.langs && Array.isArray(city.langs)
              ? city.langs.find((lang) => lang.ko)?.ko || 'Unknown'
              : 'Unknown';

            return {
              id: city.id,
              kor_name: korName,
              eng_name: city.name,
              coord: city.coord,
            };
          });
          // 새 JSON 파일 생성
          const filteredDataBlob = new Blob(
            [JSON.stringify(filteredData, null, 2)],
            { type: 'application/json' }
          );

          // 파일 다운로드 링크 생성
          const downloadLink = document.createElement('a');
          downloadLink.href = URL.createObjectURL(filteredDataBlob);
          downloadLink.download = 'filtered_representative_cities.json'; // 다운로드 파일명
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        } catch (error) {
          console.error('파일 처리 중 에러:', error);
        }
      };

      reader.readAsText(file);
    }
  };

  return (
    <div style={{
      margin: '100px',
      justifyItems: 'center',
      alignItems:'center'
      
    }}>
      <h1>대표 도시 필터링 및 파일 저장</h1>
      <input type="file" accept=".json" onChange={handleFileUpload} />
    </div>
  );
}

export default DownLoad;