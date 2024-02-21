import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/Home/MainPage';
import DetailingSection from './components/DetailingSection/DetailingSection';
import Prices from './components/Prices/Prices';
import ServicesSection from './components/ServicesSection/ServicesSection';
import Contacts from './components/Contacts/Contacts';

const rotuers = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        children: [
            // { path: '/prices', element: <Prices /> },
            // { path: '/services', element: <ServicesSection /> },
        ],
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
