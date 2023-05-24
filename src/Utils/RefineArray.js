const convertStringToEnum = (stringToConvert) => {
    return stringToConvert.split(" ").join("_").toUpperCase()
}

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const removeUnderscore = (string) => {
    return string.split("_").join(" ").toLowerCase()
}

const capitalizeString=(string)=>{
    return string.toUpperCase()
}

const refineArray = (object, array) => {
    object.map((obj) => {
        if (obj.includes("_")) {
            let modifiedName = capitalizeFirstLetter(removeUnderscore(obj))
            array.push(modifiedName)
        } else {
            let modifiedName = capitalizeFirstLetter(obj)
            array.push(modifiedName)
        }
    })
}

export {
    refineArray,
    convertStringToEnum,
    capitalizeString,
    capitalizeFirstLetter
} 