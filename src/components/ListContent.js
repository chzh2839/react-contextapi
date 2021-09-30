import React, { useState } from 'react';

function ListContent(props){
    console.log('props ==> ', props);

    const initalNum = [0, 0, 0, 0];
    const [따봉, 따봉변경] = useState(initalNum);

    const [isChecked, setIsChecked] = useState(false);
    const [checkedIndex, setCheckedIndex] = useState(-1);

    function 따봉더하기 (index) {
        var newThumb = [...따봉];
        newThumb[index] = newThumb[index] + 1;
        따봉변경(newThumb);
    }

    function checkHandler (index, event) {
        var checked = !isChecked;
        setIsChecked(checked);
        addCheckedArry(index, checked);
    }

    function addCheckedArry (index, checked) {
        if (checked) { // true
            setCheckedIndex(index);
            props.getCheckedColor(index);
            
        } else { // false
            setCheckedIndex(-1);
            props.getCheckedColor(-1);
        }  
    }

    return (
        <div 
        className="list"
        style={{ background: props.index === checkedIndex ? props.color : 'white' }}>
            <input type="checkbox" className="checkbox-list" checked={isChecked} onChange={ checkHandler.bind(this, props.index) } />
            <h3> { props.title } <span className="pointer" onClick={ 따봉더하기.bind(this, props.index) }>👍</span> { 따봉[props.index] } </h3>
            <p>2월 17일 발행</p>
            <hr />
        </div>
    );
};

export default ListContent;