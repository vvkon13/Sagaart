import React from 'react';
import InfoPoint from '../info-point';
import { Product } from '../../../../shared/entities/product-details';
import style from './style.module.css';

const AboutWork = (props : {product: Product}) => {
    return (
        <div className={style.main}>
            <p className={style.desc}>
                {props.product.product_info}
            </p>
            <div className={style.columns}>
                <div className={style.column}>
                    <InfoPoint title='Год создания работы' desc={props.product.product_year} />
                    <InfoPoint title='Размер' desc={props.product.product_size}/>
                    <InfoPoint title='Материалы' desc={props.product.product_material1}/>
                </div>
                <div className={style.column}>
                    <InfoPoint title='Категория' desc={props.product.product_category.productCategory_name}/>
                    <InfoPoint title='Жанр' desc={props.product.product_genre.productGenre_name}/>
                    <InfoPoint title='Стиль' desc={props.product.product_style.productStyle_name}/>
                </div>
                <div className={style.column}>
                    <InfoPoint title='Желаемая стоимость работы' desc={props.product.product_cost_fair + ''}/>
                    <InfoPoint title='Город продажи' desc={props.product.product_city_sale}/>
                    <InfoPoint title='Страна товара' desc={props.product.product_country}/>
                </div>
            </div>
        </div>
    );
};

export default AboutWork;