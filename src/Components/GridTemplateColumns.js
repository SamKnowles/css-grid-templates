import React from 'react'

function GridTemplateColumns() {
    return (
        <div> The grid-template-columns property defines the number of columns in your grid layout, and it can define the width of each column.

The value is a space-separated-list, where each value defines the length of the respective column.

If you want your grid layout to contain 4 columns, specify the width of the 4 columns, or "auto" if all columns should have the same width. You can use the grid-template-columns property to specify the number of columns in your grid layout.
        <div class="grid-container10">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
            </div>
        </div>
    )
}

export default GridTemplateColumns
