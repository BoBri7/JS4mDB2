/** deluje le v Sys.db
* ali ima baza polje Stru<+
* ? delovanje ? argumenta skripte
*/
// skripta za zagon strukture
a  = arg("act")
dbn = entry().field("BAZA")
//dbn = "ČLANI"
//dbn ="Sys"
dbn="G W5p"

s = dbn +"  sk.uk.  " + a
message(s)

try { s = dbStructS( dbn, a.slice(0,2)=="Wr" ?1 : null ) }
catch (er) { s = "Baza " +dbn +" ne obstaja!"}
log (s)
log(a)
switch (a.slice(0,2)){
case "Wr" :  WFn1(s) ;  break;
case "Ts" : tst2("test fun call"); break;
default     :   entry().set("Stru<+", s)
}

// 
// ★★★ dbStructS(  $imeBaze, LF) ★★★
//
function dbStructS( dbn, lf) {
  const n = 11
  var db = libByName(dbn)
  var f = db.fields()
  var e=db.entries()[0] 
  var N = f.length
  var s = "field.name | typ | opis, opomb               .\n"
  for( let i=0; i < N; i++){ var fi=f[i]
    try { var ti = typeof( e.field( fi ))
        ti=ti.slice(0,1) 
        switch (ti){
          case "s" : ti = "$"; break;
          case "n" : ti = "#"; break;
          case "o" : ti = "O"; break;
        }
    }
    //try { var ti = typeof(fi) } ==string
    catch (er) { ti = "?"}
    s+= "\n"+ (fi+" ".repeat(n)).slice(0, n-1)
    s+= fi.length > n ? "*" : " "
    s+="| "+ ti +"   | "
    if( lf != null ) s+= "\n"
  }
  return s
} 
//=== end === dbStru =
