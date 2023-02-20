import { Routes, Route } from 'react-router-dom';
import Bar from './components/Bar/Bar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

const Main = () => {
    return(
        <>
        <Bar/>
            <br></br>
            <br></br>
            <br></br>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </>
    )
}

export default Main