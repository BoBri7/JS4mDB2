/**
* FileWrite-name # ★ 
★ če že obstaja, zapiše v nov file#
* WFn(txt,fn,fx,hed) 
* par:
*  txt      -text to wite
*  fn="FW"  -file name
*  fx="txt" -file extenzion
*  hed= /0=brez
*       /lib.title+entries#+dateTime
*/

function WFn(txt,fn,fx,hed) {
 function exist(o){ 
  try { let t=o.readChar() ;  return true }
  catch (Er) {return false }
 }

 //message("FW12")  //★test
  
 if(fn==null)fn="FW"
 if(fx==null)fx="txt"
 if(fx[0]!=".")fx="."+fx
 var lt = lib().title

 if(hed==0) hed=""
 else {
    hed = lt+" • L="+lib().entries().length
    hed+= moment().format(" DD.MM HH:mm ")+"\n"
 }
 //=★  najde prvo prosto # 
 var ff ="/sdcard/Documents/MyData/"+lt+"-"+fn+"-"
 var i=0
 do{  
  var fn=ff+(i++)+fx
  var o=file(fn)
 } while( exist(o) ) //o.exists )
 var er=""
//return "hed="+ hed+"; er#"+er+"<\n fnam="+fn

 try{ o.write(hed+txt) ; er++ }
 catch (err){er= err + " ★er#" +er+"\n"}
 finally {
  o.close() ;
  return "Fn: "+fn+"\nhed:"+hed+"  / er#:"+er
 if(er>"") message(er)
 }
}
//=== end FWn ==
