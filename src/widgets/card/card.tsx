import { IProduct } from './types';
import React, {FC, useState} from 'react';
import style from './style.module.css';
import { Button } from '@gravity-ui/uikit';
import arrowup from '../../assets/icons/Arrow-up-outline.svg';
import arrowdown from '../../assets/icons/Arrow-down-outline.svg';

interface Props {
    card: IProduct;
    key: string | number;
  }

const Card: FC<Props> = ({ card }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={style.main}>
            <img className={style.img} src={card.product_jpeg} alt={card.product_name}/>
            {isExpanded && (
                <div className={style.modal}>
                    <div className={style.modal__section}>
                        <div className={style.unit}>
                            <div>
                                <p className={style.tag}>Инвестиции в искусство</p>
                                <p className={style.tag}>Уникальная работа</p>
                            </div>
                            <div className={style.modal__main}>
                                <ul className={style.ul}>
                                    <li className={style.li}>
                                        Размер
                                    </li>
                                    <li className={style.li}>
                                        Категория
                                    </li>
                                    <li className={style.li}>
                                        Материал
                                    </li>
                                </ul>
                                <ul className={style.ul}>
                                    <li className={`${style.li} ${style.li_desc}`}>
                                        {card.product_size}
                                    </li>
                                    <li className={`${style.li} ${style.li_desc}`}>
                                        {card.product_genre.productGenre_name}
                                    </li>
                                    <li className={`${style.li} ${style.li_desc}`}>
                                        {card.product_style.productStyle_name}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <Button className={style.modal__button} > Добавить </Button>

                </div>
            )}
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
                <img src={isExpanded ? arrowdown : arrowup} onClick={toggleExpand} className={style.button} />
            </div>
        </div>
    );
};

export default Card;