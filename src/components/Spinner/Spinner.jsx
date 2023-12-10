import '../../css/Spinner.css';

export const Spinner = ({ isOpenSpinner }) => {
    return (
        <>
            {
                !isOpenSpinner ?
                <div></div> :
                <div className='center'>
                    <div className='ring'></div>
                    <span className='loading'>Loading...</span>
                </div>
            }
        </>
    )
}
