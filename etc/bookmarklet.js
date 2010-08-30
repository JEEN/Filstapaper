var support_hosts = {
   'blog.daum.net': 1,
   'blog.naver.com': 1,
   'www.jpnews.kr': 1,
   'www.ddanzi.com': 1,
   'ytn.co.kr': 1,
   'www.devpia.com': 1,
   'news.itimes.co.kr': 1,
   'www.etnews.co.kr': 1,
   'www.mediamob.co.kr': 1,
   'www.cbs.co.kr': 1,
   'blog.hani.co.kr': 1,
   'kr.blog.yahoo.com': 1,
   'blog.paran.com': 1,
};

function _rlipb846707(){var title,d=document,l=d.location,href=l.href;
d.title = title = d.title.substring(12);
if (href == 'http://www.instapaper.com/i4' || typeof iptstbt != 'undefined') { alert("The bookmarklet is correctly installed."); throw(0); }

/* Google Reader parsing code by Pascal Lalibert챕 */
var _greader = false;
if (/www\.google\.com\/reader\/i\//.test(d.location)) {
    _greader = true;
        if (typeof(window.iprl5) != 'function') { 
        if (confirm("The Google Reader-compatible Instapaper bookmarklet is not installed.\n\nWould you like to go to Instapaper now to install it?")) {
            window.location.href = "http://www.instapaper.com/u";
        }
        return;
    }
    var n = d.getElementById('entries').childNodes,
    l = null,
    h = null;
    for (var i = 0; i < n.length; i++) {
        if (/expanded/.test(n[i].className)) {
            l = n[i];
            break;
        }
    }
    var t = l.getElementsByTagName('span');
    for (var i = 0; i < t.length; i++) {
        if (/item-title/.test(t[i].className)) {
            title = t[i].textContent;
            break;
        }
    }
    var h = l.getElementsByTagName('a');
    for (var i = h.length - 1; i >= 0; i--) {
        if (/See original/.test(h[i].textContent) && h[i].href) {
            href = h[i].href;
            break;
        }
    }
} else if (/www\.google\.com\/reader/.test(d.location) && typeof(window.getPermalink) == 'function' && getPermalink() != null) {
    _greader = true;
        if (typeof(window.iprl5) != 'function') { 
        if (confirm("The Google Reader-compatible Instapaper bookmarklet is not installed.\n\nWould you like to go to Instapaper now to install it?")) {
            window.location.href = "http://www.instapaper.com/u";
        }
        return;
    }
    var l = getPermalink();
    href = l.url;
    title=l.title;
}

if (! _greader) {
    try{
    // DEFLATE, base64 by Dan Kogai http://github.com/dankogai/
(function(){function sa(a){for(var e=[],d=0,b=a.length;d<b;d++)e[d]=a.charCodeAt(d);for(a=0;e.length%3;){e.push(0);a++}d=[];b=0;for(var c=e.length;b<c;b+=3){var f=e[b],g=e[b+1],j=e[b+2];if(f>=256||g>=256||j>=256)throw"unsupported character found";f=f<<16|g<<8|j;d.push(da[f>>>18],da[f>>>12&63],da[f>>>6&63],da[f&63])}for(;a--;)d[d.length-a-1]="=".charCodeAt(0);return String.fromCharCode.apply(String,d)}var da=function(){for(var a=[],e="A".charCodeAt(0),d="a".charCodeAt(0),b="0".charCodeAt(0),c=0;c<
26;c++)a.push(e+c);for(c=0;c<26;c++)a.push(d+c);for(c=0;c<10;c++)a.push(b+c);a.push("+".charCodeAt(0));a.push("/".charCodeAt(0));return a}();(function(a){for(var e={},d=0,b=a.length;d<b;d++)e[a.charAt(d)]=d;return e})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");window.b64_enc=sa;var ta=parseInt(5),Q,p,ea,ua,R=null,t,r,fa,h,va,wa,A,O,B,G,C,P,Ia,X,l,w,i,Y,H,o,Ja,xa,S,Ka,D,I,J,T,s,x,y,K,u,m,L,V,E,Z,U,ya,ga,ha,M,ia,za,$,ja,W,ka,la,Aa;function aa(){this.b=this.a=0}function Ba(){this.i=
this.f=this.e=null;this.c=this.j=this.g=this.h=0}function F(a,e,d,b){this.n=a;this.p=e;this.r=d;this.o=b}function Xa(){this.next=null;this.d=0;this.l=new Array(8192);this.k=0}var Ca=new Array(0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0),ba=new Array(0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13),Ya=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7),La=new Array(16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15),Da=new Array(new F(0,0,0,0),new F(4,4,8,4),new F(4,5,16,
8),new F(4,6,32,32),new F(4,4,16,16),new F(8,16,32,32),new F(8,16,128,128),new F(8,32,128,256),new F(32,128,258,1024),new F(32,258,258,4096));function ma(a){R[r+t++]=a;r+t==8192&&Za()}function na(a){a&=65535;if(r+t<8190){R[r+t++]=a&255;R[r+t++]=a>>>8}else{ma(a&255);ma(a>>>8)}}function oa(){C=(C<<ta^h[i+3-1]&255)&8191;P=A[32768+C];A[i&32767]=P;A[32768+C]=i}function N(a,e){v(e[a].a,e[a].b)}function Ma(a,e,d){return a[e].a<a[d].a||a[e].a==a[d].a&&E[e]<=E[d]}function Na(a,e,d){var b;for(b=0;b<d&&Aa<la.length;b++)a[e+
b]=la.charCodeAt(Aa++)&255;return b}function Oa(a){var e=Ja,d=i,b,c=w,f=i>32506?i-32506:0,g=i+258,j=h[d+c-1],k=h[d+c];if(w>=Ka)e>>=2;do{b=a;if(!(h[b+c]!=k||h[b+c-1]!=j||h[b]!=h[d]||h[++b]!=h[d+1])){d+=2;b++;do;while(h[++d]==h[++b]&&h[++d]==h[++b]&&h[++d]==h[++b]&&h[++d]==h[++b]&&h[++d]==h[++b]&&h[++d]==h[++b]&&h[++d]==h[++b]&&h[++d]==h[++b]&&d<g);b=258-(g-d);d=g-258;if(b>c){Y=a;c=b;if(b>=258)break;j=h[d+c-1];k=h[d+c]}}}while((a=A[a&32767])>f&&--e!=0);return c}function Ea(){var a,e,d=65536-o-i;if(d==
-1)d--;else if(i>=65274){for(a=0;a<32768;a++)h[a]=h[a+32768];Y-=32768;i-=32768;G-=32768;for(a=0;a<8192;a++){e=A[32768+a];A[32768+a]=e>=32768?e-32768:0}for(a=0;a<32768;a++){e=A[a];A[a]=e>=32768?e-32768:0}d+=32768}if(!H){a=Na(h,i+o,d);if(a<=0)H=true;else o+=a}}function $a(){for(;o!=0&&p==null;){var a;oa();if(P!=0&&i-P<=32506){l=Oa(P);if(l>o)l=o}if(l>=3){a=ca(i-Y,l-3);o-=l;if(l<=xa){l--;do{i++;oa()}while(--l!=0);i++}else{i+=l;l=0;C=h[i]&255;C=(C<<ta^h[i+1]&255)&8191}}else{a=ca(0,h[i]&255);o--;i++}if(a){pa(0);
G=i}for(;o<262&&!H;)Ea()}}function ab(){for(;o!=0&&p==null;){oa();w=l;Ia=Y;l=2;if(P!=0&&w<xa&&i-P<=32506){l=Oa(P);if(l>o)l=o;l==3&&i-Y>4096&&l--}if(w>=3&&l<=w){var a;a=ca(i-1-Ia,w-3);o-=w-1;w-=2;do{i++;oa()}while(--w!=0);X=0;l=2;i++;if(a){pa(0);G=i}}else{if(X!=0){if(ca(0,h[i-1]&255)){pa(0);G=i}}else X=1;i++;o--}for(;o<262&&!H;)Ea()}}function bb(a,e,d){var b;if(!ua){if(!H){B=O=0;var c,f;if(T[0].b==0){x.e=D;x.f=J;x.i=Ca;x.h=257;x.g=286;x.j=15;x.c=0;y.e=I;y.f=T;y.i=ba;y.h=0;y.g=30;y.j=15;y.c=0;K.e=s;
K.f=null;K.i=Ya;K.h=0;K.g=19;K.j=7;for(f=c=K.c=0;f<28;f++){ya[f]=c;for(b=0;b<1<<Ca[f];b++)Z[c++]=f}Z[c-1]=f;for(f=c=0;f<16;f++){ga[f]=c;for(b=0;b<1<<ba[f];b++)U[c++]=f}for(c>>=7;f<30;f++){ga[f]=c<<7;for(b=0;b<1<<ba[f]-7;b++)U[256+c++]=f}for(b=0;b<=15;b++)u[b]=0;for(b=0;b<=143;){J[b++].b=8;u[8]++}for(;b<=255;){J[b++].b=9;u[9]++}for(;b<=279;){J[b++].b=7;u[7]++}for(;b<=287;){J[b++].b=8;u[8]++}Pa(J,287);for(b=0;b<30;b++){T[b].b=5;T[b].a=Qa(b,5)}Ra()}for(b=0;b<8192;b++)A[32768+b]=0;xa=Da[S].p;Ka=Da[S].n;
Ja=Da[S].o;G=i=0;o=Na(h,0,65536);if(o<=0){H=true;o=0}else{for(H=false;o<262&&!H;)Ea();for(b=C=0;b<2;b++)C=(C<<ta^h[b]&255)&8191}p=null;r=t=0;if(S<=3){w=2;l=0}else{l=2;X=0}fa=false}ua=true;if(o==0){fa=true;return 0}}if((b=Sa(a,e,d))==d)return d;if(fa)return b;S<=3?$a():ab();if(o==0){X!=0&&ca(0,h[i-1]&255);pa(1);fa=true}return b+Sa(a,b+e,d-b)}function Sa(a,e,d){var b,c,f;for(b=0;p!=null&&b<d;){c=d-b;if(c>p.d)c=p.d;for(f=0;f<c;f++)a[e+b+f]=p.l[p.k+f];p.k+=c;p.d-=c;b+=c;if(p.d==0){c=p;p=p.next;c.next=
Q;Q=c}}if(b==d)return b;if(r<t){c=d-b;if(c>t-r)c=t-r;for(f=0;f<c;f++)a[e+b+f]=R[r+f];r+=c;b+=c;if(t==r)t=r=0}return b}function Ra(){var a;for(a=0;a<286;a++)D[a].a=0;for(a=0;a<30;a++)I[a].a=0;for(a=0;a<19;a++)s[a].a=0;D[256].a=1;$=M=ia=za=W=ka=0;ja=1}function Fa(a,e){for(var d=m[e],b=e<<1;b<=L;){b<L&&Ma(a,m[b+1],m[b])&&b++;if(Ma(a,d,m[b]))break;m[e]=m[b];e=b;b<<=1}m[e]=d}function Pa(a,e){var d=new Array(16),b=0,c;for(c=1;c<=15;c++){b=b+u[c-1]<<1;d[c]=b}for(b=0;b<=e;b++){c=a[b].b;if(c!=0)a[b].a=Qa(d[c]++,
c)}}function Ga(a){var e=a.e,d=a.f,b=a.g,c,f=-1,g=b;L=0;V=573;for(c=0;c<b;c++)if(e[c].a!=0){m[++L]=f=c;E[c]=0}else e[c].b=0;for(;L<2;){c=m[++L]=f<2?++f:0;e[c].a=1;E[c]=0;W--;if(d!=null)ka-=d[c].b}a.c=f;for(c=L>>1;c>=1;c--)Fa(e,c);do{c=m[1];m[1]=m[L--];Fa(e,1);d=m[1];m[--V]=c;m[--V]=d;e[g].a=e[c].a+e[d].a;E[g]=E[c]>E[d]+1?E[c]:E[d]+1;e[c].b=e[d].b=g;m[1]=g++;Fa(e,1)}while(L>=2);m[--V]=m[1];g=a.e;c=a.i;b=a.h;d=a.c;var j=a.j,k=a.f,z,n,qa,Ha,ra=0;for(n=0;n<=15;n++)u[n]=0;g[m[V]].b=0;for(a=V+1;a<573;a++){z=
m[a];n=g[g[z].b].b+1;if(n>j){n=j;ra++}g[z].b=n;if(!(z>d)){u[n]++;qa=0;if(z>=b)qa=c[z-b];Ha=g[z].a;W+=Ha*(n+qa);if(k!=null)ka+=Ha*(k[z].b+qa)}}if(ra!=0){do{for(n=j-1;u[n]==0;)n--;u[n]--;u[n+1]+=2;u[j]--;ra-=2}while(ra>0);for(n=j;n!=0;n--)for(z=u[n];z!=0;){c=m[--a];if(!(c>d)){if(g[c].b!=n){W+=(n-g[c].b)*g[c].a;g[c].a=n}z--}}}Pa(e,f)}function Ta(a,e){var d,b=-1,c,f=a[0].b,g=0,j=7,k=4;if(f==0){j=138;k=3}a[e+1].b=65535;for(d=0;d<=e;d++){c=f;f=a[d+1].b;if(!(++g<j&&c==f)){if(g<k)s[c].a+=g;else if(c!=0){c!=
b&&s[c].a++;s[16].a++}else if(g<=10)s[17].a++;else s[18].a++;g=0;b=c;if(f==0){j=138;k=3}else if(c==f){j=6;k=3}else{j=7;k=4}}}}function Ua(a,e){var d,b=-1,c,f=a[0].b,g=0,j=7,k=4;if(f==0){j=138;k=3}for(d=0;d<=e;d++){c=f;f=a[d+1].b;if(!(++g<j&&c==f)){if(g<k){do N(c,s);while(--g!=0)}else if(c!=0){if(c!=b){N(c,s);g--}N(16,s);v(g-3,2)}else if(g<=10){N(17,s);v(g-3,3)}else{N(18,s);v(g-11,7)}g=0;b=c;if(f==0){j=138;k=3}else if(c==f){j=6;k=3}else{j=7;k=4}}}}function pa(a){var e,d,b,c;c=i-G;ha[za]=$;Ga(x);Ga(y);
Ta(D,x.c);Ta(I,y.c);Ga(K);for(b=18;b>=3;b--)if(s[La[b]].b!=0)break;W+=3*(b+1)+5+5+4;b=b;e=W+3+7>>3;d=ka+3+7>>3;if(d<=e)e=d;if(c+4<=e&&G>=0){v(0+a,3);Va();na(c);na(~c);for(b=0;b<c;b++)ma(h[G+b])}else if(d==e){v(2+a,3);Wa(J,T)}else{v(4+a,3);c=x.c+1;e=y.c+1;b=b+1;v(c-257,5);v(e-1,5);v(b-4,4);for(d=0;d<b;d++)v(s[La[d]].b,3);Ua(D,c-1);Ua(I,e-1);Wa(D,I)}Ra();a!=0&&Va()}function ca(a,e){wa[M++]=e;if(a==0)D[e].a++;else{a--;D[Z[e]+256+1].a++;I[(a<256?U[a]:U[256+(a>>7)])&255].a++;va[ia++]=a;$|=ja}ja<<=1;if((M&
7)==0){ha[za++]=$;$=0;ja=1}if(S>2&&(M&4095)==0){a=M*8;e=i-G;var d;for(d=0;d<30;d++)a+=I[d].a*(5+ba[d]);a>>=3;if(ia<parseInt(M/2)&&a<parseInt(e/2))return true}return M==8191||ia==8192}function Wa(a,e){var d,b=0,c=0,f=0,g=0,j,k;if(M!=0){do{if((b&7)==0)g=ha[f++];d=wa[b++]&255;if((g&1)==0)N(d,a);else{j=Z[d];N(j+256+1,a);k=Ca[j];if(k!=0){d-=ya[j];v(d,k)}d=va[c++];j=(d<256?U[d]:U[256+(d>>7)])&255;N(j,e);k=ba[j];if(k!=0){d-=ga[j];v(d,k)}}g>>=1}while(b<M)}N(256,a)}function v(a,e){if(B>16-e){O|=a<<B;na(O);
O=a>>16-B;B+=e-16}else{O|=a<<B;B+=e}}function Qa(a,e){var d=0;do{d|=a&1;a>>=1;d<<=1}while(--e>0);return d>>1}function Va(){if(B>8)na(O);else B>0&&ma(O);B=O=0}function Za(){if(t!=0){var a,e;if(Q!=null){a=Q;Q=Q.next}else a=new Xa;a.next=null;a.d=a.k=0;a=a;if(p==null)p=ea=a;else ea=ea.next=a;a.d=t-r;for(e=0;e<a.d;e++)a.l[e]=R[r+e];t=r=0}}window.q||(RawDeflate={});RawDeflate.m=function(a,e){la=a;Aa=0;if(typeof e=="undefined")e=6;if(a=e)if(a<1)a=1;else{if(a>9)a=9}else a=6;S=a;H=ua=false;if(R==null){Q=
p=ea=null;R=new Array(8192);h=new Array(65536);va=new Array(8192);wa=new Array(32832);A=new Array(65536);D=new Array(573);for(a=0;a<573;a++)D[a]=new aa;I=new Array(61);for(a=0;a<61;a++)I[a]=new aa;J=new Array(288);for(a=0;a<288;a++)J[a]=new aa;T=new Array(30);for(a=0;a<30;a++)T[a]=new aa;s=new Array(39);for(a=0;a<39;a++)s[a]=new aa;x=new Ba;y=new Ba;K=new Ba;u=new Array(16);m=new Array(573);E=new Array(573);Z=new Array(256);U=new Array(512);ya=new Array(29);ga=new Array(30);ha=new Array(parseInt(1024))}for(var d=
new Array(1024),b=[];(a=bb(d,0,d.length))>0;){var c=new Array(a);for(e=0;e<a;e++)c[e]=String.fromCharCode(d[e]);b[b.length]=c.join("")}la=null;return b.join("")}})();function cb(sa){return b64_enc(RawDeflate.m(unescape(encodeURIComponent(sa)),1))}window.b64deflate=cb;

function jbs_compress(body_node)
{
    var i, n;
    var del = [];

    var banned = ['script', 'style', 'embed', 'object', 'input', 'textarea', 'select', 'noscript', 'iframe'];
    var ns, ns_length, del_ptr = 0;
    for (n = 0; n < banned.length; n++) {
        ns = body_node.getElementsByTagName(banned[n]);
        for (i = 0; i < ns.length; i++) { del[del_ptr++] = ns[i]; }
    }
    
    for (i = 0; i < del_ptr; i++) {
        if (del[i].parentNode) del[i].parentNode.removeChild(del[i]);
    }
    
    html = body_node.innerHTML;
    html = html.replace(/<!--.*?-->/ig, '');
    html = html.replace(/(style|target|rel|border|cell[a-z]+|on[a-z]+)=".*?"/ig, '');
    html = html.replace(/[\s\t\r\n]+/ig, ' ');
    if (html.length > 384000) return html; /* too big to deflate quickly */
    return '<![D[' + b64deflate(html);
}
    }catch(e){ _greader = true; }
}
var loc_host = document.location.host;

