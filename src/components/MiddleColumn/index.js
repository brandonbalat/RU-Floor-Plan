import React, { PureComponent } from "react"

class MiddleColumn extends PureComponent {

    //Generic component to generate blank table column 20 rows long for top and bottom half
    render() {
        const { rowCount, location } = this.props
        var iteratorArray = [...Array(rowCount)] //This just creates an empty array of 20 elements to iterate over
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