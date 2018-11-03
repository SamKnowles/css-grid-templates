import React from 'react'

function GridItemRow() {
    return (
        <div>The grid-row property defines on which row to place an item.

You define where the item will start, and where the item will end. Note: The grid-row property is a shorthand property for the grid-row-start and the grid-row-end properties.

To place an item, you can refer to line numbers, or use the keyword "span" to define how many rows the item will span: Use the grid-row property to specify where to place an item.

Item1 will start on row-line 1 and end on row-line 4:
<div class="grid-container61">
  <div class="item101">1</div>
  <div class="item102">2</div>
  <div class="item103">3</div>  
  <div class="item104">4</div>
  <div class="item105">5</div>
  <div class="item106">6</div>
  <div class="item107">7</div>
  <div class="item108">8</div>  
  <div class="item109">9</div>
  <div class="item110">10</div>
  <div class="item111">11</div>
  <div class="item112">12</div>
  <div class="item113">13</div>
  <div class="item114">14</div>
  <div class="item115">15</div>
  <div class="item116">16</div>
</div>
        </div>
    )
}

export default GridItemRow
