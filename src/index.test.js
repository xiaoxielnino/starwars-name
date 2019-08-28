var expect = require('chai').expect;
var starwars = require('./index')

describe('starwars-names', function() {
    describe('all', () => {
        it('should be an array of string', () => {
            expect(starwars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every((item)=> {
                    return typeof item === 'string'
                })
            }
        })
        it('should contain chris', () => {
            expect(starwars.all).to.include('Chris(test)')
        })
    });
    describe('random', () => {
        it('should return a random name ', () => {
            var randomItem = starwars.random();
            expect(starwars.all).to.include(randomItem)
        })
    })
    
})