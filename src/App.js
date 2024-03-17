import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
const Router= createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {path:"/",element:<Home/>},
    {path:"home",element:<Home/>},
    {path:"*",element:<NotFound/>},
  ]}
])

function App() {
  return <>
  <RouterProvider router={Router}/>
  </>;
}

export default App;
