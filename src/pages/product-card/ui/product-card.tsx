import React from 'react';
import style from './style.module.css';
import { Product } from './product';
import ExpandableSection from './expandable-section';
import AboutWork from './about-work';
import { product } from './utils/data';
import AboutArtist from './about-artist';
import Achievements from './achievements';
import PriceHistory from './price-history';
import NoSubscription from './no-subscription';
import BreadcrumbsComponent from '../../catalog/ui/bread-crumbs';
import { Item } from '../../../shared/entities/breadcrumbs';

const ProductCard = (): JSX.Element => {

    const breadItem = product.author.name;

    const items: Item[] = [
        {
            text: 'Каталог',
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            action: () => {},
        },
        {
            text: breadItem,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            action: () => {},
        },
    ];

    return (
        <div className={style.main}>
            <BreadcrumbsComponent items={items}/>
            <section className={style.section_products}>
                <Product 
                    product={product}
                />
            </section>
            <section className={style.section_products}>
                <div className={style.dropdowns__block}>
                    <ExpandableSection childComponent={<AboutWork product={product}/>} title='О работе' size='small' />
                    <ExpandableSection childComponent={<AboutArtist author={product.author}/>} title='О художнике' size='small'/>
                </div>
                <div className={style.dropdowns__block}>
                    <ExpandableSection childComponent={<PriceHistory />} title='История изменения цены' size='small'/>
                    <ExpandableSection childComponent={<Achievements author={product.author} collection={product.author.awards.name} />} title='Награды и достижения' size='small'/>
                </div>
                <div>
                    <ExpandableSection childComponent={<NoSubscription />} title='Аналитика' size='big'/>
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