// Allblog/Blog Korea Link URL
if (/link\.allblog\.net/.test(href) || /blogit\.blogkorea\.net/.test(href)) {
  href.match('.+(http://.+)$');
  href = RegExp.$1;
  href.match('http://([^/]+)');
  loc_host = RegExp.$1;
} 

// Daum View URL
if (/v\.daum\.net/.test(href)) {
  var o = document.getElementById('viewIframe');
  href = o.src;
  href.match('http://([^/]+)');
  loc_host = RegExp.$1;
}

if (/www\.100in\.com/.test(href)) {
  var o = document.getElementById('main_frame');
  href = o.src;
  href.match('http://([^/]+)');
  loc_host = RegExp.$1;
}

href.match('http://(.+)$');
if (support_hosts[loc_host]) {
  href = 'http://app.perl.kr/filstapaper/filter/' + RegExp.$1;
}

var e=window.getSelection,
    k=d.getSelection,
    x=d.selection,
    s=String(e? e(): (k)? k(): (x?x.createRange().text: '')),
    e=encodeURIComponent,
    z=d.createElement('scr'+'ipt'),
    p='k=IglCEqDu00VO&u=' + e(href) + '&t=' + e(title) + '&s=' + e(s.length < 10240 ? s : '');
    
    var b = '';

