import React from 'react';
import style from "./Panel.module.css"

const Panel = ({name}) => {
    return (
        <div className={style.panel}>
            <div className={style.line}/>
            <div className={style.text}>{name}</div>

        </div>
    );
};

export default Panel;