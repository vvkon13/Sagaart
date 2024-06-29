import React from 'react';
import style from './style.module.css';
import { Button, Icon } from '@gravity-ui/uikit';
import { Person } from '@gravity-ui/icons';
import { Heart } from '@gravity-ui/icons';
import { Database } from '@gravity-ui/icons';
import { SquareChartBar } from '@gravity-ui/icons';
import { CopyPlus } from '@gravity-ui/icons';
import { LayoutHeaderCellsLargeThunderbolt } from '@gravity-ui/icons';
import { ChartMixed } from '@gravity-ui/icons';
import { ArrowRightToSquare } from '@gravity-ui/icons';
import { logout } from '../../../../shared/api/user';
import { useAppDispatch } from '../../../../shared/utils/hooks';
import { resetUser } from '../../../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';


const Menu = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleExit = () => {
        logout()
            .then(() => {
                localStorage.removeItem('token');
                dispatch(resetUser());
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className={style.menu}>
            <nav className={style.nav}>
                <Button className={style.button} size='xl'>
                    <Icon data={Person} size={20} />
                    Личные данные
                </Button>
                <Button className={style.button} size='xl'>
                    <Icon data={Heart} size={20} />
                    Избранное
                </Button>
                <Button className={style.button} size='xl'>
                    <Icon data={Database} size={20} />
                    Оценить объект
                </Button>
                <Button className={style.button} size='xl'>
                    <Icon data={SquareChartBar} size={20} />
                    Результаты оценки
                </Button>
                <Button className={style.button} size='xl'>
                    <Icon data={CopyPlus} size={20} />
                    Добавить работу
                </Button>
                <Button className={style.button} size='xl'>
                    <Icon data={LayoutHeaderCellsLargeThunderbolt} size={20} />
                    Рекомендации
                </Button>
                <Button className={style.button} size='xl'>
                    <Icon data={ChartMixed} size={20} />
                    Моя статистика
                </Button>
            </nav>
            <Button className={style.button} size='xl' onClick={handleExit}>
                <Icon data={ArrowRightToSquare} size={20} />
                Выход
            </Button>
        </div>
    );
};

export default Menu;