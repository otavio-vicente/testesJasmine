//tdd
var isAnagram = require('../anagram');

describe('Teste Anagram', function(){
    it('Quando for verdadeiro "abc" e "cba"', function(){
        expect(isAnagram('abc','cba')).toEqual(true);
    })
    it('Quando for verdadeiro "Amor" e "Roma"', function(){
        expect(isAnagram('Amor','Roma')).toEqual(true);
    })
    it('Se é verdade que existem duas strings vazias', function(){
        expect(isAnagram('','')).toEqual(true);
    })
    it('É verdade quando "123" é igual a "312"', function(){
        expect(isAnagram('123','312')).toEqual(true);
    })
    it('É verdade quando "0.12" é igual "102"', function(){
        expect(isAnagram(0.12,'102')).toEqual(true);
    })
    it('É falso quando 012 não é igual a 102', function(){
        expect(isAnagram(012,102)).toEqual(false);
    })
})