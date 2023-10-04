import React from 'react';
import Home from './Home';
import LanguageTranslater from './LanguageTranslater';
import TextForm from './TextForm';

import ErrorElement from './ErrorElement';
import {
  BrowserRouter as Router,
  Routes,
  Route,


  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

function App(){
    const routes=createBrowserRouter([
        {index:true, element:<Home />, errorElement:<ErrorElement/>},
        {path:'/texteditor' ,
        element:< TextForm/>,
        errorElement:<ErrorElement />,
        
    },
    {path:"/translator" ,element:<LanguageTranslater />}
        
    ])
    return (
        <>
        <RouterProvider router={routes}/>
        </>


        // <>
        // <Router>
        //     <Routes>
        //         <Route exact path='/' element={<Home/>} />
        //         <Route path='/texteditor' element={<TextForm />} />
        //         <Route path="/translator" element={<LanguageTranslater />} />
        //     </Routes>
        // </Router>
        // </>
    )
};

export default App;