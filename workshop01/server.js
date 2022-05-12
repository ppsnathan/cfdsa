var express = require('express')
var app = express()

const quotes = [
  'Logic will get you from A to B. Imagination will take you everywhere.',
  "There are 10 kinds of people. Those who know binary and those who don't.",
  'There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.',
  "It's not that I'm so smart, it's just that I stay with problems longer.",
  'It is pitch dark. You are likely to be eaten by a grue.',
]

const numberOfQuotes = quotes.length

function randomQuote() {
  const randomIndex = Math.floor(Math.random() * numberOfQuotes)
  return quotes[randomIndex]
}

// set the view engine to ejs
app.set('view engine', 'ejs')
app.use(express.static('public'));
// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
  const quote = randomQuote()
  res.render('index', { quote })
})

app.listen(80)
console.log('Server is listening on port 80')
