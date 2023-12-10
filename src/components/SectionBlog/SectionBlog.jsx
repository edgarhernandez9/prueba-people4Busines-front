
import '../../css/SectionBlog.css';



export const SectionBlog = (props) => {
    const { titulo, contenido, autor, image, fechaPublicacion, id, handleClic } = props;

    
    
    return (
        <>
            <div className='container-section'>
                <div className='container-blog'>
                    <div className='container-blog-items'>
                        <h1>Titulo: {titulo}</h1>
                        <h2>{contenido.substring(0, 70)}... 
                            <label className='container-blog-items-label' onClick={ () => handleClic(id)}> Mostrar mas</label>
                        </h2>
                        {/* <h2>{contenido}</h2> */}
                    </div>
                    <div className='container-blog-items'>
                        <h2>Autor: {autor}</h2>
                        <img src={image} />
                    </div>
                
                    
                </div>
                <div>
                    <h2>Fecha de publicacion: {fechaPublicacion}</h2>
                </div>
            </div>
            
        </>
        
    )
}

