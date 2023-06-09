/** barCh(
*   i =index
*   n =dekada#
*   N =# dekad
*   delimiters [bmX]
*/
function barCh(i,n,N,x){const d=["|.|:|","| |•|","|-:>|","[-:>]","01234"]
  if(i==null)return "barCh( i=index  n= N =#dekad del#[bmX])"                    
  if(typeof(x)=="number"){  x=x[x] 
  } else if(typeof(x)!="string" ||  x.length!=5)x=d[0]
  if(x==null)x=d[4]
  var s=(x[1].repeat(n-1))
  s=x[0]+(s+x[2]).repeat(N-1)+s+x[4]
  if(i==0) return s
  s=x[0]+x[3].repeat(i)+s.slice(i+1)
  if(i>=n*N){s=s.split("");s[N*n]=x[4];
  s=s.join("")}
  return s
}
//=== end ===
