const http = require('http');
const fs = require('fs');

const file = fs.createWriteStream("NotoColorEmoji.ttf");
http.get("http://github.com/googlefonts/noto-emoji/blob/main/fonts/NotoColorEmoji.ttf?raw=true", function(response) {
  response.pipe(file);
})
