import { Button, RadioGroup, RadioGroupOption } from '@gravity-ui/uikit';
import React from 'react';
import style from './style.module.css';

export const Product = ({product}: {product: any}) => {

    
const  price: RadioGroupOption[] = [
    {value: '1', content: 'Оригинал'},
    {value: '2', content: 'Постер'},
];


    return(
        <div className={style.main}>
            <div className={style.image__container}>
                <img className={style.full_image} src={product.product_jpeg1} />
            </div>
            <div className={style.image__container}>
                <img className={style.cropped_image} src={product.product_jpeg2} />
                <div className={style.block}>
                    <div className={style.flex}>
                        <h3 className={style.title}>    
                            {product.product_author.productAuthor_name}
                        </h3>
                        <p className={style.desc}>
                            {product.product_name},{product.product_year}
                        </p>
                        <p className={style.size}>
                            {product.product_size}
                        </p>
                        <p className={style.price}>
                            {product.product_cost_end}
                        </p>
                    </div>
                    <div className={style.flex}>
                        <RadioGroup className={style.radio} size="l" name="group1" defaultValue={price[0].value} options={price} direction="horizontal"/>
                        <Button className={style.button}> Добавить </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};