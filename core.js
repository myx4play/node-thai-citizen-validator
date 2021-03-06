"use strict"

let thaiCitizenId = require('thai-citizen-generator')

let validate = (citizenId) => {
    if (validateCitizenIDPattern(citizenId)) {
        return thaiCitizenId.generateLastNumber(citizenId.substring(0, 12)) == citizenId.substring(12)
    }
    else
        return false
}

function validateCitizenIDPattern(citizenId) {
    return citizenId.match('(^\\d{13}$)')
}

Object.defineProperty(String.prototype, 'isThaiCitizenId', {
    enumerable: false,
    value: function () { return validate(this) }

})

module.exports = validate

