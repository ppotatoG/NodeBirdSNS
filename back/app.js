const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.write('<h1>hello node</h1>');
    res.write('<h2>hello node</h2>');
    res.write('<h3>hello node</h3>');
    res.write('<h4>hello node</h4>');

    res.end('<h5>hello node</h5>');
});

server.listen(3065, () => {
    console.log('서버 실행중');
});