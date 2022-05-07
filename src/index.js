const http = require("http");

const table = require("./data/data");

http.createServer((req, res) => {
    // Настройка CORS-ов
    res.setHeader(
        "Access-Control-Allow-Origin",
        "*",
        "X-Requested-With,Content-Type,Allow,Access-Control-Allow-Origin"
    );

    // Пагинация по данным из табилцы
    switch (req.url) {
        case "/table":
            return res.end(JSON.stringify(table));

        default:
            return res.end("Page not found!");
    }
}).listen(3000);
