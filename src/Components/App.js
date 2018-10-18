import React from 'react';
import ThreeByThree from'./ThreeByThree';
import GridColumns from './GridColumns'
import GridLayout from './GridLayout'
import '../Styles/ThreeByThree.css';
import '../Styles/GridColumns.css';
import '../Styles/GridLayout.css';

function App() {
    return (
        <div>
            <ThreeByThree />
            <GridColumns />
            <GridLayout />
        </div> 
    )
}

export default App;
