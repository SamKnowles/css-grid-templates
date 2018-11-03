import React from 'react'

function NamingGridItems() {
    return (
        <div>The grid-area property can also be used to assign names to grid items. Named grid items can be referred to by the grid-template-areas property of the grid container. Each row is defined by apostrophes (' ').  The columns in each row is defined inside the apostrophes, separated by a space.

Note: A period sign represents a grid item with no name. You can use the grid-area property to name grid items.

You can refer to the name when you set up the grid layout, by using the grid-template-areas property on the grid container.

Item1, is called "myArea" and will take up the place of all five columns:
<div class="grid-container95">
                <div class="ite4m1">1</div>
                <div class="ite4m2">2</div>
                <div class="ite4m3">3</div>
                <div class="ite4m4">4</div>
                <div class="ite4m5">5</div>
                <div class="ite4m6">6</div>
            </div>
        </div>
    )
}

export default NamingGridItems
