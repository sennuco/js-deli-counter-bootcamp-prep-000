var counter = 1;
function takeANumber(katzDeli){
  katzDeli.push(counter);
counter ++;

return `You are number ${counter-1}.`
}

function nowServing(deliLine){
  var arr ='';
  if(deliLine.length ===0){
    arr= 'There is nobody waiting to be served!';
  }else if(deliLine.length > 0){
      arr = `Currently serving ${deliLine[0]}.`
      deliLine.shift();
    }
  
  return arr;
  
  //
}

function currentLine(names){
  var str="The line is currently"
  if(names.length ===0){
    str += " empty."
  }else{
    str +=': '
    for(var i =0; i <names.length; i++){
      str += `${i+1}. ${names[i]}, `
    }
    str = str.trim();
    str = str.substring(0, str.length-1);
  }
  return str;
}
