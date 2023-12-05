import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/Home/MainPage';
import DetailingSection from './components/DetailingSection/DetailingSection';

const rotuers = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        children: [
            {
                // path: 'repair/:clientId',
                // element: <DetailingSection />,
            },
        ],
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={rotuers} />
        </div>
    );
}

export default App;
