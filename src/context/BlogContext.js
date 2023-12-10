import { useState, useEffect, createContext } from 'react';
import { Register } from '../api/register';

const registerCtrl = new Register();

export const BlogContext = createContext();


export const BlogProvider = (props) => {
    const { children } = props;
    const [ datosBlog, setDatosBlog ] = useState([]);
    const [ filterBlog, setFilterBlog ] = useState([]);
    const [ isLoading, setisLoading ] = useState(false);
    const [ valueSearch, setvalueSearch ] = useState('');
    const [isOpen, setIsOpen] = useState('');

    useEffect(() => {
        getAllBlog();
    }, []);

    useEffect(() => {
        if (isOpen === '') {
            setvalueSearch('');
            getAllBlog()
        }
    }, [isOpen]);

    const getAllBlog = async () => {
        setisLoading(true)
        const response = await registerCtrl.getAllBlog();
        if (response.status === 200) {
            
            setDatosBlog(response.data);
            setisLoading(false);
        }
    }

    const registrarBlog = async (values) => {
        try {
            const data = {
                ...values,
                fechaPublicacion: values.fechaPubli
            }
            const response = await registerCtrl.register(data);
            if (response.status === 200) {
                console.log('exitoso');
            }else{
                console.log('sin exito');
            }
        } catch (error) {
            throw error;
        }
    }


    const getFilter = async (value) => {
        const datosFilter = [];
        datosBlog.filter(blog => {

            if (blog.titulo.includes(value) || blog.autor.includes(value)
                || blog.contenido.includes(value) || blog.fechaPublicacion.includes(value)
                || blog.id === value) {
                datosFilter.push({...blog});
            }else{
                return datosBlog
            }
        });

        setDatosBlog(datosFilter)
    }

    const getFilterId = (id) => {
        const filterData = [];
        datosBlog.filter( value => {
            if (value.id === id) {
                filterData.push(value);
            }
        });
        setFilterBlog(filterData)

    }

    const handleChangeSearch = (e) => {
        
        setvalueSearch(e.target.value)
        setTimeout(() => {
            
            if (e.target.value === '') {
                getAllBlog()
            }else{
                getFilter(e.target.value);
            }
        }, 1500);
    }

    const handleClickShowSearch = () => {
        setIsOpen(!Boolean(isOpen) ? 'open' : '');
    }

    const data = {
        datosBlog,
        isLoading,
        valueSearch,
        isOpen,
        filterBlog,
        registrarBlog,
        getFilter,
        handleChangeSearch,
        handleClickShowSearch,
        handleClickShowSearch,
        getFilterId
        
    }

    return <BlogContext.Provider value={ data } >
        { children }
    </BlogContext.Provider>
}
