const split = require('img-split')
const load = require('img-load')
 
load('./tiles.png', (error, image) => {
  if (error) throw error
  var tiles = split(image, 16, 16)
  for (var tile of tiles) {
    document.body.appendChild(tile)
  }
})

splitter();