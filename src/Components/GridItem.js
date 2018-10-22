import React from 'react'

function GridItem() {
    return (
        <div>A grid container contains grid items.

By default, a container has one grid item for each column, in each row, but you can style the grid items so that they will span multiple columns and/or rows.

Direct child elements(s) of the grid container automatically becomes grid items.

Item 1, 2, and 5 are set to span multiple columns or rows.
        <div class="grid-container30">
  <div class="grid-item30 item31">1</div>
  <div class="grid-item30 item32">2</div>
  <div class="grid-item30 item33">3</div>  
  <div class="grid-item30 item34">4</div>
  <div class="grid-item30 item35">5</div>
</div>
        </div>
    )
}

export default GridItem
