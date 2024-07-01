import React from 'react';
import background from '../../../assets/images/Imadge.png';
import styles from './style.module.css';
import Menu from './menu/index';
import { FormPersonalAccountFeature } from '../../../features/form-personal-account/form-personal-account';


const Profile = (): JSX.Element => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <img src={background} alt="art gallery" className={styles.image} />
                <div className={styles.main}>
                    <Menu />
                    <FormPersonalAccountFeature/>
                </div>
            </div>
        </section>);
};

export default Profile;

