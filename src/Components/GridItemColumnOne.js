import React from 'react'

function GridItemColumnOne() {
    return (
        <div>The grid-column property defines on which column(s) to place an item.

You define where the item will start, and where the item will end. Note: The grid-column property is a shorthand property for the grid-column-start and the grid-column-end properties.

To place an item, you can refer to line numbers, or use the keyword "span" to define how many columns the item will span. Use the grid-column property to specify where to place an item.

Item1 will start on column-line 1 and span 3 columns:
<div class="grid-container31">
                <div class="item41">1</div>
                <div class="item42">2</div>
                <div class="item43">3</div>
                <div class="item44">4</div>
                <div class="item45">5</div>
                <div class="item46">6</div>
                <div class="item47">7</div>
                <div class="item48">8</div>
                <div class="item49">9</div>
                <div class="item50">10</div>
                <div class="item51">11</div>
                <div class="item52">12</div>
                <div class="item53">13</div>
                <div class="item54">14</div>
                <div class="item55">15</div>
                <div class="item56">16</div>
            </div>
        </div>
    )
}

export default GridItemColumnOne
