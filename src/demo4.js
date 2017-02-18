function reLocation(){
    var url = window.location.href
    return reUrl(url)
}

function reUrl(url){
    var re1 =/^((http|https):\/\/)?([a-zA-Z0-9\-]+\.)+(qq\.com)([A-Za-z0-9-_\.~\/])+$/
    return re1.test(url)
}


module.exports = reUrl
