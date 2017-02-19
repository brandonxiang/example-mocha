//http://www.cnblogs.com/kindofblue/p/4672129.html
function sumString(a,b){
    var result = [], count = 0

    if(a.length < b.length) b=[a, a=b][0]
    b = Array(a.length-b.length+1).join('0')+b

    var arrA = a.split('')
    var arrB = b.split('')

    for(var j=0; j<a.length; j++){
        var temp = (Number(arrA.pop())+Number(arrB.pop())) + count
        if(temp>=10){
            temp = temp -10
            count = 1
        }else{
            count = 0
        }
        result.push(temp)
    }
    result.push(count)

    return result.reverse().join('').replace(/^0+/,'')
}

function addString(a, b){
    var res = '', c = 0
    a = a.split('')
    b = b.split('')
    while(a.length||b.length||c){
        c+= ~~a.pop() + ~~b.pop()
        res = c%10+res
        c = c>9
    }
    return res.replace(/^0+/,'')

}


exports.sumString = sumString
exports.addString = addString
