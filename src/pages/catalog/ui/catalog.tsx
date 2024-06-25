import { Button,  Pagination, PaginationProps } from '@gravity-ui/uikit';
import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import { cards } from '../utils/cards';
import Card from '../../../widgets/card/card';
import funnel from '../../../assets/icons/Funnel.svg';
import Sort from './sort';
import Filters, { FiltersValues } from './filtration';
import Categories from './categories';
import BreadcrumbsComponent from './bread-crumbs';
import { items, options } from '../constants';
import { Artwork } from '../../../shared/entities/products';
import { getProducts, getProductsWithFilters } from '../../../shared/api/products-api';
import NoProducts from './no-products';

const Catalog = (): JSX.Element => {

    const [products, setProducts] = useState<Artwork[] | null>(null);

    const [filters, setFilters] = useState({
        price: 'any',
        size: 'any',
        category: 'any',
        style: 'any',
        year: 'any',
        country: 'any',
      });
    
      const [isSidebarVisible, setIsSidebarVisible] = useState(false);

      const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
      };

    const [state, setState] = useState({page: 1, pageSize: cards.length});
    const [emptyState, setEmptyState] = useState<boolean>(false);

    const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
    setState((prevState) => ({...prevState, page, pageSize}));

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        getProducts()
        .then((res) => {
            setProducts(res.results);
        });
    };

    const updateProducts = (filters: FiltersValues) => {
        getProductsWithFilters(filters)
        .then((res) => {
            setProducts(res.results);
            console.log(res.results);
            if (res.results.length == 0) {
                setEmptyState(true);
                fetchProducts();
            } else {
                setEmptyState(false);
            }
        });
    };

    return (
        <section className={style.main}>
            <BreadcrumbsComponent items={items}/>
            <div className={style.container}>
                <Categories />
            </div>
            <div>
                <div className={style.filters}>
                    <Button size='s' className={style.button} onClick={toggleSidebar}>
                        <img src={funnel} alt='funnel' />
                        Показать фильтры
                    </Button>
                    <Sort options={options}/>
                </div>
                {emptyState && <NoProducts /> }
                <div className={style.gallery}>
                    <Filters isVisible={isSidebarVisible} updateProducts={updateProducts} />
                    {products && products.map(product => (
                        <Card card={product} key={product.id}/>
                    ))}
                </div>
            </div>
            <Pagination page={1} pageSize={5} total={cards.length} onUpdate={handleUpdate} />
        </section>
    );
};
export default Catalog;