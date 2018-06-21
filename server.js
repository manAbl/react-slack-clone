const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ChatkitS = require('pusher-chatkit-server');

const app = express();

const chatkit = new ChatkitS.default({
  instanceLocator:'v1:us1:8fbd043f-7b88-41e3-816a-6a9eb04360cf',
  key:'6a6c76ec-1663-4975-bd5d-c1c33688fa3b:CKYtwSi7YqGqr3rlKN9ViEVKUZFALIUnegRQ9jZpSFM='
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


app.post('/users', (req,res) => {
  const { username } = req.body;

  chatkit.createUser({
    name: username,
    id: username
  }).then(() => res.sendStatus(201)).cacth(error => {
    if( error.error_type === 'services/chatkit/user_already_exists') {
      res.sendStatus(200)
    } else {
      res.status(error.statusCode).json(error)
    }
  })
})

const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})
