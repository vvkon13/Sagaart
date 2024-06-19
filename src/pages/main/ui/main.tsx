import React from 'react';
import style from './style.module.css';
import { Button, Icon } from '@gravity-ui/uikit';
import main from '../../../assets/images/picture.png';
import chart from '../../../assets/images/chart-main.png';
import {Database} from '@gravity-ui/icons';
import Benefit from './benefit';
import vector from '../../../assets/icons/Vector.svg';
import New from './new';
import image1 from '../../../assets/images/Image.png';
import image2 from '../../../assets/images/Image-2.png';
import image3 from '../../../assets/images/Image-3.png';
import image4 from '../../../assets/images/Image-4.png';

const Main = (): JSX.Element => {
    return (
        <div className={style.main}>
            <section className={style.section_main}>
                <div className={style.section_main__content}>
                    <div className={style.section_main__info}>
                        <h1 className={style.section_main__title}>
                            ŞAGAART- оценка и продажа предметов искусства
                        </h1>
                        <p className={style.section_main__desc}>
                            Наш алгоритм на основе огромной базы данных поможет определить справедливую цену  арт-объекта и оценит его инвестиционную привлекательность для вас
                        </p>
                        <div className={style.buttons}>
                            <Button size='l' className={`${style.button} ${style.button_dark}`}>
                                <Icon className={style.button_img} data={Database} size='16' />
                                оценить объект
                            </Button>
                            <Button size='l' className={style.section_main__button}>
                                узнать подробнее
                            </Button>
                        </div>
                    </div>
                    <div className={style.section_main__charts}>
                        <img className={style.section_main__img} src={main} alt='main' />
                        <img className={style.section_main__chart} src={chart} alt='chart' />
                    </div>
                </div>
                <div className={style.section_main__benefits}>
                    <Benefit 
                        title='Объективный анализ цены' 
                        desc='Вы получаете справедливую цену арт-объекта, основанную на алгоритме, исключающий субъективное мнение специалистов'
                        icon={vector}
                    />
                    <Benefit 
                        title='Инновационность' 
                        desc='Разработанный алгоритм не имеет аналогов в мире, вы можете получить доступ уже сейчас'
                        icon={vector}
                    />
                    <Benefit 
                        title='Анатилическая база' 
                        desc='По подписке вы получаете доступ к аналитике по более чем 13000 объектов искусства на нашем маркетплейсе'
                        icon={vector}
                    />
                    <Benefit    
                        title='Достоверность' 
                        desc='Мы провели многочисленные исследования и испытания технологии и получили высокий уровень достоверности'
                        icon={vector}
                    />
                </div>
            </section>
            <section className={style.section_news}>
                <div className={style.section_news__name}>
                    <div className={style.section_news__main}>
                        <p className={style.section_news__desc}>
                            Новости
                        </p>
                        <h2 className={style.section_news__title}>
                            Узнайте первыми от Sagaart
                        </h2>
                    </div>
                    <Button className={style.section_news__button} size='s'>
                        Смотреть все новости
                    </Button>
                </div>
                <div className={style.section_news__news}>
                    <New 
                        title='Арт-рынок в 2023-2024 году'
                        desc='Рынок современного искусства вступил в важную и долгожданную фазу адаптации'
                        image={image1}
                    />
                    <New 
                        title='Отчет о рынке искусства'
                        desc='Замедление темпов роста на основных мировых площадках связано с меньшим количеством результатов'
                        image={image2}
                    />
                    <New 
                        title='Путеводители по выставкам'
                        desc='Топ-3 выставки современного искусства на июнь-июль в 2024 году'
                        image={image3}
                    />
                    <New 
                        title='Обзор аукционного рынка'
                        desc='Топ-10 аукционных домов по аукционному обороту в 2023 годуу'
                        image={image4}
                    />
                </div>
            </section>
            <section className={style.section_gallery}>
                <div className={style.section_gallery__main}>
                    <p className={style.section_galley__desc}>
                        галлерея
                    </p>
                    <h2 className={style.section_gallery__title}>
                        вдохновитесь новинками нашей арт-галлереи                     
                    </h2>
                    <p className={style.section_gallery__desc}>
                        В нашем уникальном маркет-плейсе каждая картина рассказывает свою неповторимую историю. Здесь вы найдёте произведения талантливых художников современности, способные вдохновить, вызвать глубокие эмоции и стать украшением любого пространства. Мы следим за новинками
                    </p>
                </div>
                <div className={style.section_gallery__gallery}>

                </div>
            </section>
            <section>
                
            </section>
            <section>
                
            </section>
        </div>
    );
};
export default Main;