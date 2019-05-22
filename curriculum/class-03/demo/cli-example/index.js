// Get args from command line
let args = process.argv;

// Make sure used properly, error if not
if(args.length < 5){
  console.error('Not enough args');
  return; //read: end process, however that needs to happen
}

let sourceFile = args[2];
let destFile = args[3];
let operation = args[4];

// Else, do work
for(let i = 0; i < args.length; i++){
  console.log(args[i]);
}