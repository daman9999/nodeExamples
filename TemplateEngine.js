const express = require('express');
const app =express();




// ****set() will set the ejs engine
app.set('view engine','ejs')
app.get('/profile',(_,resp)=>{
    const user={
        name:"daman",
        age:"22"  
    }

    // ***render will render views and make user as param
    resp.render('profile',{user});
})


app.listen(4000)