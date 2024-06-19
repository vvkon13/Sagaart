
import React, { FC, useEffect } from 'react';
import type { FormSignupProps } from './types';
import { Input } from '../../../shared/ui/';
import styles from './form-signup.module.css';
import { useFormContext } from 'react-hook-form';
import { Button } from '@gravity-ui/uikit';
import { clsx } from 'clsx';


export const FormFieldsSignup: FC<FormSignupProps> = ({
	serverErrorText,
	serverEmailError,
	serverPasswordError,
	setServerEmailError,
	setServerPasswordError,
}) => {

	const {
		formState: { isValid, errors },
	} = useFormContext();

	useEffect(() => {
		errors.email?.message && setServerEmailError('');
	}, [errors.email?.message]);

	useEffect(() => {
		errors.password?.message && setServerPasswordError('');
	}, [errors.password?.message]);

	return (
    <div className={styles.section}>
        <h1 className={clsx(styles.title,'text-style-heading-1')}>Регистрация</h1>
        <p className={clsx(styles.subtitle,'text-style-body-l')}>Зарегистрируйтесь, чтобы получать персональные рекомендации </p>
        <div className={styles.container}>
            <div className={styles.input_list}>
                <Input
						name="email"
						labelName="E-mail"
						error={errors.email ? `${errors.email?.message}` : serverEmailError}
					/>
                <Input
						name="password"
						labelName="Пароль"
						type={'password'}
						error={
							errors.password
								? `${errors.password?.message}`
								: serverPasswordError
						}
					/>
            </div>
            <Button className={styles.button} size='l' >Дальше</Button>
            <span className={styles.server_error}>{serverErrorText}</span>
        </div>
    </div>
	);
};