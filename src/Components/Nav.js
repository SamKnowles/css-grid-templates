import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <div className='nav-container1'>
                <div className='nav-link'><Link className='nav-item' to='/'>Grid Layout</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/gridelements'>Grid Elements</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/gridcolumns'>Grid Columns</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/gridrows'>Grid Rows</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/gridgaps'>Grid Gaps</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/gridgapplus'>Grid Gap Plus</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/gridlines'>Grid Lines</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/gridlinesplus'>Grid Lines Plus</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/gridcontainer'>Grid Container</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/gridtemplatecolumns'>Grid Template Columns</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/gridtemplatecolumnsplus'>Grid Template Columns Plus</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/gridtemplaterows'>Grid Template Rows</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/aligncontentcenter'>Align Content Center</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/aligncontentspaceevenly'>Align Content Space Evenly</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/aligncontentspacearound'>Align Content Space Around</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/aligncontentspacebetween'>Align Content Space Between</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/aligncontentstart'>Align Content Start</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/aligncontentend'>Align Content End</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/gridarea'>Grid Area Property</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/gridareaone'>Grid Area One</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/naminggriditems'>Naming Grid Items</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/naminggriditemsone'>Naming Grid Items One</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/naminggriditemstwo'>Naming Grid Items Two</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/naminggriditemsthree'>Naming Grid Items Three</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/gridorderofitems'>The Order of the Items</Link></div>
                <div className='nav-link'><Link className='nav-item' to='/gridorderofitemsone'>The Order of the Items One</Link></div>
            </div>
            <div className='nav-container2'>
                <div className='nav-link'><Link className='nav-item-justify' to='/justifycontentspaceevenly'>Justify Content Space Evenly</Link></div>
                <div className='nav-link'><Link className='nav-item-justify' to='/justifycontentspacearound'>Justify Content Space Around</Link></div>
                <div className='nav-link'><Link className='nav-item-justify' to='/justifycontentspacebetween'>Justify Content Space Between</Link></div>
                <div className='nav-link'><Link className='nav-item-justify' to='/justifycontentcenter'>Justify Content Center</Link></div>
                <div className='nav-link'><Link className='nav-item-justify' to='/justifycontentstart'>Justify Content Start</Link></div>
            </div>
            <div className='nav-container3'>
                <div className='nav-link'><Link className='nav-grid-item' to='/griditem'>Grid Item</Link></div>
                <div className='nav-link'><Link className='nav-grid-item' to='/griditemcolumnone'>Grid Column Items 1</Link></div>
                <div className='nav-link'><Link className='nav-grid-item' to='/griditemcolumntwo'>Grid Column Items 2</Link></div>
                <div className='nav-link'><Link className='nav-grid-item' to='/griditemcolumnthree'>Grid Column Items 3</Link></div>
                <div className='nav-link'><Link className='nav-grid-item' to='/griditemrow'>Grid Row Items 1</Link></div>
                <div className='nav-link'><Link className='nav-grid-item' to='/griditemrowone'>Grid Row Items 2</Link></div>
            </div>
        </div>
    )
}
export default Nav
