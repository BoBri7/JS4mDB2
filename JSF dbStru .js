/**
function dbStru(dbNam)
  dbNam == null => actDB
  return $ 
*/
function dbStru(dbNam){
  function  s(t,n){ if(n==null) n=15
    t=String(t)
    return t+" ".repeat(Math.max(1,n-t.length))+"| "
  }
  let db= dbNam == null
    ? lib() 
    :  libByName( dbNam )
  let dbf=db.fields()
  let dbe=db=lib().entries()[0]
  let o= db.name
  for( let ii=0; ii< dbf.length; ii++){fi=dbf[ii]
    o+= "\n"                                   
    o+= s(fi)
    o+= s(String(typeof( dbe.field(fi))).slice(0,3) ,5)                 
    o+= dbe.field(fi)                 
    //o+= "\n"           
  }
  return o+"\n========\n"
}
//log(idbStru())
//==== end ===
