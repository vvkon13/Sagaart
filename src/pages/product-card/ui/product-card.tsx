import React from 'react';
import style from './style.module.css';
import { Product } from './product';

const ProductCard = (): JSX.Element => {
    return (
        <div className={style.main}>
            <section className={style.section_products}>
                <Product 
                    title='some' 
                    image='https://cameralabs.org/media/k2/items/cache/5e3bd17765e820213981ad5d80fbce34_L.jpg' 
                    author='some' 
                    year='some' 
                    size='some' 
                />
            </section>
            <section>

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