var url=require('url');
var urlStr='https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=korea';
var curUrl = url.parse(urlStr);
console.dir(curUrl);
console.log(curUrl.query);

var curStr = url.format(curUrl);
console.log(curStr);

var querystring = require('querystring');
var params = querystring.parse(curUrl.query);
console.log(params.query);