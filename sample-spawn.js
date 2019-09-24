const { spawn } = require('child_process');
const result = spawn('git' ['branch']);

//opcion resumida
const callback = (data) =>{
    console.log(`stdout: ${data}`);
};

//opcioon con arrow
result.stdout.on('data', (data) => {
 
    console.log(`stdout: ${data}`)
}
); 

