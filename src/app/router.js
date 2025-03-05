const userRouter =  require('../app/router/user.router')

module.exports = (app) => {
app.use ('/user', userRouter)
}