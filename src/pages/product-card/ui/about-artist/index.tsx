import React from 'react';
import InfoPoint from '../info-point';
import { ProductAuthor } from '../../../../shared/entities/product-details';
import style from './style.module.css';

const AboutArtist = (props : {author: ProductAuthor}) => {

    const sex = props.author.productAuthor_sex === 1 ? 'Мужской' : 'Женский';

    return (
        <div className={style.main}>
            <div className={style.columns}>
                <div className={style.column}>
                    <InfoPoint title='Пол' desc={sex} />
                    <InfoPoint title='Год рождения' desc={props.author.productAuthor_year}/>
                    <InfoPoint title='Город рождения' desc={props.author.productAuthor_city}/>
                </div>
                <div className={style.column}>
                    <InfoPoint title='Город проживания' desc={props.author.productAuthor_city_live}/>
                    <InfoPoint title='Образование' desc={props.author.productAuthor_education}/>
                    <InfoPoint title='Художественное образование' desc={props.author.productAuthor_education_art}/>
                </div>
                <div className={style.column}>
                    <InfoPoint title='Опыт преподавания' desc={props.author.productAuthor_teacher}/>
                    <InfoPoint title='Персональный стиль' desc={props.author.productAuthor_style}/>
                    <InfoPoint title='Социальные сети' desc={''}/>
                </div>
            </div>
        </div>
    );
};

export default AboutArtist;