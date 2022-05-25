console.log('hello')
  object = {
      "r1n": {
          "mkg": {
             "zma": [21, 45, 66, 111],
              "mii": {
                  "ltf": [2, 5, 3, 9, 21]
               },
               "fv": [1, 3, 6, 9]
           },
           "rmk": {
               "amr": [50, 50, 100, 150, 250]
           }
      },
      "fik": {
          "er": [592, 9, 32, 13],
          "gp": [12, 34, 116, 29]
      }
  }
 
 
 // return null if the value isn't found.
 
function getRootProperty(object, val) {
  //Object.keys(object).map((root)=>findVal(object[root],val,root))
  for(i in object){
      var found=null
      found=findVal(object[i],val,i)
      if(found) break 
  }
  console.log(found)
}
function findVal(nested, val, root){
  if(!Array.isArray(nested)){
    Object.keys(nested).map(i=>findVal(nested[i],val,root))
  }else{
      var foundVal=null
    for(j in nested){
      if(nested[j]==val){
        foundVal=root
        console.log(foundVal)
      }
    }
    
  }
  
   return foundVal
}
getRootProperty(object, 32);  //=> "r1n"
/*getRootProperty(object, 116); //=> "fik"
 getRootProperty(object, 111);  //=> "r1n"

 getRootProperty(object, 999);  //=> null*/