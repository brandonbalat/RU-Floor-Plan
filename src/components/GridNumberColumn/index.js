import React, { Component } from "react"
import { getProductColor } from "../../utils/getProductColor"
import GridQuadrant from "../GridQuadrant"
import { v4 as uuidv4 } from 'uuid'
import './LocalStyles.css';


class GridNumberColumn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { gridNum } = this.props

        return (
            <div className={`grid-num-col-${gridNum}`}>
                {gridNum}
            </div>
        )

    }
}
export default GridNumberColumn