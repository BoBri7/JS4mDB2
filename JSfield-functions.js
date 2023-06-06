/** funkcije za js.field
* f(fn)  R: field(fn)
* pr(fn) R: e.pev.f(fn)
* m(d)   R: moment(d)
* df(dv,df="DD.MM.YY HH:mm")
* round(xv,n) R: round
*/
function jsff(){
  return "java script field fx"
}
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
function round(xv,n){ n=n!=null ?n :1 //def=1
  n=n>0
    ? 1+"0".repeat(n)
    : 1/(1+"0".repeat(-n)
  return Math.round(xv*n)/n
}
