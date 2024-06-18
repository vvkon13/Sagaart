import { Breadcrumbs, FirstDisplayedItemsCount, LastDisplayedItemsCount, Pagination, PaginationProps } from '@gravity-ui/uikit';
import React, { useState } from 'react';
import { categories } from '../utils/categories';
import Category from './category/category';
import style from './style.module.css';
import { cards } from '../utils/cards';
import Card from '../../../widgets/card/card';
import Filters from './filtration';


const Catalog = (): JSX.Element => {

    const [state, setState] = useState({page: 1, pageSize: 20});

    const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
    setState((prevState) => ({...prevState, page, pageSize}));


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
                    <Filters />
                    <div className={style.gallery}>
                        {cards.map(card => (
                            <Card card={card} key={card.product_id}/>
                        ))}
                    </div>
                </div>
            </div>
            <Pagination page={1} pageSize={20} onUpdate={handleUpdate} />
        </section>
    );
};
export default Catalog;