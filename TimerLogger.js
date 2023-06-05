/* TBD
* T(x) timer / elapsed miliseconds
* x=null => return actual momment()
* x=#    => return elapsed miliseconds

//lg=log /0=begin/1=end ()
* x=#    => return diff moment / x

//lg=log /0=begin/1=end /txt
//msg
// added GH 23. 12. 2021 
*/
function T(tx){
 function m(){return moment()}
 return tx==null
  ?m()//.add(-22,"milisec")
  :m().diff(tx,"milisec")
} 
function difv(v1,v2,tx){ v1=Math.abs(v1-v2)/(v1+v2)*2000
 return tx+" "+parseInt(v1)/10+"%"
}
function lg(xx){var tt=moment()
 tt=tt.format("★H:mm:ss.SSS")
 log( xx==null || xx==0
  ?" BGN. "+tt+"\n.\n"
  :xx==1
   ?"\n> END. "+tt
   :xx
 )
}
function msg(m){message(m)}
//★★ end 
