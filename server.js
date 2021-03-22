require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
const swaggerJsdocs = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const loginRouter = require('./src/routes/login.route');


const definition = {
    openapi: '3.0.0',
    info: {
        title: 'Task',
        version: '1.0.0',
        description: 'Login api',
        contact: {
            name: 'goldy suryan',
            email: 'goldy.suryan@patchinfotech.com'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
    }
}

const options = {
    definition,
    apis: ['./routes/*.js']
}

const swaggerDocs = swaggerJsdocs(options);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, './client/dist/client')));


// Routes
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use('/', loginRouter);
app.get('*', (req, res) => {
    res.sendFile(__dirname, 'index.html');
})


// Application error handeling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message
        }
    })
});


// Server
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})