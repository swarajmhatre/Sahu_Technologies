import React from "react";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
    return (<div><Navbar></Navbar><Topbar></Topbar><Sidebar></Sidebar><Footer></Footer></div>)
}

export default App;