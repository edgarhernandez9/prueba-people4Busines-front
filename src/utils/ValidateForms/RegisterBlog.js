import * as Yup from 'yup';

export function initialValues () {

    return {
        titulo: '',
        autor: '',
        fechaPubli: '',
        contenido: ''
    }
}

export function validationSchema () {
    
    return Yup.object({
        titulo: Yup.string().required(true),
        autor: Yup.string().required(true),
        fechaPubli: Yup.string().required(true),
        contenido: Yup.string().required(true)
    })
}