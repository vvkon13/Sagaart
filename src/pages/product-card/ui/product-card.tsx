import React from 'react';
import style from './style.module.css';
import { Product } from './product';
import { cards } from '../../catalog/utils/cards';
import ExpandableSection from './expandable-section';
import AboutWork from './about-work';
import { product } from './utils/data';
import AboutArtist from './about-artist';
import Achievements from './achievements';
import PriceHistory from './price-history';

const ProductCard = (): JSX.Element => {
    return (
        <div className={style.main}>
            <section className={style.section_products}>
                <Product 
                    product={cards[0]}
                />
            </section>
            <section className={style.section_products}>
                <div className={style.dropdowns__block}>
                    <ExpandableSection childComponent={<AboutWork product={product}/>} title='О работе' />
                    <ExpandableSection childComponent={<AboutArtist author={product.product_author}/>} title='О художнике' />
                </div>
                <div className={style.dropdowns__block}>
                    <ExpandableSection childComponent={<PriceHistory />} title='История изменения цены' />
                    <ExpandableSection childComponent={<Achievements author={product.product_author} collection={product.product_analytics.productAnalytic_collection} />} title='Награды и достижения' />
                </div>
            </section>
            <section>
                
            </section>
            <section>
                
            </section>
            <section>
                
            </section>
        </div>
    );
};
export default ProductCard;