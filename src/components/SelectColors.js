import React, { useContext } from 'react';
import ColorContext from "../contexts/color";

function SelectColors(){
    const context = useContext(ColorContext);

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    return (
        <>
            <h2>색상을 선택하세요.</h2>

            <div style={{display:'flex', justifyContent: 'center'}}>
                {colors.map(color => (
                    <div key={color}
                    className="color-box pointer"
                    style={{ background: color }}
                    onClick={ () => {context.actions.setColor(color)} }
                    // onContextMenu : // 마우스 오른쪽 버튼 클릭 제어
                    onContextMenu={ e => {
                        e.preventDefault();  // 마우크 오른쪽 버튼 클릭 시 메뉴 나오는 거 무시
                        context.actions.setSubcolor(color);
                    }} />
                ))}
            </div>

            <hr />
        </>
    );
};

export default SelectColors;