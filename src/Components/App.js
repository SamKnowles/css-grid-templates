import React from 'react';
import GridElements from'./GridElements';
import GridColumns from './GridColumns';
import GridLayout from './GridLayout';
import GridRows from './GridRows';
import GridGaps from './GridGaps';
import GridGapPlus from './GridGapPlus';
import GridLines from './GridLines';
import GridLinesPlus from './GridLinesPlus';
import '../Styles/GridLines.css';
import '../Styles/GridLinesPlus.css';
import '../Styles/GridElements.css';
import '../Styles/GridColumns.css';
import '../Styles/GridLayout.css';
import '../Styles/GridRows.css';
import '../Styles/GridGaps.css';
import '../Styles/GridGapPlus.css';

function App() {
    return (
        <div>
            <GridLayout />
            <GridElements />
            <GridColumns />    
            <GridRows />
            <GridGaps />
            <GridGapPlus />
            <GridLines />
            <GridLinesPlus />
        </div> 
    )
}

export default App;
