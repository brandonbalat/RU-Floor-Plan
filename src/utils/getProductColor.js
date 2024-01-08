//Helper Function gets what color Seat UUID cell should be based on product name, each case sets a color and returns to GridQuad component
const getProductColor = (product) => {
    var color = ''
    switch (product) {
        case 'Core i1':
            color = 'black'
            break;
        case 'Core i2':
            color = '#B6D0E2'
            break
        case 'Core i3':
            color = '#088F8F'
            break;
        case 'Core i4':
            color = '#7BB274'
            break
        case 'Core i5':
            color = '#32CD32'
            break;
        case 'Core i6':
            color = '#32CD32'
            break
        case 'Core i7':
            color = '#80D0F4'
            break;
        case 'Core i8':
            color = '#FFC0CB'
            break
        case 'Core i9':
            color = '#CCCC00'
            break;
        case 'Core i10':
            color = '#FFFF00'
            break
        case 'Core i11':
            color = '#000080'
            break;
        case 'Core i12':
            color = '#DDC0B4'
            break
        case 'Core i13':
            color = '#89CFF0'
            break;
        case 'Core i14':
            color = '#32de84'
            break
        case 'Core i15':
            color = '#DA2C43'
            break;
        case 'Core i16':
            color = '#FFDB58'
            break
        case 'Core i17':
            color = '#29AB87'
            break;
        case 'Core i18':
            color = '#a00498'
            break
        case 'Core i19':
            color = '#0077c0'
            break;
        case 'Core i20':
            color = '#03C03C'
            break
        case 'Core i21':
            color = '#FF00FF'
            break;
        case 'Core i22':
            color = '#536878'
            break
        case 'Core i23':
            color = '#FFD700'
            break;
        case 'Core i24':
            color = '#D3D3D3'
            break
        case 'Core i25':
            color = '#F0F0F0'
            break;
        case 'Core i26':
            color = '#EE82EE'
            break
    }


    return color
}

export {
    getProductColor
} 