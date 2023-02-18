import './App.css';
import Dashboard from "./components/dashboard/Dashboard";
import {useEffect} from "react";

const App = () => {

    useEffect(() => {
        const handleContextmenu = e => {
            e.preventDefault()
        }
        document.addEventListener('contextmenu', handleContextmenu)
        return function cleanup() {
            document.removeEventListener('contextmenu', handleContextmenu)
        }
    }, [ ])

    return (
        <div className='App'>
         <Dashboard/>
        </div>
    );
}

export default App;
