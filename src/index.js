module.exports = function check(str, bracketsConfig) {
    let array = str.split('');
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        let isPop = false;
        for(let k = 0; k < bracketsConfig.length; k++) {
            if ( array[i] == bracketsConfig[k][1] && bracketsConfig[k][0] == newArray[newArray.length - 1] ) {
                 newArray.pop();
                 isPop = true;
                 break;
            } else if (array[i] == bracketsConfig[k][1] && bracketsConfig[k][0] != bracketsConfig[k][1] && (newArray.length == 0 || bracketsConfig[k][0] != newArray[newArray.length - 1])) {
                return false;
            }
        }

        if (isPop == false) {
            newArray.push(array[i]);
        }
    }
    if (newArray.length == 0) {
        return true;
    } else {
        return false;
    }
}
