import React, { useState } from 'react';
import style from './style.module.css';
import { Button } from '@gravity-ui/uikit';
import media from '../../../../assets/images/Media.png';
import analytics from '../../../../assets/images/Analytics.png';

const Slider = () => {

    const [count, setCount] = useState(1);

    const handleButtonNext = () => {
        setCount(count + 1);
    };

    const handleButtonBack = () => {
        setCount(count - 1);
    };

    const button = count === 1 ?  <Button size='l' className={style.button} onClick={handleButtonNext}>Далее</Button> : <Button size='l' className={style.button} onClick={handleButtonBack}>Назад</Button>;
    const title = count === 1 ? 'Сервис оценки' : 'Аналитика';
    const desc = count === 1 ?  'Сервис поможет провести анализ и оценить стоимость арт-объектов на основе анализа больших данных с помощью авторского алгоритма, который учитывает 35 критериев.' : 'Наш сервис предлагает полный анализ арт-объекта, включая справедливую оценку стоимости. Вы узнаете о достижениях автора, коллекциях и выставках, а также историю изменения цен. С нашей аналитикой вы сможете принять обоснованное решение об инвестициях в искусство.';

    return (
        <div className={style.main}>
            <div className={style.info}>
                <p>
                    {count} of 2
                </p>
                <div>
                    <h2 className={style.title}>
                        {title}
                    </h2>
                    <p className={style.desc}>
                        {desc}
                    </p>
                </div>
                {button}
            </div>
            <div className={style.image_block}>
                {count === 1 ? (
                    <img src={media} />
                ): (
                    <>
                        <img className={style.image}  src={analytics} />
                        <Button size='xl' className={style.button_image}>получить аналитику</Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Slider;