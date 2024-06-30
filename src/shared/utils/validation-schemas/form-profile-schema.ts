import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .required('Поле обязательно для заполнения')
        .trim()
        .min(2, 'Длина поля от 2 до 150 символов')
        .max(150, 'Длина поля от 2 до 150 символов')
    ,
    phone: yup
        .string()
        .required('Поле обязательно для заполнения')
        .trim()
        .matches(
            /^\+7|8 \([1-9]{1}\d{2}\) \d{3}-\d{2}-\d{2}$/,
            'Введите корректный телефон'
        ),
});

export default schema;