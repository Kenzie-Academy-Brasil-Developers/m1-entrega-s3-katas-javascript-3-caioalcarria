const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    // implemente o código do kata 1 aqui
    result=[]
  for(i=1; i<=25;i++){
    result.push(i)
  }
  console.log(result)
  return result
}

function kata2() {
    // implemente o código do kata 2 aqui
    result=[]
  for(i=1; i<=25;i++){
    result.push(i)
  }
  console.log(result.reverse())
  return result.reverse()

}

function kata3() {
    // implemente o código do kata 3 aqui
    result=[]
  for(i=1; i<=25;i++){
    result.push(-i)
  }
  console.log(result)
  return result
}

function kata4() {
    // implemente o código do kata 4 aqui
    result=[]
  for(i=1; i<=25;i++){
    result.push(-i)
  }
  console.log(result.reverse())
  return result.reverse()
}

function kata5() {
    // implemente o código do kata 5 aqui
    result=[]
  for(i=-25; i<=25;i++){
    if(i%2!=0)
    result.push(i)
  }
  console.log(result.reverse())
  return result.reverse()
}

function kata6() {
    // implemente o código do kata 6 aqui
    result=[]
  for(i=3; i<=100;i++){
    if(i%3==0)
    result.push(i)
  }
  console.log(result)
  return result
}

function kata7() {
    // implemente o código do kata 7 aqui
    result=[]
  for(i=3; i<=100;i++){
    if(i%7==0)
    result.push(i)
  }
  console.log(result)
  return result
}

function kata8() {
    // implemente o código do kata 8 aqui
    result=[]
  for(i=3; i<=100;i++){
    if(i%7==0||i%3==0)
    result.push(i)
  }
  console.log(result.reverse())
  return result.reverse()
}

function kata9() {
    // implemente o código do kata 9 aqui
    result=[]
  for(i=3; i<=100;i++){
    if(i%2!=0&&i%5==0)
    result.push(i)
  }
  console.log(result)
  return result
}

function kata10() {
    // implemente o código do kata 10 aqui
    console.log(sampleArray)
    return sampleArray
}

function kata11() {
    // implemente o código do kata 11 aqui
    result=[]
  for(i=0; i<=sampleArray.length;i++){
    if(sampleArray[i]%2==0)
    result.push(sampleArray[i])
  }
  console.log(result)
  return result
}

function kata12() {
    // implemente o código do kata 12 aqui
    result=[]
    for(i=0; i<sampleArray.length;i++){
        if(sampleArray[i]%2!=0)
        result.push(sampleArray[i])
      }
      console.log(result)
      return result
}

function kata13() {
    // implemente o código do kata 13 aqui
    result=[]
  for(i=0; i<=sampleArray.length;i++){
    if(sampleArray[i]%8==0)
    result.push(sampleArray[i])
  }
  console.log(result)
  return result
}

function kata14() {
    // implemente o código do kata 14 aqui
    result=[]
  for(i=0; i<sampleArray.length;i++){
  
    result.push(sampleArray[i]*sampleArray[i])
  }
  console.log(result)
  return result
}

function kata15() {
    // implemente o código do kata 15 aqui
    result=0
    for(i=1; i<=20;i++){
      result= result+i
    }
    console.log(result)
    return result
}

function kata16() {
    // implemente o código do kata 16 aqui
    result=0
  for(i=0; i<sampleArray.length;i++){
  
    result=result+sampleArray[i]
  }
  console.log(result)
  return result
}

function kata17() {
    // implemente o código do kata 17 aqui
    console.log(Math.min(...sampleArray))
 return Math.min(...sampleArray)
}

function kata18() {
    // implemente o código do kata 18 aqui
    console.log(Math.max(...sampleArray))
 return Math.max(...sampleArray)
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
