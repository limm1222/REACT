import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";

// function App () {
//     return (
//         <BrowserRouter>
//             <Link to="/"> Home Page </Link>
//             <Link to="/products"> Product Datail Page </Link>
//             <Link to="/products"> Product Datail Notice Page </Link>
//             <Link to="/cart"> Cart Page </Link>
//             <Link to="/users"> users </Link>
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/products:id" element={<ProductDetail />} />
//                 <Route path="/products:id/notice" element={<ProductDetailNotice />} />
//                 <Route path="/cart" element={<CartPage />} />
//                 <Route path="/users/*" element={<Users />} />
//                     <Route path="/coupon" element={<CouponPage />}/>
//                     <Route path="/question" element={<QusetionPage />}/>
//                     <Route path="/notice" element={<NoticePage />}/>
//             </Routes>
//         </BrowserRouter>
//     )
// }

// function HomePage(){
//     return <h1>This is Home Page</h1>
//   }

// function ProductDetail(){
//     const location = useLocation();
//   console.log(location)
//   return <h1>This is Product Datail Page</h1>
// }

// function ProductDetailNotice(){
//     const location = useLocation();
//   console.log(location)
//   return <h1>This is Product Datail Notice Page</h1>
// }

// function CartPage(){
//     return <h1>This is Cart Page</h1>
// }

// function Users(){
//     return <h1>This is User Page</h1>
// }

// function CouponPage(){
//     return <h1>This is Coupon Page</h1>
// }

// function QusetionPage(){
//     return <h1>This is Qusetion Page</h1>
// }

// function NoticePage(){
//     return <h1>This is Notice Page</h1>
// }


// 강사님 코드 V1
// function App () {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<HomePage/>}/>
//                 <Route path="/cart" element={<Cart/>}/>
//                 <Route path="/products/:id" element={<ProductDetailPage/>}/>
//                 <Route path="/products/:id/notice" element={<ProductDetailNoticePage />}/>
//                 <Route path="/users" element={<Users/>}/>
//                 <Route path="/users/coupon" element={<CouponPage/>}/>
//                 <Route path="/users/question" element={<QuestionPage/>}/>
//                 <Route path="/users/notice" element={<NoticePage/>}/>
//             </Routes>
//         </BrowserRouter>
//     );
// }


// 강사님 코드 V2
// function App () {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<HomePage/>}/>
//                 <Route path="/cart" element={<Cart/>}/>
//                 {/* Outlet은 라우트에서 자식으로 있는 컴포넌트를 꺼내서 보여주는 컴포넌트! */}
//                 <Route path="/users/*" element={<Outlet/>}>
//                     {/* 이 안에 중첩할 라우트 들이 들어갑니다! */}
//                     {/* 여기 주소는 /usres */}
//                     <Route path="" element={<Users/>}/>
//                     {/* 여기 주소는 /usres/coupon */}
//                     <Route path="coupon" element={<CouponPage/>}/>
//                     {/* 여기 주소는 /usres/question */}
//                     <Route path="question" element={<QuestionPage/>}/>
//                     {/* 여기 주소는 /usres/notice */}
//                     <Route path="notice" element={<NoticePage/>}/>
//                 </Route>
//                 <Route path="/products/:id" element={<ProductDetailPage/>}/>
//                 <Route path="/products/:id/notice" element={<ProductDetailNoticePage />}/>
//             </Routes>
//         </BrowserRouter>
//     );
// }

// 강사님 코드 V2 - 자식 컴포넌트들이 보이게!
function App () {
    return (
        <div>
    <BrowserRouter>
        {/* a태그와 Link차이 확인하기 a태그는 새로고침일어남! Link는 안일어남! */}
        <a href="/cart">카트페이지 이동</a>
        <Link to="/">홈</Link>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/cart" element={<Cart/>}/>
                {/* Outlet은 라우트에서 자식으로 있는 컴포넌트를 꺼내서 보여주는 컴포넌트! */}
                <Route path="/users/*" element={<Users/>}>
                    {/* 이 안에 중첩할 라우트 들이 들어갑니다! */}

                    {/* 여기 주소는 /usres/coupon */}
                    <Route path="coupon" element={<CouponPage/>}/>
                    {/* 여기 주소는 /usres/question */}
                    <Route path="question" element={<QuestionPage/>}/>
                    {/* 여기 주소는 /usres/notice */}
                    <Route path="notice" element={<NoticePage/>}/>
                </Route>
                <Route path="/products/:id" element={<ProductDetailPage/>}/>
                <Route path="/products/:id/notice" element={<ProductDetailNoticePage />}/>
            </Routes>
            {/* /users로 이동하는 버튼: useNavigate 이용하기. */}
            <Button/>
        </BrowserRouter>
        </div>
    );
}

function Button() {
    const navigate = useNavigate()
    return <button onClick={() => navigate("/users")}>유저보기</button>
}


function HomePage() {
    return <h1>홈페이지</h1>
}

function Cart() {
    return <h1>카트</h1>
}

//기존
// function Users() {
//     return <h1>유저들</h1>
// }

// V2에서만!
function Users() {
    return (
        <div>
            <h1>유저들</h1>
            <Outlet/>
        </div>
    )
}

function ProductDetailPage() {
    const {id} = useParams()
    return <h1>{id}번 상품 입니다!</h1>
}

function CouponPage() {
    return <h1>쿠폰</h1>
}

function QuestionPage() {
    return <h1>질문</h1>
}

function NoticePage() {
    return <h1>알림</h1>
}

function ProductDetailNoticePage() {
    const {id} = useParams()
    return <h1>{id}번 상품 상세 알림 페이지</h1>
}

export default App;