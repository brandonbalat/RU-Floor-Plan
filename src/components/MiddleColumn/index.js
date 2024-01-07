import React, { Component } from "react"
import { getProductColor } from "../../utils/getProductColor"
import GridQuadrant from "../GridQuadrant"
import { v4 as uuidv4 } from 'uuid'

class MiddleColumn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { rowCount, location } = this.props
        var iteratorArray = [...Array(rowCount)]
        return (
            <div>
                <table className={`middle-row-${location}`}>
                    {iteratorArray.map((i) => {
                        return (
                            <tr>
                                <td>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )

    }
}
export default MiddleColumn