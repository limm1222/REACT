import React from "react";
import styled, { css } from "styled-components"

// Version 1
// const Btn = styled.button`
//     background-color: blue;
//     color: white;
// `

// // Btn 스타일드컴포넌트를 확장! styeld(확장하고 싶은 컴포넌트)
// const Btn2 = styled(Btn)`
//     color: black;
//     border-radius: 5px;
//     border: none;
// `

// const Btn3 = styled(Btn2)`
//     background-color: green;
// `


// Version 2
// const BorderNone = css` border: none;`;
// const BorderRadius = css` border-radius: 8px;`;
// const BoxShadow = css` box-shadow: 0 0 5px #33333333;`;


// const Btn = styled.button`
//     background-color: blue;
//     color: white;
// `

// // Btn 스타일드컴포넌트를 확장! styeld(확장하고 싶은 컴포넌트)
// const Btn2 = styled(Btn)`
//     ${BorderNone}
//     ${BorderRadius}
//     ${BoxShadow}
//     color: black;
// `

// const Btn3 = styled(Btn2)`
//     ${BorderNone}
//     ${BorderRadius}
//     ${BoxShadow}
//     background-color: green;
// `


// Version 3
const BorderNone = css` border: none;`;
const BorderRadius = css` border-radius: 8px;`;
const BoxShadow = css` box-shadow: 0 0 5px #33333333;`;

const Btn = styled.button`
    background-color: blue;
    color: white;
`
// Btn 스타일드컴포넌트를 확장! styled(확장하고싶은컴포넌트)
const ExtendedBtn = styled(Btn)`
    ${BorderNone}
    ${BorderRadius}
    ${BoxShadow}
    color: ${(props)=>props.color};
    background-color:${(props)=>props.bgColor};
`


// V1, V2
// const App = () => {
//     return (
//         <>
//         <Btn>버튼1</Btn>
//         <Btn2>버튼2</Btn2>
//         <Btn3>버튼3</Btn3>
//         </>
//     );
// };

const App = () => {
    return (
        <>
        <Btn>버튼1</Btn>
        <ExtendedBtn color="black" bgColor="blue">버튼2</ExtendedBtn>
        <ExtendedBtn color="white" bgColor="green">버튼3</ExtendedBtn>
        </>
    );
};

export default App;