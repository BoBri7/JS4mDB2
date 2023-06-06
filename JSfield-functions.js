/** funkcije za js.field
* f(fn)  R: field(fn)
* pr(fn) R: e.pev.f(fn)
* m(d)   R: moment(d)
* df(dv,df="DD.MM.YY HH:mm")
* round(xv,n) R: round
*/

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
function df(dv,df){if(df==null)df="DD.MM.YY HH:mm"
  return isNaN(moment(dv))
   ? df //" d. m.yy. h:mm"
   : moment(dv).format(df)
}
function round(xv,n){ var nn=1+"0".repeat
  n=n>0
    ? 1+"0".repeat(n)
    : 1/(1+"0".repeat(-n))
  return Math.round(xv*n)/n
}
