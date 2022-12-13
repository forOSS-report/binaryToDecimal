const express = require('express'); 
const app = express(); 
const port = 3000; 
const path = require('path'); 
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

app.get('/', (req, res) => {
    res.render('index');  
}); 


app.listen(port, () => {
    console.log("server is 실행중~"); 
}); 
