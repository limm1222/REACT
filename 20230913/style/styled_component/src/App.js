import { createGlobalStyle } from "styled-components"
import Example from "./Components/Example"
// 태그드 템프릿 리터럴을 사용하여 함수를 사용하는 기법
// createGlobalStyle함수를 이용하여 전역 스타일 정의하기
const GlobalStyle = createGlobalStyle`
span {
  color: red;
  font-size: 12px;
}
`

function App() {

  return (
    <>
      {/*  전역 스타일 컴포넌트 */}
      <GlobalStyle/>
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example/>
    </>
  );
}

export default App;

// const name = '이호준'
// const age = 10

// function 인사(문구, 이름, 나이){
//     // console.log(문구)
//     console.log(문구, 이름, 나이)
//     return `${문구[0]}${이름}${문구[1]}${나이+나이}${문구[2]}`
// }

// const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age+age}입니다.`

// console.log(인사문구)

// export default App;
