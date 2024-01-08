import React, { Component } from "react"
import { getProductColor } from "../../utils/getProductColor"
import './LocalStyles.css';

class GridQuadrant extends Component {
    constructor(props) {
        super(props)

        //Initial state
        this.state = {
            selectedDiodeCells: [],
            selectedUnmaskCells: [],
        }
        this.generateRow = this.generateRow.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    //Handle click event on either cell type
    handleClick(event, cellType) {
        const { selectedDiodeCells, selectedUnmaskCells, setDiodes, setUnmasks } = this.props
        var id = event.target.id.split('-')[2] //Id of the cell we clicked on

        //Handle Diode Cell CLick Event
        if (cellType === 'D') {
            //If id is not currently in state, add it (Highlight case)
            if (!(selectedDiodeCells.includes(id))) {
                setDiodes(id, 'A')
            } else {
                //If id is already in state remove it (Un-highlight case)
                setDiodes(id, 'D')

            }
        } else {
            //Handle Unmask Cell Click Event
            var allProducts = document.getElementsByClassName('product-name-cell') //Gets every single product column on all 4 quadrants
            var selectedProduct = allProducts[Number(id)].innerHTML // Lookup the product we clicked on based on the id
            var sameProducts = [] //Initialize used to write to state later
            //For every product on all 4 quadrants
            for (var row in allProducts) {
                //If we found a duplicate product name, add its ID to sameProducts array
                if (allProducts[row].innerHTML === selectedProduct) {
                    sameProducts.push(row)
                }
            }

            //Highlight Case
            if (!(selectedUnmaskCells.includes(id))) {
                //If id is not in state...
                //Write the id's we found to state for highlighting
                setUnmasks(sameProducts, 'A') //Give back to call back

            } else {
                //Un-highlight case
                //If id already in state, remove all associated IDs from state
                setUnmasks(sameProducts, 'D') //Give back to callback
            }
        }



    }

    generateRow(productData, quadType) {
        //Generates each row of the quadrant
        const { selectedDiodeCells, selectedUnmaskCells } = this.props

        //If quad 1 or 2 generate quadrant with left header orientation
        //If state updates cell highlighting is handled by changing the classname below.
        if (quadType === '1' || quadType === '2') {
            return (
                <>
                    <td className={selectedDiodeCells.includes(productData.ru_num.toString()) ? 'diode-cell-highlighted' : 'diode-cell'} onClick={(event) => this.handleClick(event, 'D')} id={`diode-cell-${productData.ru_num}`} ></td>
                    <td className={selectedUnmaskCells.includes(productData.ru_num.toString()) ? 'unmask-cell-highlighted' : 'unmask-cell'} onClick={(event) => this.handleClick(event, 'U')} id={`unmask-cell-${productData.ru_num}`}></td>
                    <td className="ru-num-cell">{productData.ru_num}</td>
                    <td className="product-name-cell" style={{ backgroundColor: getProductColor(productData.product), color: getProductColor(productData.product) === 'black' ? 'white' : "black" }}>{productData.product}</td>
                </>
            )
        } else {
            //Else right quadrant orientation
            return (
                <>
                    <td className="product-name-cell" style={{ backgroundColor: getProductColor(productData.product), color: getProductColor(productData.product) === 'black' ? 'white' : "black" }}>{productData.product}</td>
                    <td className="ru-num-cell">{productData.ru_num}</td>
                    <td className={selectedUnmaskCells.includes(productData.ru_num.toString()) ? 'unmask-cell-highlighted' : 'unmask-cell'} onClick={(event) => this.handleClick(event, 'U')} id={`unmask-cell-${productData.ru_num}`}></td>
                    <td className={selectedDiodeCells.includes(productData.ru_num.toString()) ? 'diode-cell-highlighted' : 'diode-cell'} onClick={(event) => this.handleClick(event, 'D')} id={`unmask-cell-${productData.ru_num}`} ></td>

                </>
            )
        }
    }

    render() {
        //Props
        const { data, quadType } = this.props

        //Initialze array to hold data to display, based on quadType. Holds 20 elements per quad type
        var quadData = []

        //If 1 get the first 20 elements
        if (quadType === '1') {
            quadData = data.slice(0, 20)
        } else if (quadType === '2') {
            //If 2 get elements 20-40
            quadData = data.slice(20, 40)
        } else if (quadType === '3') {
            //If 3 get elements 40-60
            quadData = data.slice(40, 60)
        } else {
            //If 4 get elements 60-80
            quadData = data.slice(60, 80)
        }

        //Write table tags and loop through the data calling generateRow each iteration
        return (
            <div>
                <table className={`quad-${quadType}`} id={`quad-${quadType}`}>
                    {quadData.map((product) => {
                        return (
                            <tr key={`quad-${quadType}-row-${product.ru_num}`}>
                                {this.generateRow(product, quadType)}
                            </tr>

                        )
                    })}

                </table>
            </div >
        )
    }
}

export default GridQuadrant