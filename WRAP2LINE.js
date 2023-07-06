/*  WRAP to LINES
* wT2l(txt, hed, ll=25, HedDl=":")
*  = multiLine Text >> lines
* wt2l(txt, hed, ll=25, HedDl=":")
*   = prepiše text v vrstice dolžine ll
* wl2l(lfn, hd, ll)
*   = prepiše ListField v vrstice 
*/
function hlp() { return
" >wT2l(txt, hed, ll=25, Dl=":" = multiLine Text >> lines \n"+
" >wt2l(txt, hed, ll=25, Dl=":") = prepiše text v vrstice dolžine ll \n"+
" >wl2l(lfn, hd, ll)             = prepiše ListField v vrstice "
}

// wrap MultiLineText
function wT2l(txt, hd, ll, dl){txt=txt.split("\n")
  for(let ii=0;ii<txt.length ;ii++){
    if(ii==1) hd=hd.length
    txt[ii]=wt2l(txt[ii], hd, ll, "")
  }
  return txt.join("\n")
}

// wrap text 2 line
function wt2l(txt, hd, ll, dl){ if(ll==null)ll=25
  const d=" "
  var o="", l="t:"+d.repeat(hd-2)
  if( typeof(hd)=="number" ) hd = d.repeat(hd)
  l=hd+(dl!=null ?dl :":");
  hd=d.repeat(hd.length) //naslednje vrstice!
  txt=txt.split(" ")
  for(var ii=0;ii<txt.length;ii++){ ti=txt[ii]
   if(  l.length + ti.length /1.7 < ll ) l+= d
   else { o+= l+"\n" ; l=hd  }
   l+= ti
  }
 return o+l
}
//== wrap listField 2 lines
function wl2l(lfn, hd, ll){ll=ll!=null ?ll :25
  var o=((hd!=null ?hd :lfn+":")+" ".repeat(ll)).slice(0,ll)
  o+=":"
  lfn=field(lfn)
  // lfn[1].checked = true
  for(let ii=0;ii<lfn.length;ii++){ti=lfn[ii]
    o+="\n "
    o+=wt2l(String(ti),ti.checked ?"[•]":"[  ]",ll,"=")
  }
  return o
}
//== END ==
