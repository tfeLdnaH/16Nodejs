// before we used read(), now we'll use streams
//The aim is Reading a File with Stream

var fs = require('fs');
var contents;

// INCEPTION BWAAAAAAA!!!!
var rs = fs.createReadStream("app.js");

rs.on('readable', () => {
    var str;
    var d = rs.read();
    if (d) {
        if (typeof d == 'string') {
            str = d;
        } else if (typeof d == 'object' && d instanceof Buffer) {
            str = d.toString('utf8');
        }
        if (str) {
            if (!contents) 
                contents = d;
            else
                contents += str;
        }
    }
});

rs.on('end', () => {
    console.log("read in the file contents: ");
    console.log(contents.toString('utf8'));
});

//Working with buffer
/*
var b1 = new Buffer("My name is ");
var b2 = new Buffer("Marc");
var b3 = Buffer.concat([ b1, b2 ]);
console.log(b3.toString('utf8')); */