const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');

app.use(express.json());
app.use('/auth',authRoutes);

app.get('/', (req , res) =>
{
    res.send('Auth API is running!');
});


const PORT = 3000;
app.listen(PORT , () =>
{
    console.log(`Server running http://localhost:${PORT}`);
})