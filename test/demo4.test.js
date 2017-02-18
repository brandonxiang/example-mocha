var expect = require('chai').expect
var reUrl = require('../src/demo4')


describe('Demo 4', function(){
    var url1 = 'http://data.auto.qq.com/'
    var url2 = 'http://data.auto.qq.com/car_brand/index.shtml'

    it('determine whether this url1 belongs to qq', function(){
        expect(reUrl(url1)).to.be.true
    })

    it('determine whether this url2 belongs to qq', function(){
        expect(reUrl(url2)).to.be.true
    })
})
