import React from 'react';
import InfoPoint from '../info-point';
import { ProductAuthor } from '../../../../shared/entities/product-details';
import style from './style.module.css';

const Achievements = (props : {author: ProductAuthor, collection: string}) => {

    const show = props.author.productAuthor_show.authorShow_name + ',' +  ' ' + props.author.productAuthor_show.authorShow_place + ' ' + props.author.productAuthor_show.authorShow_year;

    return (
        <div className={style.main}>
            <div className={style.columns}>
                <div className={style.column}>
                    <InfoPoint title='Награды в области искусства' desc={props.author.productAuthor_achievement.authorAchievement_name} />
                    <InfoPoint title='Участие в выставках' desc={show}/>
                    <InfoPoint title='Коллекции' desc={props.collection}/>
                </div>
            </div>    
        </div>
    );
};

export default Achievements;