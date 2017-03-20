function mask(dom, opacity){
    var _opacity = opacity||0.2
    var _dom = document.createElement('div')
    _dom.style.opacity = _opacity
    _dom.style.backgroundColor = 'white'
    _dom.style.position = 'absolute'
    _dom.style.width = dom.offsetWidth + 'px'
    _dom.style.height = dom.offsetHeight +'px'
    _dom.style.left = dom.offsetLeft+ 'px'
    _dom.style.top = dom.offsetTop+ 'px'
    dom.parentNode.insertBefore(_dom,dom)
}

module.exports = mask
