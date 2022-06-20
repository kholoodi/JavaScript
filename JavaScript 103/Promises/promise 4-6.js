// using promise to synchronous prosses 
//يستخدم البرومس في حال تاخر نتيج لكد ما فهو يعمل على اكمال البرنامج وحين وصل نتيجة الكود المتأخر ياخذها 
//يستخدم البرومس  بدلاً من كول بالك لتسهيل البرامج والحد من التعقيد الموجود في كول باك من خلال تداخل الدوال وترابطها  


console.log('Start')
// create promise promise takes two parmters :
//resolve with successful case
//reject to handing eror 
const newUser  = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        const userinfo = {
            name: 'khaild',
            age: 11 //19
        }
        resolve(userinfo)

    }, 3000)
})

//Anthor  promise with condation 
const  addNewUser = userinfo => {
    let userAge = userinfo.age
    let adultAge;
    if (userAge >= 18) {
        //resolve
        adultAge = `${userinfo.name} is an adult`
        return Promise.resolve(adultAge)
    }
    else {
        adultAge = `${userinfo.name} is Not an adult`
        return Promise.reject(new Error(adultAge))
    }
    
}

//promise call  
newUser
//in resolev case 
    .then(addNewUser)
    .then(res => {
        console.log('**User info is received**')
        console.log(res)
    })
    // in reject case
    .catch(err => {
        console.log(err.message)
    })

console.log('End')
