import { Breadcrumbs, Button, FirstDisplayedItemsCount, LastDisplayedItemsCount, Pagination, PaginationProps } from '@gravity-ui/uikit';
import React, { useState } from 'react';
import { categories } from '../utils/categories';
import Category from './category/category';
import style from './style.module.css';
import { cards } from '../utils/cards';
import Card from '../../../widgets/card/card';
import Sidebar from './filtration';
import funnel from '../../../assets/icons/Funnel.svg';
import Sort from './sort';
import Filters from './filtration';


const Catalog = (): JSX.Element => {

    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ];

    const [filters, setFilters] = useState({
        price: 'any',
        size: 'any',
        category: 'any',
        style: 'any',
        year: 'any',
        country: 'any',
      });
    
      const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    
      const handleFilterChange = (newFilters: any) => {
        setFilters(newFilters);
      };
    
      const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
      };

    const [state, setState] = useState({page: 1, pageSize: cards.length});

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
            </div>
            <div>
                <div className={style.filters}>
                    <Button size='s' className={style.button} onClick={toggleSidebar}>
                        <img src={funnel} alt='funnel' />
                        Показать фильтры
                    </Button>
                    <Sort options={options}/>
                </div>
                <div className={style.gallery}>
                    <Filters isVisible={isSidebarVisible} />
                    {cards.map(card => (
                        <Card card={card} key={card.product_id}/>
                    ))}
                </div>
            </div>
            <Pagination page={1} pageSize={5} total={cards.length} onUpdate={handleUpdate} />
        </section>
    );
};
export default Catalog;