function reverseText(text, callback){
  let splitText = text.split("")
  let reverseArray = splitText.reverse()
  callback(reverseArray.join(""))
}

function capitalizeText(text, callback){
  callback(text.toUpperCase())
}
