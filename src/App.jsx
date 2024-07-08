import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Product from "./pages/product/Product";
import Maghaleh from "./pages/maghaleh/Maghaleh";
import Maghaleha from "./pages/maghaleha/Maghaleha";
import Contact from "./pages/contact/Contact";
import Notfound from "./pages/notfound/Notfound";
import Signup from "./pages/signup/Signup";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

function App(){

    const[isLogin, setIsLogin] = useState(false);

    return(
        <div>
            <AppContext.Provider value={{isLogin, setIsLogin}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/product" element={<Product/>}/>
                    <Route path="/maghaleha" element={<Maghaleha/>}/>
                    <Route path="/maghaleh/:id" element={<Maghaleh/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<Notfound/>}/>
                </Routes>      
            </AppContext.Provider>
        </div>
    )
}

export default App;