import { useEffect, useState } from 'react';
import Eliminar from '../../img/icons8-eliminar-30.png';
import '../../css/Modal.css';


export const Modal = (props) => {

    const { isOpen, titulo, cuerpo, footer } = props;

    const [openModal, setOpenModal ] = useState(false);
    const handleClick = () => {
        setOpenModal(false);
    }
    useEffect(() => {
        if (isOpen) {
            setOpenModal(true);
        }
        
    },[isOpen])

    return (
        <div className="containerModal" style={{ visibility: openModal ? 'visible' : 'hidden'}}>
            <div className='containerModal-styles'>
                <div className='containerModal-styles-title'>

                    <h3 className='containerModal-styles-title-texto'>{titulo}</h3>
                    
                    <img 
                        src={ Eliminar} 
                        alt='eliminarModal' 
                        className='containerModal-styles-title-img' 
                        onClick={ handleClick }
                    />
                </div>
                <div className="containerModal-styles-body">
                    { cuerpo }
                </div>
                <div className="containerModal-styles-footer">
                    { footer }
                </div>
            </div>
        </div>
    )
}
