const express = require('express');
const cors = require('cors');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const passportConfig = require('./passport');

const app = express();

const db = require('./models');
db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공?');
    })
    .catch(console.error);

passportConfig();

app.use(cors({
    origin: true
}));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('hello express');
})

app.get('/', (req, res) => {
    res.send('hello api');
})

app.get('/posts', (req, res) => {
    res.json([
        {
            id : 1,
            content : 'hello1'
        },
        {
            id : 2,
            content : 'hello2'
        },
        {
            id : 3,
            content : 'hello3'
        }
    ])
})

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
    console.log('서버 실행중!');
});