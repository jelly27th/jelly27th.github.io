// build time:Sun Feb 12 2023 15:58:49 GMT+0800 (中国标准时间)
!function(){var n=new Date("2022/01/22 00:00:00");function m(){var m=new Date;m.setTime(m.getTime()+250);days=(m-n)/1e3/60/60/24;dnum=Math.floor(days);hours=(m-n)/1e3/60/60-24*dnum;hnum=Math.floor(hours);if(String(hnum).length===1){hnum="0"+hnum}minutes=(m-n)/1e3/60-24*60*dnum-60*hnum;mnum=Math.floor(minutes);if(String(mnum).length===1){mnum="0"+mnum}seconds=(m-n)/1e3-24*60*60*dnum-60*60*hnum-60*mnum;snum=Math.round(seconds);if(String(snum).length===1){snum="0"+snum}document.getElementById("timeDate").innerHTML="本站安全运行&nbsp"+dnum+"&nbsp天";document.getElementById("times").innerHTML=hnum+"&nbsp小时&nbsp"+mnum+"&nbsp分&nbsp"+snum+"&nbsp秒"}m();setInterval(m,1e3)}();
//rebuild by hrmmi 