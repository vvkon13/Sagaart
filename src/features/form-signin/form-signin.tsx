
import React, { FC, useState } from 'react';

import { Form } from '../../shared/ui';
import { FormFieldsSignin } from '../../entities/form-signin/index';
import FormSignupSchema from '../../shared/utils/validation-schemas/form-signup-schema';

export const FormSigninFeature: FC = () => {

	const [serverErrorText, setServerErrorText] = useState('');
	const [serverEmailError, setServerEmailError] = useState('');
	const [serverPasswordError, setServerPasswordError] = useState('');
	const handleSubmit = () => {
		console.log('createUser');
	};

	return (
    <Form onSubmit={handleSubmit} schema={FormSignupSchema}>
        <FormFieldsSignin
				serverErrorText={serverErrorText}
			/>
    </Form>
	);
};