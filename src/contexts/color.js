import React, { createContext, useState } from "react";

export const ColorContext = createContext({
    state : {color : 'red', subcolor : 'green'},
    actions: {
        setColor: () => {},
        setSubcolor: () => {}
    }
});

const ColorProvider = (props) => {
    const [color, setColor] = useState('red');
    const [subcolor, setSubcolor] = useState('green');

    const value = {
        state : {color, subcolor},
        actions : {setColor, setSubcolor}
    }
    console.log('ColorContext => ', ColorContext);

    return (
    <ColorContext.Provider value={value}>{props.children}</ColorContext.Provider>
    );
}

const {Consumer: ColorConsumer} = ColorContext;
export {ColorProvider, ColorConsumer};

// export {ColorProvider};

export default ColorContext;