import React, { useState} from 'react';
 function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 return (
 <div>
 <h1>{isLoggedIn? '환영합니다!' : '로그인해주세요.'}</h1>
 <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
 {isLoggedIn? '로그아웃' : '로그인'}
 </button>
 </div>
 );
 }
 import React, { useState} from 'react';
 function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const renderContent= () => {
 if (isLoggedIn) {
 return <h1>환영합니다!</h1>;
 } else {
 return <h1>로그인해주세요.</h1>;
 }
 };
 return (
 <div>
 {renderContent()}
 <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
 {isLoggedIn? '로그아웃' : '로그인'}
 </button>
 </div>
 );
 }
 export default App;
