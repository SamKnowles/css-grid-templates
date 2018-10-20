import React from 'react'

function JustifyContentSpaceEvenly() {
    return (
        <div>The justify-content property is used to align the whole grid inside the container.
        Note: The grid's total width has to be less than the container's width for the justify-content property to have any effect.
 Use the justify-content property to align the grid inside the container.
The value "space-evenly" will give the columns equal amount of space between, and around them:
        <div class="grid-container13">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
        </div>
    )
}

export default JustifyContentSpaceEvenly
