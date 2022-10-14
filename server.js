const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

const PORT = process.env.PORT || 8080
app.get('/', function (req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});