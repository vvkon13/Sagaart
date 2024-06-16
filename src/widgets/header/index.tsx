import React from 'react';
import style from './header.module.css';
import color from '../../assets/icons/Color.svg';
import person from '../../assets/icons/Person.svg';
import mail from '../../assets/icons/Mail.svg';
import bag from '../../assets/icons/Bag.svg';
import heart from '../../assets/icons/Heart.svg';
import write from '../../assets/icons/Write.svg';
import { TextInput } from '@gravity-ui/uikit';
import Logo from '../logo';
import SerachInput from '../search-input';
import { SearchInputType } from '../search-input/types';

const Header = () => {
    return (
        <div className={style.main}>
            <div className={style.navigation}>
                <Logo place='header'/>
                <div className={style.main__buttons}>
                    <button className={style.button}>
                        <img className={style.button__image} src={mail} alt='mail'/>
                    </button>
                    <button className={style.button}>
                        <img className={style.button__image} src={person} alt='person'/>
                    </button>
                    <button className={style.button}>
                        <img className={style.button__image} src={heart} alt='heart'/>
                    </button>
                    <button className={style.button}>
                        <img className={style.button__image} src={bag} alt='bag'/>
                    </button>
                </div>
            </div>
            <div className={style.navigation}>
                <div className={style.buttons}>
                    <button className={style.button}>Главная</button>
                    <button className={style.button}>Каталог</button>
                    <button className={style.button}>Подписка на аналитику</button>
                    <button className={style.button}>
                        <img className={style.button__image} src={color} alt='some'/>
                        Оценка стоимости
                    </button>
                    <button className={style.button} disabled>Новости</button>
                    <button className={style.button} disabled>Price database</button>
                </div>
                <div className={style.container_input}>
                    <SerachInput place={SearchInputType.header} />
                </div>
            </div>
        </div>
    )
}

export default Header;