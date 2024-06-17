import { Breadcrumbs, FirstDisplayedItemsCount, LastDisplayedItemsCount } from '@gravity-ui/uikit';
import React from 'react';
import { categories } from '../utils/categories';
import Category from './category/category';
import style from './style.module.css';
import { cards } from '../utils/cards';
import Card from '../../../widgets/card/card';

const getSizeClass = (sizeCategory: number) => {
    switch (sizeCategory) {
        case 2:
            return 'small';
        case 3:
            return 'medium';
        case 4:
            return 'large';
        case 5:
            return 'oversize';
        default:
            return 'small';
    }
};

const Catalog = (): JSX.Element => {
    return (
        <section className={style.main}>
            <div className={style.container}>
                <div>
                    <Breadcrumbs 
                    items={[
                        {
                            text: 'Каталог',
                            // eslint-disable-next-line @typescript-eslint/no-empty-function
                            action: () => {},
                        },
                    ]}
                    renderItemDivider={() => '>'}
                    firstDisplayedItemsCount={FirstDisplayedItemsCount.One}
                    lastDisplayedItemsCount={LastDisplayedItemsCount.One}
                    />
                </div>
                <div className={style.categories}>
                    {categories.map((category, index: number) => (
                        <Category title={category.title} key={index} />
                    ))}
                </div>
                <div>
                    <div>

                    </div>
                    <div className={style.gallery}>
                        {cards.map(card => (
                            <Card card={card} key={card.product_id}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Catalog;