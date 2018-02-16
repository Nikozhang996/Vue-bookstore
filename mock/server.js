let http = require('http');
let fs = require('fs');
let url = require('url');

// 获取轮播图数据
let sliders = require('./sliders');

function read (cb) {
  fs.readFile('./books.json', 'utf8', function (err, data) {
    if (err || data.length == 0) {
      cb([]); //如果没有数据，则让数据变成空数组
    } else {
      cb(JSON.parse(data));
    }
  })
}

function write (data, cb) {
  fs.writeFile('./books.json', JSON.stringify(data), cb);
}

http.createServer((req, res) => {
  // 设置跨域头
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1');
  if (req.method == "OPTIONS") {
    return res.end();
  }
  ;

  let {pathname, query} = url.parse(req.url, true);

  // 返回轮播图数据
  if (pathname === '/sliders') {
    res.setHeader('Content-Type', 'application/json;charset=utf8');
    res.end(JSON.stringify(sliders));
    return;
  }

  // 返回热门图书数据
  if (pathname === '/hot') {
    read(function (books) {
      res.setHeader('Content-Type', 'application/json;charset=utf8');
      let hot = books.reverse().slice(0, 6);
      res.end(JSON.stringify(hot));
    });
    return
  }

  // 对书的增删改查
  if (pathname === '/book') {
    let id = parseInt(query.id);
    switch (req.method) {
      case 'GET':
        if (id) {
          read(books => {
            let book = books.find(item => item.bookId === id);
            if (!book) {
              book = {};
            }
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            res.end(JSON.stringify(book));
          });
        } else {
          read(function (books) {
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            res.end(JSON.stringify(books.reverse()));
          })
        }
        break;
      case 'POST':

        break;
      case 'PUT':

        break;
      case 'DELETE':
        read(books => {
          books = books.filter(item => item.bookId !== id)
          write(books, function () {
            res.end(JSON.stringify({}));
          });
        });

    }
  }
}).listen(3000);
