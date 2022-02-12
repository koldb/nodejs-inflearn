const express = require('express');
const app = express();   //expree 만든 사람이 정한 형식이기에 이렇게 써야한다

app.get('/', function(req,res){
    res.send('Hello home page');
});

app.get('/login', function(req,res){
    res.send('<H1>Login please</H1>');
})

app.listen(3000, function(){
   console.log('Conneted 3000 port!');
}
);