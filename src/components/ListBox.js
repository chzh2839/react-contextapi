import React, { useContext, useState } from "react";
// import { ColorConsumer } from "../contexts/color";
import ColorContext from "../contexts/color";

import ListContent from "./ListContent";

export default function ListBox () {
    const context = useContext(ColorContext);

    const origin = ['남자 코트 추천', '강남 우동 맛집', '리액트 독학', '세종대왕이 만든 훈민정음'];
    const [글제목, 글제목변경] = useState(origin);

    const [color, setColor] = useState('');
 
    function 제목바꾸기 () {
        var newArray = [...글제목];
        newArray[0] = '여자 코트 추천';
        newArray[1] = '강북 라면 맛집';
        글제목변경(newArray);
        console.log("newArray", newArray);
    }

    function 원래대로 () {
        var originArray = [...origin];
        글제목변경(originArray);
        console.log("originArray", originArray);
    }

    function getCheckedColor (value) {
        console.log("getCheckedColor value : ", value);
        if (value >= 0) {
            setColor(context.state.color);
        }
    }



    return (
        <>
            <button onClick={제목바꾸기}>제목바꾸기 버튼</button>
            <button onClick={원래대로}>제목 원래대로 버튼</button>

            <p>color 값 : {context.state.color} <span class="color-notice" style={{background: context.state.color }}></span></p>
            <p>subcolor 값 : {context.state.subcolor} <span class="color-notice" style={{background: context.state.subcolor }}></span></p>

            {/* <ColorConsumer>
                {({state}) => (
                    <>
                    {글제목.map((title, index) => (
                        <div 
                        key={title+index}
                        className="list"
                         style={{ background: (index%2 === 0) ? state.color : state.subcolor }}>
                            <h3> { title } <span className="pointer" onClick={ 따봉더하기.bind(this, index) }>👍</span> { 따봉[index] } </h3>
                            <p>2월 17일 발행</p>
                            <hr />
                        </div>
                    ))}
                    </>
                )}
            </ColorConsumer> */}

            <>
            {글제목.map((title, index) => (
                <ListContent key={index}
                 index={index}
                 title={title}
                 color={color}
                 getCheckedColor={getCheckedColor} />
            ))}
            </>
        </>
    )
}