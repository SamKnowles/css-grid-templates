import React from 'react';
import {Switch, Route} from 'react-router-dom';
import GridElements from './GridElements';
import GridColumns from './GridColumns';
import GridLayout from './GridLayout';
import GridRows from './GridRows';
import GridGaps from './GridGaps';
import GridGapPlus from './GridGapPlus';
import GridLines from './GridLines';
import GridLinesPlus from './GridLinesPlus';
import GridContainer from './GridContainer';
import Nav from './Nav';
import '../Styles/Nav.css';
import '../Styles/GridLines.css';
import '../Styles/GridLinesPlus.css';
import '../Styles/GridElements.css';
import '../Styles/GridColumns.css';
import '../Styles/GridLayout.css';
import '../Styles/GridRows.css';
import '../Styles/GridGaps.css';
import '../Styles/GridGapPlus.css';
import '../Styles/GridContainer.css';

function App() {
    return (
        <div className='app-wrapper'>
            <Nav />
            <Switch>
                <Route exact path='/' component={GridLayout}></Route>
                <Route path='/gridelements' component={GridElements}></Route>
                <Route path='/gridcolumns' component={GridColumns}></Route>
                <Route path='/gridrows' component={GridRows}></Route>
                <Route path='/gridgaps' component={GridGaps}></Route>
                <Route path='/gridgapplus' component={GridGapPlus}></Route>
                <Route path='/gridlines' component={GridLines}></Route>
                <Route path='/gridlinesplus' component={GridLinesPlus}></Route>
                <Route path='/gridcontainer' component={GridContainer}></Route>
            </Switch>
        </div>
    )
}

export default App;
