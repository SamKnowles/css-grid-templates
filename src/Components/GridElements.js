import React from 'react'

function GridElements() {
    return (
        <div>A grid layout consists of a parent element, with one or more child elements.
        A Grid Layout must have a parent element with the display property set to grid or inline-grid.
        Direct child element(s) of the grid container automatically becomes grid items.
        <div className="grid-container">
                <div className="grid-item">1</div>
                <div className="grid-item">2</div>
                <div className="grid-item">3</div>
                <div className="grid-item">4</div>
                <div className="grid-item">5</div>
                <div className="grid-item">6</div>
                <div className="grid-item">7</div>
                <div className="grid-item">8</div>
                <div className="grid-item">9</div>
            </div>
        </div>
    )
}

export default GridElements
