import React from 'react';
import './App.css';
import CustomizedTables from "./components/productTable/productsTable";
import Search from "./components/productTable/search";

function App() {

    return (
        <div>
            <CustomizedTables/>
            <Search/>
        </div>
    );
}

export default App;
