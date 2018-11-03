import React from 'react'

function NamingGridItemsTwo() {
    return (
        <div> You can use the grid-area property to name grid items.

You can refer to the name when you set up the grid layout, by using the grid-template-areas property on the grid container.

Item1, is called "myArea" and will take up the place of two columns (out of five), and will span two rows:
<div class="grid-container66">
  <div class="ite7m1">1</div>
  <div class="ite7m2">2</div>
  <div class="ite7m3">3</div>  
  <div class="ite7m4">4</div>
  <div class="ite7m5">5</div>
  <div class="ite7m6">6</div>
  <div class="ite7m7">7</div>
</div>
        </div>
    )
}

export default NamingGridItemsTwo
