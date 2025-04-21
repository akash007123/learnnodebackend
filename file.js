const fs = require ("fs");
const os = require ("os");

// Sync
// fs.writeFileSync("text.txt", "Hello there Mr. JS", )


// Async
// fs.writeFile("text.txt", "Hello there Mr. JS Async", (err) => {});


// Sync
// const result = fs.readFileSync("contacts.txt", "utf-8", );
// console.log(result);

// Async
// fs.readFile("contacts.txt", "utf-8", (err, result) =>{
//     if(err){
//         console.log("Error", err);
//     }else{
//         console.log(result)
//     }
// } );

// for Append
// fs.appendFileSync("contacts.txt", `${Date.now()} Hey There\n`);

// for copy file and create new file
// fs.cpSync("next.txt", "contacts.txt");

// Unlink/Delete File
// fs.unlinkSync("next.txt");

// Know about the file
// console.log(fs.statSync("contacts.txt"));


// For Create new file & Folder
// fs.mkdirSync("NewFolderr/a/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z", {recursive: true});


// console.log("1")

// fs.readFile("contacts.txt", "utf-8", (err, result) => {
//     console.log(result);
// });

// console.log("2")


console.log(os.cpus().length);

