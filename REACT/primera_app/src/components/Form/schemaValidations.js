import * as yup from 'yup'

const schema = yup.object({
    nombre: yup
        .string()
        .required('El campo nombre es obligatorio')
        .min(3, 'Minimo 3 caracteres')
        .max(50, 'El maximo son 50 caracteres')
        .matches(/^[a-zA-Z\s]+$/, 'Solo letras y espacios'),

    mail: yup
        .string()
        .required('El mail nombre es obligatorio')
        .email('Debe ser mail valido'),

    edad: yup
        .number()
        .required('El edad es obligatorio')
        .min(18, 'Minimo 18')
        .max(100, 'El maximo 100'),
    
    /*
    
    Password: yup
        .string()
        .required('El campo pass es obligatorio'),


    confirmPassword: yup
        .string()
        .required('El campo pass es obligatorio')
        .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),

    website: yup
        .string()
        .url('url')
        .test(
            'url-segura',
            'debe comenzar por https',
            value => !value || value.startsWith('https://')
        )

    */
})

export default schema;