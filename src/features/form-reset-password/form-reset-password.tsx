
import React, { FC, useState } from 'react';

import { Form } from '../../shared/ui';
import { FormFieldsResetPassword } from '../../entities/form-reset-password/index';
import FormResetPasswordSchema from '../../shared/utils/validation-schemas/form-reset-password-schema';
import { resetPassword } from '../../shared/api/user';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmail } from '../../store/slices/userSlice';


export const FormResetPasswordFeature: FC = () => {

	const [serverErrorText, setServerErrorText] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();


	const handleSubmit = (data: any) => {
		setServerErrorText('');
		resetPassword({ ...data })
			.then(() => {
				dispatch(setEmail(data.email));
				navigate('/reset-password-submition');
			})
			.catch((error) => {
				console.log(error);
				setServerErrorText('Произошла ошибка сброса пароля');
			});
	};

	return (
    <Form onSubmit={handleSubmit} schema={FormResetPasswordSchema}>
        <FormFieldsResetPassword
				serverErrorText={serverErrorText}
				setServerErrorText={setServerErrorText as () => string}
			/>
    </Form>
	);
};