getSumNum = (a, b) => {
    const customPromise = new Promise((resolve, reject) => {
      const sum = a + b      
      if(sum <= 5){    
        setTimeout(() => {
            resolve(`Let's go!! ${sum}`)
          }, 1000)
      } else {
        reject(new Error('Oops!.. Number must be less than 5'))
      }
    })
  
    return customPromise
  }
  
  // consuming the promise
  getSumNum(1, 2).then(data => {
    console.log('data => ',data)
    return getSumNum(1, 4)
  })
  .then(data1 => {
    console.log('data1 => ',data1)
  })
  .catch(err => {
    console.log(err)
  })