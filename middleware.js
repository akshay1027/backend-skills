const express = require('express');
const app = express();
// with the help of app, i can use all the express properties and methods of express!

// middleware will not allow the current function without the user fulfilling our requirements!
// example the user cant visit about us page without loggin in, this can be one using next() parameter in middleware fuction!
// user ek page me jana hai, at that time before going to that page, 
// we want to do the work in between (beech ka kaam) and then only allow user to that page!

const middleware = (req,res,next) => {
    console.log("hello my middleware, middleware executed before about!");
    next();
}

// syntax: app.get( path, callback )
// get http method. likeweise we have post, patch etc!

// when user visits / page, we send back "hello world form server".

app.get('/about',middleware,(req, res) => {
    console.log("about executed next");
    res.send("about world form server");
});


app.listen(5000, () => {
    console.log(`server running at port 5000`);
})

// comsole.log 
/*
server running at port 5000
hello my middleware, middleware executed before about!
about executed next
*/
