import * as yup from 'yup';

const schema = yup.object().shape({
    user_name: yup
        .string()
        .trim()
        .min(0, 'Длина до 150 символов')
        .max(150, 'Длина до 150 символов')
        .notRequired()
    ,
    telephone: yup
        .string()
        .trim()
        .matches(
            /^(?:((\+7|8)+([0-9]){10}))?$/,
            { message: 'Введите корректный телефон', excludeEmptyString: false }

        )
        .notRequired(),
});

export default schema; 