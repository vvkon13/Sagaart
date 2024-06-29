import React from 'react';
import background from '../../../assets/images/Imadge.png';
import styles from './style.module.css';
import Menu from './menu/index';


const Profile = (): JSX.Element => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <img src={background} alt="art gallery" className={styles.image} />
                <div className={styles.main}>
                    <Menu />
                </div>
            </div>
        </section>);
};

export default Profile;

