// using callback to synchronous prosses 


console.log('Start')

function userInfo(name,callback){
    setTimeout(() => { 
        console.log('**User info recevied**')
         callback(name) 
       }, 3000)
}

let name = userInfo('kholood', name => { 
  console.log(`your name is : ${name}`)
})
console.log('End')

/** If we don't use callback function with setTimout
 * Start
 * undefined
 * End
 * **User info recevied**
 */

/**with callback function 
 * Start
 * End
 * **User info recevied**
 * your name is : kholood
 */