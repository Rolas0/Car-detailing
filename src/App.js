import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';

const rotuers = createBrowserRouter([
    {
        path: '/home',
        element: <HomePage />,
        children: [{}],
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
