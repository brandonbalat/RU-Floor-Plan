import { getProductColor } from "../../utils/getProductColor"

const generateRow = (product, index, quadType) => {
    if (quadType === '1' || quadType === '2') {
        return (
            <>
                <td className={`diode-cell`}></td>
                <td className={`unmask-cell`}></td>
                <td className="ru-num-cell">{index}</td>
                <td className="product-name-cell" style={{ backgroundColor: getProductColor(product) }}>{product}</td>
            </>
        )
    }

}

function GridQuadrant(props) {
    var data = props.data //Get the formatted data
    var quadType = props.quadType // Specify which quandrant we want to create 1-4

    if (quadType === '1') {
        data = data.slice(0, 20)
    }


    return (
        <div>
            <table className={`quad-${quadType}`}>
                {data.map((product, index) => {
                    return (
                        <tr>
                            {generateRow(product, index, quadType)}
                        </tr>

                    )
                })}
            </table>
        </div >
    )



}

export default GridQuadrant