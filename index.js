function isValidIP(str) {
    let regExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    let arr = str.split('.')
    let resultCondition = arr.map(item => {
        if (item.length == 1 && item.charAt(0) == '0') {
            return item
        }
        if (item.charAt(0) == "0") {
            return false
        }
        return item
    })

    return regExp.test(resultCondition.join('.')) ? true : false
}

// function isValidIP(str) {
//     return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str); - не нашел эту регулярку, пришлось мастерить код под свои условия
// }

// function isValidIP(str) {
//     return str.split('.').filter(function(v){return v==Number(v).toString() && Number(v)<256}).length==4; - крутое решение но не моё
// }