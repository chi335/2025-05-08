import React, { useState } from 'react';

function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);

    // 방법 1: 함수 안에 함수로 정의
    function handleClick() {
        setIsToggleOn((prevState) => !prevState);
    }

    // 방법 2: 화살표 함수 사용 (주석 해제하면 위 함수를 이걸로 대체 가능)
    // const handleClick = () => {
    //     setIsToggleOn((prevState) => !prevState);
    // };

    return (
        <button onClick={handleClick}>
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    );
}

export default Toggle;