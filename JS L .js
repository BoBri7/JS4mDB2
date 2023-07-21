function L(txt,n,T){if(n==null)n=44
/** leva poravnqva za .st
* L(txt , n=44) 
*  text lines
*  dolžina preloma
*   lineTerminator
*/
txt=txt.split("\n")
 for(let i=0;i<txt.length;i++){
   ti=txt[i]
   txt[i] = ( ti+" ".repeat(n)).slice(0,n)
   +(ti.length>n ? "\n >>"+ti.slice(n) : T==null ?"" :T )
 }
 return txt.join("\n")
}
//=== end ===
