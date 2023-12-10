import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionBlog, Search, Button, Spinner, Modal } from '../../components';
import { useBlog } from '../../hooks/useBlog';
import '../../css/EntryList.css';






export const EntryList = () => {
    const navigate = useNavigate();
    const { datosBlog, isLoading, filterBlog, getFilterId} = useBlog();
   
    const [ isOpenModal, setIsOpenModal ] = useState(false);
    
    const handleClic = (id) => {
        getFilterId(id);
        setIsOpenModal(true);


        setTimeout(() => {
            setIsOpenModal(false)
        }, 1000);
    }

    return (
        <div className='container' >
            <Spinner isOpenSpinner={ isLoading } />
            <h1>Lista de Blogs</h1>

            <div className='container-search'>
                <Search />
            </div>
            {
                datosBlog.map((values) => (
                    <SectionBlog 
                        key={ values.id }
                        titulo={ values.titulo }
                        autor={ values.autor }
                        contenido={ values.contenido }
                        image={''}
                        fechaPublicacion={ values.fechaPublicacion }
                        id={ values.id }
                        handleClic={ handleClic }
                    />
                ))
            }
            

            <div>
                <Button
                    text='Registra nuevo blog'
                    handleClick={ () => navigate('/register')}
                    style={{
                        backgroundColor: "green",
                        color: "white",
                        height: "40px",
                        width: "200px"
                    }}
                />
            </div>
            
            <Modal
                titulo="Detalle del Blog"
                isOpen ={ isOpenModal }
                cuerpo={
                    <>
                        {
                            filterBlog !== undefined && filterBlog.map( blog => (
                                <div key={ blog.id } className="blogCuerpo">
                                    <div className="blogCuerpo-titulo">Titulo: { blog.titulo }</div>
                                    <div className="blogCuerpo-titulo">Autor: { blog.autor }</div>
                                    <div className="blogCuerpo-titulo">{ blog.contenido }</div>
                                </div>
                            ))
                        }
                    </>
                }

            />
            
        </div>
    )
}

