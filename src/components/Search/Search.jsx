import { useState } from 'react';
import { useBlog } from '../../hooks/useBlog';
import Buscar from '../../img/icons8-búsqueda.svg';
import Eliminar from '../../img/icons8-eliminar-30.png';

import '../../css/Search.css';




export const Search = ( ) => {
    // const [isOpen, setIsOpen] = useState('');

    const { getFilter, handleChangeSearch, valueSearch, handleClickShowSearch, isOpen } = useBlog();
    // const handleClick = () => {
    //     setIsOpen(!Boolean(isOpen) ? 'open' : '');
    // }

    return (
        <div className='wrapper'>
            <div className={ `search ${isOpen}` }>
                <input
                    value={valueSearch}
                    onChange={handleChangeSearch}
                    placeholder="Buscar"
                    type='text'
                />
                <button
                    onClick={() => handleClickShowSearch()}
                    className={
                        `nav-button iconoBoton uil uil-${isOpen
                            ? "multiply"
                            : "search"}`
                    }
                    style={{
                        width: '50px'
                    }}
                >
                    <img src={isOpen === '' ? Buscar : Eliminar} alt="" />
                </button>
            </div>
            <div className={ `items ${isOpen}` }></div>
        </div>
    )
}
