var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.locals.pretty = true;

// express가 template를 렌더링하기 위해 필요한 설정
app.set('view engine', 'jade');
app.set('views', './views');

// public이라는 경로에 정적 파일이 위치하도록 지정
app.use(express.static('public'));

// body parser 이라는 모듈(미들웨어) 붙임
// app.body를 사용하려면 body parser 필요
app.use(bodyParser.urlencoded({extended: false})) 		

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

app.get('/topic/:id', function(req, res){
	var topics = [
		'Javascript is ...',
		'Nodejs is ...',
		'Express is...'
	];
	var output = `
	<a href="/topic/0">Javascript</a><br>
	<a href="/topic/1">Nodejs</a><br>
	<a href="/topic/2">Express</a><br><br>
	${topics[req.params.id]}
	`
	res.send(output);	// query string
}
);
app.get('/topic/:id/:mode', function(req, res){
	res.send(req.params.id+' '+req.params.mode);
}
);

app.get('/form', function(req, res){
	res.render('form');
}
);

app.get('/form_receiver', function(req, res){
	var title = req.query.title;
	var desc = req.query.description;
	res.send(title+' '+desc);
}
);

app.post('/form_receiver', function(req, res){
	var title = req.body.title;
	var desc = req.body.description;
	res.send(title+' '+desc);
}
);
app.listen(3000, function(){
	console.log('Connected 3000 port');
}
);

