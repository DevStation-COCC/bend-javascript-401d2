// Get args from command line
let args = process.argv;

// Make sure used properly, error if not
if(args.length < 5){
  console.error('Not enough args');
  return; //read: end process, however that needs to happen
}

// Else, do work
for(let i = 2; i < args.length; i++){
  console.log(args[i]);
}