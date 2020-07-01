var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = '╭(°A°`)╮ 快点给我回来~';
         clearTimeout(titleTime);
     }
     else {
         document.title = '(ฅ>ω<*ฅ) 终于回来了 真香~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });