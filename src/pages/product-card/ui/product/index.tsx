import { Button, RadioGroup } from '@gravity-ui/uikit';
import React from 'react';
import style from './style.module.css';

export const Product = ({title, image, author, year, size}: {title: string, image: string, author: string, year: string, size: string}) => {
    return(
        <div className={style.main}>
            <div className={style.image__container}>
                <img className={style.full_image} src={image}/>
            </div>
            <div className={style.image__container}>
                <img className={style.cropped_image} src={image}/>
                <div className={style.block}>
                    <div className={style.flex}>
                        <h3>    
                            {author}
                        </h3>
                        <p>
                            {title},{year}
                        </p>
                        <p>
                            {size}
                        </p>
                    </div>
                    <div className={style.flex}>
                        <RadioGroup />
                        <Button>Добавить</Button>
                    </div>
                </div>
            </div>
        </div>


    );
};