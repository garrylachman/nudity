# Nudity

Node.js nudity detector based on Nude.js

## Installation

```
$ npm install nudity
```

### Example

```
var nudity = require('nudity');

var imagePath = '/path/to/image.jpg';

nudity.scan(imagePath, function(err, result) {
  console.log(result + ' = ' + imagePath);
});
```

### Test

```
node ./test/test.js [imagePath]
```

