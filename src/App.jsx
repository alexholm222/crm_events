import s from './App.module.scss';
import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//api
import { getProfile } from './api/Api';
//slice
import { setSearchQuery } from './redux/filters/slice';
//components
import List from './pages/List/List';






const App = () => {




    return (
        <div id='scrollableDiv' className={s.root}>
            <Routes>
                <Route path='/'
                    element={<List />}
                />

            </Routes>
        </div>

    )
}

export default App;