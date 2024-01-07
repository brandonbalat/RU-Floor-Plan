import React, { Component } from "react"
import { getProductColor } from "../../utils/getProductColor"
import { v4 as uuidv4 } from 'uuid'

class GridQuadrant extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedDiodeCells: [],
            selectedUnmaskCells: [],
            toggle: 0
        }
        this.generateRow = this.generateRow.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    // componentDidUpdate(prevProps, prevState) {
    //     const { selectedUnmaskCells, toggle } = this.state
    //     const prevSelectedUnmaskCells = prevState.selectedUnmaskCells

    //     if (prevSelectedUnmaskCells === null && selectedUnmaskCells !== null || prevSelectedUnmaskCells !== selectedUnmaskCells) {
    //         this.setState({ toggle: toggle + 1 })
    //     }
    // }

    handleClick(event, cellType) {
        const { selectedDiodeCells, selectedUnmaskCells, setDiodes, setUnmasks } = this.props
        var id = event.target.id.split('-')[2] //Id of the cell we clicked on

        //Handle Diode Cell CLick Event
        if (cellType === 'D') {
            //If id is not currently in state, add it (Highlight case)
            if (!(selectedDiodeCells.includes(id))) {
                //this.setState({ selectedDiodeCells: [...selectedDiodeCells, id] })
                setDiodes(id, 'A')
            } else {
                //If id is already in state remove it (Un-highlight case)
                //this.setState({ selectedDiodeCells: selectedDiodeCells.filter((selectedId) => selectedId !== id) })
                console.log("AM I HERE?")
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
                //this.setState({ selectedUnmaskCells: [...new Set([...selectedUnmaskCells, ...sameProducts])] })
                setUnmasks(sameProducts, 'A')

            } else {
                //Un-highlight case
                //If id already in state, remove all associated IDs from state
                //this.setState({ selectedUnmaskCells: selectedUnmaskCells.filter((selectedId) => !sameProducts.includes(selectedId)) })
                setUnmasks(sameProducts, 'D')
            }
        }



    }

    generateRow(productData, quadType) {
        const { selectedDiodeCells, selectedUnmaskCells } = this.props

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
        const { data, quadType } = this.props

        var quadData = []

        if (quadType === '1') {
            quadData = data.slice(0, 20)
        } else if (quadType === '2') {
            quadData = data.slice(20, 40)
        } else if (quadType === '3') {
            quadData = data.slice(40, 60)
        } else {
            quadData = data.slice(60, 80)
        }

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