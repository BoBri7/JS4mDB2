/**
*L(t.n=44)
* text lines
* dolžina preloma
*/
function L(t,n){if(n==null)n=44
 t=t.split("\n")
 for(let i=0;i<t.length;i++){
   ti=t[i]
   t[i] = ( ti+" ".repeat(n)).slice(0,n)
   +(ti.length>n ? "\n"+ti.slice(n) :  "|")
 }
 return t.join("\n")
}
//=== end ===
