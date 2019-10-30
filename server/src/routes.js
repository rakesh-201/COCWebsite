const AuthController = require('./controllers/AuthController')
const Events = require('./controllers/Events')
const Register = require('./controllers/Register');
const upload = require('./middleware/upload')
const GlimpseController = require('./controllers/GLimpseController')

module.exports = (app) => {
    app.post('/register',AuthController.register)

    app.post('/login',AuthController.login)

    app.post('/verify-token',AuthController.verifyToken)

    app.post('/user',AuthController.getUser)

    //Events Paths
    app.get('/events', Events.getEvents);
    app.post('/events', upload.single('COC_Event'), Events.uploadEvent)
    app.get('/events/:id', Events.getEventById);
    app.put('/events/:id', Events.updateEvent);
    app.delete('/events/:id', Events.deleteEvent);

    // Registration
    app.post('/reg-form', Register.regForm);

    app.get('/glimpses',GlimpseController.getPhotos)
}