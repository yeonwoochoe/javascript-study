// //함수데이터 내보내기
// // Default 사용
// export default function getType(data) {
//   return Object.prototype.toString.call(data).slice(8, -1);
// }

//익명함수로 사용가능
export default function (data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
// 단, default로 내보내는 항목은 무조건 하나만 가능
