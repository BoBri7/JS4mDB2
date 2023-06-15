/** funkcije za js.field. 
* JSfield-functions gh2 .js
* f(fn)  R: field(fn)
* pr(fn) R: e.pev.f(fn)
* m(d)   R: moment(d)
* df(dv,df="DD.MM.YY HH:mm")
* round(xv,n) R: round
* N($)        R: Number
* S(x)        R: String
*/
function jsff(){return "java script field fx2"}

// field(fn)
function f(fn){ return field(fn)}

// vrne field(fn) prejšnjega zapisa
// če 1.zapis vrne ""
function pr(fn){ e=entry().prev()
 if(e==null) return ""
 return e.field(fn)
}

// moment(x)
function m(x){return moment(x)}

// date format 
function df(dv,df){//if(df==null)df="DD.MM.YY HH:mm"
  return isNaN(moment(dv))
   ? df //" d. m.yy. h:mm"
   : moment(dv).format(df!=null?df:"DD.MM.YY HH:mm")
}
// round(#,d)
/*function round(xv,n){ n=n!=null ?n :1 //def=1
  n=n>0
    ? 1+"0".repeat(n)
    : 1/(1+"0".repeat(-n))
  return Math.round(xv*n)/n
}*/
function N(x){return Number(x.replace(",","."))}
function S(x){return String(x)}
function round(xv,n){ if(n==null) n =1
  var o=1+"0".repeat(Math.abs(n))
  if( n < 0)  return Math.round(xv/o)*o
  else { xv = String(xv+".0").split(".")
   return xv[0]+","+(xv[1]+"0".repeat(n)).slice(0,n)
}}
// pad Right Left
function prl(s,n){ n=n!=null ?n :15*(typeof(v)!="string"?-1:1)
 s= (n>0 ?s:"")+" ".repeat(Math.abs(n))+(n>0 ?"" :s)
 return n>0
 ? s.slice(0,n)
  : s.slice(n)
 }

//format number
function fn(xn,nn,dc){ xn=round(xn,dc)
 return prl(xn, nn!=null ?-nn :-19 )
}
// ★★ n => th.delimited format ★★d=dec p=places
function Df(xx,df){xx= xx!=null ? xx : df ; return xx}

function fN(nn,dc,pl) { nn=Df(nn,0); dc=Df(dc,2)
  nn=String(round(nn,dc)+"."+"0".repeat(dc)).split('.');
  dc=dc>0 ? ","+nn[1] :""
  nn= nn[0].replace(/\B(?=(\d{3})+(?!\d))/g,".")+dc
  if(pl==null) pl=12
  return pl!=null
    ? (" ".repeat(pl)+nn).slice(-pl)
    : nn
}
//====★ end ★=====
