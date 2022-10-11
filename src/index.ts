import express, { Express } from 'express';
import routes from './routes/posts';

const app: Express = express();
app.listen(5050, () => console.log('listening at 5050'))

/** Parse  request */
app.use(express.urlencoded({ extended: false }));
/** Handle JSON data */
app.use(express.json({ limit: '1mb' }));

app.use(express.static('public'));

app.post('/reference', (req, res) => {
    console.log(req.body)
    const id = req.body.id;
    const url = req.body.url;
    const title = req.body.title;
    const body = req.body.body;
    const created_at = Date.now()
    console.log('I got a POST request!');
    res.send(JSON)
})

/* API RULES */
app.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

/** Routes */
app.use('/', routes);

/** Error handling */
app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});


