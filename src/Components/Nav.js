import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='nav-container'>
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
            <div className='nav-link'><Link className='nav-item-justify' to='/justifycontentspaceevenly'>Justify Content Space Evenly</Link></div>
            <div className='nav-link'><Link className='nav-item-justify' to='/justifycontentspacearound'>Justify Content Space Around</Link></div>
            <div className='nav-link'><Link className='nav-item-justify' to='/justifycontentspacebetween'>Justify Content Space Between</Link></div>
            <div className='nav-link'><Link className='nav-item-justify' to='/justifycontentcenter'>Justify Content Center</Link></div>
            <div className='nav-link'><Link className='nav-item-justify' to='/justifycontentstart'>Justify Content Start</Link></div>
            <div className='nav-link'><Link className='nav-item' to='/aligncontentcenter'>Align Content Center</Link></div>
            <div className='nav-link'><Link className='nav-item' to='/aligncontentspaceevenly'>Align Content Space Evenly</Link></div>
            <div className='nav-link'><Link className='nav-item' to='/aligncontentspacearound'>Align Content Space Around</Link></div>
            <div className='nav-link'><Link className='nav-item' to='/aligncontentspacebetween'>Align Content Space Between</Link></div>
            <div className='nav-link'><Link className='nav-item' to='/aligncontentstart'>Align Content Start</Link></div>
            <div className='nav-link'><Link className='nav-item' to='/aligncontentend'>Align Content End</Link></div>
            <div className='nav-link'><Link className='nav-item' to='/griditem'>Grid Item</Link></div>
            <div className='nav-link'><Link className='nav-item' to='/griditemcolumnone'>Grid Column Items 1</Link></div>
            <div className='nav-link'><Link className='nav-item' to='/griditemcolumntwo'>Grid Column Items 2</Link></div>
            <div className='nav-link'><Link className='nav-item' to='/griditemcolumnthree'>Grid Colun Items 3</Link></div>
            <div className='nav-link'><Link className='nav-item' to='/griditemcolumnone'>Justify Content End</Link></div>
            <div className='nav-link'><Link className='nav-item' to='/griditemcolumnone'>Justify Content End</Link></div>
            <div className='nav-link'><Link className='nav-item' to='/griditemcolumnone'>Justify Content End</Link></div>
            <div className='nav-link'><Link className='nav-item' to='/griditemcolumnone'>Justify Content End</Link></div>
            <div className='nav-link'><Link className='nav-item' to='/griditemcolumnone'>Justify Content End</Link></div>

        </div>
    )
}
export default Nav
