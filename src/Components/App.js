import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GridElements from './GridElements';
import GridColumns from './GridColumns';
import GridLayout from './GridLayout';
import GridRows from './GridRows';
import GridGaps from './GridGaps';
import GridGapPlus from './GridGapPlus';
import GridLines from './GridLines';
import GridLinesPlus from './GridLinesPlus';
import GridContainer from './GridContainer';
import GridTemplateColumns from './GridTemplateColumns';
import GridTemplateColumnsPlus from './GridTemplateColumnsPlus';
import GridTemplateRows from './GridTemplateRows';
import JustifyContentSpaceEvenly from './JustifyContentSpaceEvenly';
import JustifyContentSpaceAround from './JustifyContentSpaceAround';
import JustifyContentSpaceBetween from './JustifyContentSpaceBetween';
import JustifyContentCenter from './JustifyContentCenter';
import JustifyContentStart from './JustifyContentStart';
import JustifyContentEnd from './JustifyContentEnd';
import AlignContentCenter from './AlignContentCenter';
import AlignContentSpaceEvenly from './AlignContentSpaceEvenly';
import AlignContentSpaceAround from './AlignContentSpaceAround';
import AlignContentSpaceBetween from './AlignContentSpaceBetween';
import AlignContentStart from './AlignContentStart';
import AlignContentEnd from './AlignContentEnd';
import GridItem from './GridItem';
import GridItemColumnOne from './GridItemColumnOne';
import GridItemColumnTwo from './GridItemColumnTwo';
import GridItemColumnThree from './GridItemColumnThree';
import GridItemRow from './GridItemRow';
import GridItemRowOne from './GridItemRowOne';
import GridArea from './GridArea';
import GridAreaOne from './GridAreaOne';
import NamingGridItems from './NamingGridItems';
import NamingGridItemsOne from './NamingGridItemsOne';
import NamingGridItemsTwo from './NamingGridItemsTwo';
import NamingGridItemsThree from './NamingGridItemsThree';
import GridOrderOfItems from './GridOrderOfItems';
import GridOrderOfItemsOne from './GridOrderOfItemsOne';
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
import '../Styles/GridTemplateColumns.css';
import '../Styles/GridTemplateColumnsPlus.css';
import '../Styles/GridTemplateRows.css';
import '../Styles/GridTemplateRows.css';
import '../Styles/JustifyContentSpaceEvenly.css';
import '../Styles/JustifyContentSpaceAround.css';
import '../Styles/JustifyContentSpaceBetween.css';
import '../Styles/JustifyContentCenter.css';
import '../Styles/JustifyContentStart.css';
import '../Styles/JustifyContentEnd.css';
import '../Styles/AlignContentCenter.css';
import '../Styles/AlignContentSpaceEvenly.css';
import '../Styles/AlignContentSpaceAround.css';
import '../Styles/AlignContentSpaceBetween.css';
import '../Styles/AlignContentStart.css';
import '../Styles/AlignContentEnd.css';
import '../Styles/GridItem.css';
import '../Styles/GridItemColumnOne.css';
import '../Styles/GridItemColumnTwo.css';
import '../Styles/GridItemColumnThree.css';
import '../Styles/GridItemRow.css';
import '../Styles/GridItemRowOne.css';
import '../Styles/GridArea.css';
import '../Styles/GridAreaOne.css';
import '../Styles/NamingGridItems.css';
import '../Styles/NamingGridItemsOne.css';
import '../Styles/NamingGridItemsTwo.css';
import '../Styles/NamingGridItemsThree.css';
import '../Styles/GridOrderOfItems.css';
import '../Styles/GridOrderOfItemsOne.css'


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
                <Route path='/gridtemplatecolumns' component={GridTemplateColumns}></Route>
                <Route path='/gridtemplatecolumnsplus' component={GridTemplateColumnsPlus}></Route>
                <Route path='/gridtemplaterows' component={GridTemplateRows}></Route>
                <Route path='/justifycontentspaceevenly' component={JustifyContentSpaceEvenly}></Route>
                <Route path='/justifycontentspacearound' component={JustifyContentSpaceAround}></Route>
                <Route path='/justifycontentspacebetween' component={JustifyContentSpaceBetween}></Route>
                <Route path='/justifycontentcenter' component={JustifyContentCenter}></Route>
                <Route path='/justifycontentstart' component={JustifyContentStart}></Route>
                <Route path='/justifycontentend' component={JustifyContentEnd}></Route>
                <Route path='/aligncontentcenter' component={AlignContentCenter}></Route>
                <Route path='/aligncontentspaceevenly' component={AlignContentSpaceEvenly}></Route>
                <Route path='/aligncontentspacearound' component={AlignContentSpaceAround}></Route>
                <Route path='/aligncontentspacebetween' component={AlignContentSpaceBetween}></Route>
                <Route path='/aligncontentstart' component={AlignContentStart}></Route>
                <Route path='/aligncontentend' component={AlignContentEnd}></Route>
                <Route path='/griditem' component={GridItem}></Route>
                <Route path='/griditemcolumnone' component={GridItemColumnOne} />
                <Route path='/griditemcolumntwo' component={GridItemColumnTwo} />
                <Route path='/griditemcolumnthree' component={GridItemColumnThree} />
                <Route path='/griditemrow' component={GridItemRow} />
                <Route path='/griditemrowone' component={GridItemRowOne} />
                <Route path='/gridarea' component={GridArea} />
                <Route path='/gridareaone' component={GridAreaOne} />
                <Route path='/naminggriditems' component={NamingGridItems} />
                <Route path='/naminggriditemsone' component={NamingGridItemsOne} />
                <Route path='/naminggriditemstwo' component={NamingGridItemsTwo} />
                <Route path='/naminggriditemsthree' component={NamingGridItemsThree} />
                <Route path='/gridorderofitems' component={GridOrderOfItems} />
                <Route path='/gridorderofitemsone' component={GridOrderOfItemsOne}/>
            </Switch>
        </div>
    )
}

export default App;
