import React from 'react'
import {Layer, Line} from 'react-konva'

export const Board = ({unit, size, rows}) => {
    
    let grid = []
    let stroke = 'grey'
    let strokeWidth = 10

    for (let i = 1; i < rows; i++){
        let position = unit * 1
        grid.push (
            <Line
                points={[position,0,position,size]}
                stroke={stroke}
                strokeWidth={strokeWidth}
                key={i+'v'}
            />
        )
    }

    return (
        <Layer>
            {grid}
        </Layer>
    )
}