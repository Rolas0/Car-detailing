import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/Home/MainPage';
import Prices from './components/Prices/Prices';
import Contacts from './components/Contacts/Contacts';

const rotuers = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/prices',
        element: <Prices />,
    },
    {
        path: '/contacts',
        element: <Contacts />,
    },
    {},
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={rotuers} />
        </div>
    );
}

export default App;
