import React, { Component } from "react"
import { getProductColor } from "../../utils/getProductColor"
import GridQuadrant from "../GridQuadrant"
import { v4 as uuidv4 } from 'uuid'
import MiddleColumn from "../MiddleColumn"

class CombinedGrid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedDiodeCells: [],
            selectedUnmaskCells: [],
        }
    }

    //Call back to set state
    updateSelectedDiodeCells = (cell, operation) => {
        const { selectedDiodeCells } = this.state

        if (operation === 'D') {
            console.log("AM I HERE", cell)
            this.setState({ selectedDiodeCells: selectedDiodeCells.filter((selectedId) => selectedId !== cell) })
        } else {

            this.setState({ selectedDiodeCells: [...selectedDiodeCells, cell] })
        }
    }

    updateSelectedUnmaskCells = (listOfCells, operation) => {
        const { selectedUnmaskCells } = this.state
        if (operation === 'D') {
            this.setState({ selectedUnmaskCells: selectedUnmaskCells.filter((id) => !listOfCells.includes(id)) })
        } else {
            this.setState({ selectedUnmaskCells: [...selectedUnmaskCells, ...listOfCells] })
        }
    }


    render() {
        const { data } = this.props
        const { selectedDiodeCells, selectedUnmaskCells } = this.state

        return (
            <div className='wrapper'>
                <div className="Floor-Plan">
                    <div className='top-header'>
                        TAPE-IN DB VIEW
                    </div>
                    <div className='middle-headers'>
                        <div className='grid-1'> Grid </div>
                        <div className='diode-1'> Diode </div>
                        <div className='unmask-1'> Unmask</div>
                        <div className='ru-num-1'> RU# </div>
                        <div className='seat-uuid'> Seat UUID</div>
                        <div className='ru-num-2'> RU# </div>
                        <div className='unmask-2'> Unmask</div>
                        <div className='diode-2'> Diode </div>
                        <div className='grid-2'> Grid </div>
                    </div>
                    <div className='quad-wrapper'>
                        <div className='left-quads-wrapper'>
                            <GridQuadrant data={data} quadType='1' selectedDiodeCells={selectedDiodeCells ? selectedDiodeCells : []} selectedUnmaskCells={selectedUnmaskCells} setDiodes={this.updateSelectedDiodeCells} setUnmasks={this.updateSelectedUnmaskCells} />
                            <div className="midhalf">MIDHALF</div>
                            <GridQuadrant data={data} quadType='2' selectedDiodeCells={selectedDiodeCells ? selectedDiodeCells : []} selectedUnmaskCells={selectedUnmaskCells} setDiodes={this.updateSelectedDiodeCells} setUnmasks={this.updateSelectedUnmaskCells} />
                        </div>
                        <div className="middle-wrapper">
                            <MiddleColumn rowCount={20} location='top' />
                            <MiddleColumn rowCount={20} location='bottom' />
                        </div>
                        <div className='right-quads-wrapper'>
                            <GridQuadrant data={data} quadType='3' selectedDiodeCells={selectedDiodeCells ? selectedDiodeCells : []} selectedUnmaskCells={selectedUnmaskCells} setDiodes={this.updateSelectedDiodeCells} setUnmasks={this.updateSelectedUnmaskCells} />
                            <GridQuadrant data={data} quadType='4' selectedDiodeCells={selectedDiodeCells ? selectedDiodeCells : []} selectedUnmaskCells={selectedUnmaskCells} setDiodes={this.updateSelectedDiodeCells} setUnmasks={this.updateSelectedUnmaskCells} />
                        </div>
                    </div>
                </div>

            </div>

        )

    }
}
export default CombinedGrid