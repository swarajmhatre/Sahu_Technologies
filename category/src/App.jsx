import React from "react";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
    return (<div><Topbar></Topbar><Navbar></Navbar><Sidebar></Sidebar><Footer></Footer></div>)
}

export default App;