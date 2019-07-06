const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
// const path = require('path');
// const passport = require('passport');


const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());


app.use(cors());

const  mongoURI= "mongodb://localhost:27017/mevnloginreg"
mongoose.connect(mongoURI, {
    useNewUrlParser: true
}).then(() => {
    console.log("MongoDB Connected")
}).catch(err => {
    console.log(err)
});
const Users = require('./routes/Users');
app.use('/users', Users);

app.listen(PORT, () => {
    console.log("Server is running on port :"+PORT);
})




// Seting up the static directory
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(passport.initialize());

// require('./config/passport')(passport);

// const db = require('./config/keys').mongoURI;
// mongoose.connect(db, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log(`Database connected successfully ${db}`)
// }).catch(err => {
//     console.log(`Unable to connect with the database ${err}`)
// });

// app.get('/', (req, res) => {
//     return res.send("<h1>Hello World</h1>");
// });

// const users = require('./routes/api/users');
// app.use('/api/users', users);


// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// })



// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// })





