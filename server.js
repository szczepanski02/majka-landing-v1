function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
      return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}
const express = require('express');
const app = express();
app.use(express.static('./dist/majka-landing-v1'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/majka-landing-v1/'}
);
});

app.listen(process.env.PORT || 4000);
console.log('http://localhost:8080/');