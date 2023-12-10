import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EntryList, EntryForm } from '../pages';



export const RouterPage = () => {

    return (
        <>
            <Router>
                <Routes>
                    <Route exact path='/' element={ <EntryList />} />
                    <Route exact path='/register' element={ <EntryForm />} />
                </Routes>
            </Router>
        </>
    )
}