const { exec } = require('child_process');

const command = 'git branch';
const handle =( err, stdout, stderr) => {
     console.log(stdout);  
};
exec(command,handle);