import React, { PureComponent } from "react"
import './LocalStyles.css';


class GridNumberColumn extends PureComponent {

    //Generic component to easily reuse grid column for each quadrant
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