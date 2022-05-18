import React from "react"
import "../src/styles.css"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import { Routes, Route } from "react-router-dom"

export default function App()   {



    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<Photos />}/>
                <Route exact path="/cart" element={<Cart />}/>
            </Routes> 
        </div>
    )
}