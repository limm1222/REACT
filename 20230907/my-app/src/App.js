import './App.css';
import Hello from "./Components/Hello";
import HelloProps from "./Components/HelloProps";
import Time from "./Components/Time";
import Resume from "./Components/Resume";
import ColorText from "./Components/ColorText";


// function App() {
//   const name = '라이캣';
//   function 함수() {
//     return '함수'
//   }

//   const someStyle = { backgroundColor: "yellow", color: "blue"}

//   const redStyle = { backgroundColor: "black", color: "red"}
//   const whiteStyle = {backgroundColor: "black", color: "white" }
  
//   const today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth();
//   const date = today.getDate();
//   const hour = today.getHours();
//   const min = today.getMinutes();
//   const sec = today.getSeconds();

//   return (
// 		<div>
// 			<h1 style={{backgroundColor:"black", color:"white"}}>안녕, {name} 1호</h1>
// 			<h1>안녕, {[1, 2, 3].map(x => x ** 2)}!</h1>
// 			<h1>안녕, {함수() ? '함수' : 'JSX'}!</h1>
// 			<h1 style={someStyle}>안녕, {name}!</h1>
// 			<div className="newClass"/>
//       <br />
//       <div>
//         <div style={redStyle}>년: {year} </div>
//         <div style={whiteStyle}> 월/일: {month}/{date} </div>
//         <div style={whiteStyle}>시간: {hour}시 {min}분 {sec}초 </div>
//       </div>
// 		</div>
//   );
// }

//모듈 문법
import test, {test2} from "./Components/test" 

function App() {
  test();
  test2();

  return (
    <div>
      <Hello name="gary" />
      <Time />
      <HelloProps name="jaehyun" age={15} someFunc={() => 'aswesome!!!'} someJSX=
      {<img src="https://picsum.photos/id/237/200/300" />} someArr={[1, 2, 3, 4]} 
      someObj={{ one: 1 }} />
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="blue" />
    </div>
  );
}

export default App;