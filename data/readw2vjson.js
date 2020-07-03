var fs = require('fs');
eval(fs.readFileSync('./wordvecs10000.js') + '');

var vecs = [];

for (const [id, vector] of Object.entries(wordVecs)) {
    vecs.push({
        "id": id,
        "vector": vector
    });
};

var json = JSON.stringify(vecs);

fs.writeFile('wordvecs10000.json', json, function (err) {
    if (err) throw err;
    console.log('complete');
});
