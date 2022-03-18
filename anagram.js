function isAnagram(str1,str2){
str1 = str1.toString().toReplace('.','').replace('.','').toLowerCase().split('').sort().join('');
str2 = str2.toString().toReplace('.','').replace('.','').toLowerCase().split('').sort().join('');
return str1 === str2;
}
module.exports = isAnagram;