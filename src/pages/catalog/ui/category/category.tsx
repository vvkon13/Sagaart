import React from 'react';
import style from './style.module.css';
import some from '../../../../assets/images/15.png';

const Category = ({ title}: {title: string}) => {
    return (
        <div className={style.main}>
            <img className={style.img} src={some} alt={title}/>
            <button className={style.button}>{title}</button>
        </div>
    );
};

export default Category;