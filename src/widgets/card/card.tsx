import { IProduct } from './types';
import React, {FC} from 'react';
import style from './style.module.css';

interface Props {
    card: IProduct;
    key: string | number;
  }

const Card: FC<Props> = ({ card }) => {
    return (
        <div className={style.main}>
            <img className={style.img} src={card.product_jpeg} alt={card.product_name}/>
            <h2 className={style.author}>
                {card.product_author.productAuthor_name}
            </h2>
            <div className={style.more}>
                <div className={style.info}>
                    <h3 className={style.name}>
                        {card.product_name}
                    </h3>
                    <p className={style.text}> 
                        {card.product_cost_end}
                    </p>
                </div>
                <button className={style.button}></button>
            </div>
        </div>
    );
};

export default Card;