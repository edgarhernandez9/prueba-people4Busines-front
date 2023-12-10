import { useNavigate } from 'react-router-dom';
import { useBlog } from '../../hooks/useBlog';
import { useFormik } from 'formik';
import { TextField, Button } from '../index';
import { initialValues, validationSchema } from '../../utils/ValidateForms/RegisterBlog';

import '../../css/RegisterForm.css';


export const RegisterForm = () => {

    const navigate = useNavigate();
    const { registrarBlog } = useBlog();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (values) => {
            await registrarBlog(values);
        }
    });

    return (
        <div className="containerForm">
            <form className="containerForm-items" onSubmit={ formik.handleSubmit }>
                <TextField 
                    style={{
                        width: "240px",
                        height: '20px',
                    }}
                    name='titulo'
                    errors={ formik.errors.titulo }
                    value={ formik.values.titulo }
                    handleChange={ formik.handleChange}
                    placeholder='Ingresa el titulo'
                />
                <TextField 
                    style={{
                        width: "240px",
                        height: '20px',
                    }}
                    marginTop='25px'
                    name='autor'
                    value={ formik.values.autor }
                    errors={ formik.errors.autor }
                    handleChange={ formik.handleChange }
                    placeholder='Ingresa nombre de autor'
                />

                <TextField 
                    style={{
                        width: "240px",
                        height: '20px',
                    }}
                    marginTop='25px'
                    name='fechaPubli'
                    value={ formik.values.fechaPubli }
                    errors={ formik.errors.fechaPubli }
                    handleChange={ formik.handleChange }
                    placeholder='Ingresa la fecha de publicacion'
                />

                <div className="containerForm-items-area">
                    <textarea
                        className={ formik.errors.contenido ? 
                                "containerForm-items-area-item-error"
                                : "containerForm-items-area-item"}
                        name='contenido'
                        value={ formik.values.contenido }
                        onChange={ formik.handleChange }
                        placeholder='Ingresa contenido del blog..'
                    >

                    </textarea>
                    {
                        formik.errors.contenido && <label className="error-label">El campo es requerido</label>
                    }
                </div>

                <Button
                    type='submit'
                    text='Registrar'
                />

                <Button
                    text='Regresar'
                    handleClick={ () => navigate(-1)}
                    style={{
                        backgroundColor: 'yellow',
                        color: 'black',
                        marginLeft: "10px"
                    }}
                />
                
            </form>
        </div>
    )
}