i=document.createElement('iframe');
i.setAttribute('name', 'ipb846707');
i.setAttribute('id', 'ipb846707');
    c = 'left:10px;top:10px;width:168px;';
i.setAttribute('style', 'z-index: 2147483647; position: fixed;'+c+'width:168px;height: 100px; border: 3px solid #aaa;');
document.body.appendChild(i);
i.onload = function(){ setTimeout(_clipb846707_close, 350); }

window['ipb846707'].document.write(
    '<html><body style="color: #555; background-color: #fff; text-align: center; margin: 0px; font-family: Georgia, Times, serif; font-size: 26px;">' +
    '<img style="display: block; position: fixed; bottom: 4px; left: 72px;" src="data:image/gif;base64,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"/>' +
    '<div style="text-align: center; width: 80%; padding-bottom: 1px; margin: 0 auto 15px auto; font-size: 13px; border-bottom: 1px solid #ccc; color: #333;">Instapaper</div>' +
    'Saving...' +
    '<form action="http://www.instapaper.com/bookmarklet/post_v5" method="post" id="f">' +
    '<input type="hidden" name="p" value="'+p+'"/>' +
    '<input type="hidden" name="b" id="b" value=""/>' +
    '</form>' +
    '<scr'+'ipt>setTimeout(function() { document.getElementById("b").value = decodeURIComponent("'+e(b)+'"); document.getElementById("f").submit(); }, 1);</scr'+'ipt>' +
    '</body></html>'
);

}_rlipb846707();void(0)
function _clipb846707_close() 
{ 
    var f = document.getElementById('ipb846707');
    f.style.display = 'none'; 
    f.parentNode.removeChild(f);
}
