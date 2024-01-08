import React, { Component } from "react"
import GridQuadrant from "../GridQuadrant"
import MiddleColumn from "../MiddleColumn"
import GridNumberColumn from "../GridNumberColumn"
import './LocalStyles.css';

class CombinedGrid extends Component {
    constructor(props) {
        super(props)

        //Iniital state
        this.state = {
            selectedDiodeCells: [],
            selectedUnmaskCells: [],
        }
    }

    //SET STATE CALLBACKS
    //If diode cell clicked 
    updateSelectedDiodeCells = (cell, operation) => {
        const { selectedDiodeCells } = this.state

        if (operation === 'D') {
            //If delete, remove from state
            this.setState({ selectedDiodeCells: selectedDiodeCells.filter((selectedId) => selectedId !== cell) })
        } else {
            //Else, "A" for add , add cell id to state
            this.setState({ selectedDiodeCells: [...selectedDiodeCells, cell] })
        }
    }

    //If unmask clicked  
    updateSelectedUnmaskCells = (listOfCells, operation) => {
        const { selectedUnmaskCells } = this.state
        if (operation === 'D') {
            //If delete remove multiple ids from the state likely, to do this I filtered the state array for matches
            this.setState({ selectedUnmaskCells: selectedUnmaskCells.filter((id) => !listOfCells.includes(id)) })
        } else {
            //If add concat the new values with the existing selected values
            this.setState({ selectedUnmaskCells: [...selectedUnmaskCells, ...listOfCells] })
        }
    }


    render() {
        //Component is passed in the sorted data set as a prop
        const { data } = this.props
        // State vars
        const { selectedDiodeCells, selectedUnmaskCells } = this.state

        if (!data) {
            return (
                <div className="Error">
                    Invalid Dataset: Please check the console tab for more info.
                </div>

            )
        }

        /**
         * Structure: All headers are created seperately from their created grids
         * Grid number columns are also created seperately, since they are reusable made them a component that takes grid number as prop
         * Grid Quadrant Component: Generates 1 quadrants of the grid.
         * Props given: sorted dataset, quad type 1-4, state vars selectedDiodeCells and selectedUnmaskCells, both call back functions to update state
         * This component needs to manage state to ensure all quadrants are aware of a cell click event in the case of unmask.
         */
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
                            <GridNumberColumn gridNum={'1'} />
                            <GridQuadrant data={data} quadType='1' selectedDiodeCells={selectedDiodeCells} selectedUnmaskCells={selectedUnmaskCells} setDiodes={this.updateSelectedDiodeCells} setUnmasks={this.updateSelectedUnmaskCells} />
                            <div className="midhalf">MIDHALF</div>
                            <GridNumberColumn gridNum={'2'} />
                            <GridQuadrant data={data} quadType='2' selectedDiodeCells={selectedDiodeCells} selectedUnmaskCells={selectedUnmaskCells} setDiodes={this.updateSelectedDiodeCells} setUnmasks={this.updateSelectedUnmaskCells} />
                        </div>
                        <div className="middle-wrapper">
                            <MiddleColumn rowCount={20} location='top' />
                            <MiddleColumn rowCount={20} location='bottom' />
                        </div>
                        <div className='right-quads-wrapper'>
                            <GridNumberColumn gridNum={'3'} />
                            <GridQuadrant data={data} quadType='3' selectedDiodeCells={selectedDiodeCells ? selectedDiodeCells : []} selectedUnmaskCells={selectedUnmaskCells} setDiodes={this.updateSelectedDiodeCells} setUnmasks={this.updateSelectedUnmaskCells} />
                            <GridNumberColumn gridNum={'4'} />
                            <GridQuadrant data={data} quadType='4' selectedDiodeCells={selectedDiodeCells ? selectedDiodeCells : []} selectedUnmaskCells={selectedUnmaskCells} setDiodes={this.updateSelectedDiodeCells} setUnmasks={this.updateSelectedUnmaskCells} />
                            <div className="io-column">I/O's</div>
                            <div className="misc-block">MISC Block</div>
                        </div>
                    </div>
                </div>

            </div>

        )

    }
}
export default CombinedGrid