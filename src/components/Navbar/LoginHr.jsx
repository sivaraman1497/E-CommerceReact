import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';

export default function LoginHr()
{
    return (
        <BrowserRouter>
            <Link to="/login">Login</Link>

            <Routes>
                <Route path="/login" element={''}/>
            </Routes>
            <Outlet/>
        </BrowserRouter>
    )
}