let fs = require('fs');
var path = require('path');
let dir = 'dir';

fs.watch(dir, (eventType, filename) => {
    if(eventType === 'change'){
        console.log(`A ${eventType} on ${filename}`);
        let file = path.join(dir, filename);
        fs.readFile(file, 'utf-8', (error, data) => {
            if (error) throw error;
            console.log(data);
        });
    }
});