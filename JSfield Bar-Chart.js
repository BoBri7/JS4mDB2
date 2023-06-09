/** barCh(i,n,N)
* i =value
* n = dekada
* N = # dekad
*/
function barCh(i,n,N){
  if(i==null)return "barCh(i,n,N) chart -m do +m"
  function a(x){return x<0 ?-x :x}
  if(i==null) return "barCh( i=index  n= N =#dekad del#[bmX])"
  const m=n*N
  var s=" ".repeat(n-1)
   s=("|"+s).repeat(N)+"|"+(s+"|").repeat(N)
   if(i==0) return s
   s=s.split("");
  for(let ii=1;ii< a(i);ii++){
     if(a(i)<m)   s[m+(i>0 ?ii :-ii)]= i>0 ?" " : " "
  }
  s[0]="|"
  s[m]="|";
  s[m*2]="|"
  return (i<-m ?"-" :" ") +s.join("") + (i>m ?"+" :" ")+i
}  //=== end ===
