import styled from 'styled-components'
export const Wrap = styled.div`
   overflow: hidden;
   min-width: ${(props) => props.$minWidth || '1200px'};
`
//부정연산 A가 있으면 A, 없으면 B. A||B 변수에는 꼭 $를 붙일것 ($를 안붙여도 사용은 되나, warning이 뜸. 버전따라 달라진 부분인듯)
export const Main = styled.main`
   width: ${(props) => props.$width || '1200px'};
   margin: 0 auto;
   overflow: hidden;
   padding: ${(props) => props.$padding || 0};
   min-height: ${(props) => props.$height+'px' || '500px'}; /* 세로 높이 조정 */
   background-color: var(--skyblue-color);
`
// export const ImageContainer = styled.div`
//    min-height:500px;
//   width: 1200px; /* 가로 고정 */ 
//   margin: 0 auto; /* 가운데 정렬 */
 
//   overflow: hidden; /* 넘치는 부분 숨기기 */
//     background-image: url(${(props) => props.src}); /* 이미지 소스 */
//   background-size: cover; /* 비율 유지하며 영역을 꽉 채움 */
//   background-position: center center; /* 이미지 중앙 정렬 */
//   background-repeat: no-repeat; /* 이미지 반복 금지 */
// `;

export const ResponsiveImage = styled.img`
 height:100%;

`;