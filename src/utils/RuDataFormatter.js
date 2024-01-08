import dataset from '../tests/dataset.json'
import dataset2 from '../tests/dataset2.json'
import dataset3 from '../tests/dataset3.json'
import dataset4 from '../tests/dataset.json'


/******************* PROBLEM BREAKDOWN ******************************************************************************************************************************
 * 1. We are provided a JSON data set (array of objects). Each object has 2 key/value pairs product and repeat.
 * 2. The repeat value indicates how many occurences of that product need to be displayed in the final RU table 
 *      (Ex. product 'Corei2' has a repeat value of 13, meaning Corei2 will appear 13 times in the final RU table).
 * 3. We want to create a data set that holds all occurences of each product for easy displaying later on.
 * 4. However, we cannot have duplicate product names adjacent to one another (Invalid Ex: arr = [Corei1,Corei1, Corei2 ], Valid Ex: arr = [Corei1, Corei2, Corei1 ])
 * 
 * *******************************************************************************************************************************************************************
 ************************ ALGORITHM SOLUTION *************************************************************************************************************************
 * 1. Sort the dataset by repeat value in descending order.
 * 2. Once sorted, grab the first element of the array and store its repeat value. We will call the largest repeat value 'stopPoint'
 * 3. Loop through the data set N times, where N = stopPoint
 * 4. On each iteration: push each product name to the 'dataToDisplay' array. As long as that product's repeat value !== 0
 * 5. Each time we push a product, decrease its repeat value by 1
 * 6. Once the data set has been completely iterated over. Decrease the stopPoint value by 1 and repeat the process until stopPoint === 0
 * 
*/
const sortRuData = () => {
    //TEST SET UP, CHANGE test_num to 1-4 to use a different data set
    var test_num = 1
    var originalDataSet = ''
    if (test_num === 1) {
        originalDataSet = dataset
    } else if (test_num === 2) {
        originalDataSet = dataset2
    } else if (test_num === 3) {
        originalDataSet = dataset3
    } else if (test_num === 4) {
        originalDataSet = dataset4
    }


    //BEGIN SORTING
    const copyOfData = JSON.parse(JSON.stringify(originalDataSet)) //Get a copy of the data set, so we don't actually modify the original data.
    var dataSortedByRepeat = copyOfData.sort((a, b) => b.repeat - a.repeat) //Sort data by repeat value, descending order
    var dataToDisplay = [] //Final data set 
    var stopPoint = Number(dataSortedByRepeat[0].repeat) //Find the largest repeat value in the data set

    //IF largest repeat value is greater than second largest by more than 1. Impossible to prevent adjacent repeats fail.
    if ((stopPoint - Number(dataSortedByRepeat[1].repeat)) > 1) {
        console.error("Invalid dataset, Product: ", dataSortedByRepeat[0].product, " is has a repeat value that is too large.")
        return null
    }

    //While stopPoint is greater than 0
    while (stopPoint > 0) {
        //Iterate over the entire data set
        for (var i = 0; i < dataSortedByRepeat.length; i++) {

            if (dataSortedByRepeat[i].repeat === 0) continue //If elements repeat value is 0 skip

            dataToDisplay.push(dataSortedByRepeat[i].product) //Push prodduct name to array
            dataSortedByRepeat[i].repeat = dataSortedByRepeat[i].repeat - 1 //Decrease current elements repeat value by 1
        }
        stopPoint-- //Decrease stop point by 1
    }

    dataToDisplay = dataToDisplay.map((product, index) => {
        let tempObj = {}
        tempObj['ru_num'] = index
        tempObj['product'] = product

        return tempObj
    })


    return dataToDisplay
}
export {
    sortRuData
}