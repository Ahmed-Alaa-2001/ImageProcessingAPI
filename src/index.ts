import express, { Application } from 'express';
import homeRoute from './routes/HomeRouter';
import imageRoute from './routes/ImageRouter';
import path from 'path';
import flash from 'connect-flash';
import session from 'express-session';

const app: Application = express();

app.use(session(
    {
    secret: 'this is my secret to hash express sessions',
    resave: false, 
    saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(flash())
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'));

app.use('/', homeRoute);
app.use('/api', imageRoute);

app.listen(3000, () => {
    console.log('server listen on http://localhost:3000/');
});

export default app;