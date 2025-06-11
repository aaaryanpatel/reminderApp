import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/reminders', (req, res) => {
    res.send('get all reminders')
})

app.get('/reminders/:id', (req,res) => {
    res.send("Get reminder by id")
})

app.post('/reminders', (req, res) => {
    res.send("create new reminders")
})

app.patch('/reminders/:id', (req, res) => {
    res.send('Update the remiders')
})

app.delete('/reminders/:id', (req, res) => {
    res.send('delete old reminder')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})