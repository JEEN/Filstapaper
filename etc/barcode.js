
var href = location.href;

href.match('http://(.+)');

href = 'http://util.myemy.com/barcode/' + RegExp.$1;

var e=window.getSelection,
    e=encodeURIComponent,
    z=d.createElement('scr'+'ipt'),
    p=e(href);
    
i=document.createElement('iframe');
i.setAttribute('name', 'item_ffr');
i.setAttribute('id', 'item_ffr');
    c = 'left:10px;top:10px;width:168px;';
i.setAttribute('style', 'z-index: 2147483647; position: fixed;'+c+'width:168px;height: 100px; border: 3px solid #aaa;');
i.setAttribute('src', p);
document.body.appendChild(i);
