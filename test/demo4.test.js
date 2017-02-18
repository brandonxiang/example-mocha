var expect = require('chai').expect
var reUrl = require('../src/demo4')


describe('Demo 4', function(){
    var url = 'http://data.auto.qq.com/'

    it('determine whether this url belongs to qq', function(){
        expect(reUrl(url)).to.be.true
    })
})
