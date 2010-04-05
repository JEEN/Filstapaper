
var href = location.href;

href.match('http://(.+)');

href = 'http://util.myemy.com/barcode/' + RegExp.$1;

i = document.createElement('iframe');
i.setAttribute('name', 'item_frr');
i.setAttribute('id', 'item_frr');
i.setAttribute('style', 'z-index: 2147483647; position:fixed; left:10px;top:10px;width:400px; height: 150px; border: 3px solid #aaa; ');
i.setAttribute('src', href);
document.body.appendChild(i);
