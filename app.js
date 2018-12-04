var express = require('express');
var app = express();

app.locals.pretty = true;

// express가 template를 렌더링하기 위해 필요한 설정
app.set('view engine', 'jade');
app.set('views', './views');

// public이라는 경로에 정적 파일이 위치하도록 지정
app.use(express.static('public'));

// Routing(get) & Controller(res.send)
app.get('/', function(req, res){
	res.send('Hello World');
}
);
app.get('/login', function(req, res){
	res.send('<h1>Login please</h1>');
}
);
app.get('/route', function(req, res){
	res.send('<img src="/static_image.jpg">');
}
);

app.get('/template', function(req, res){
	res.render('temp', {time: Date(), _title: 'Jade'});
}
);


app.listen(3000, function(){
	console.log('Connected 3000 port');
}
);

