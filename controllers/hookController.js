module.exports = function(app){
    app.get('/hook',(req,res,next)=>{
        res.render('hook');
    });
}