// Import the encryptors functions here.
const encryptors = require("./encryptors.js");
const { caesarCipher, symbolCipher, reverseCipher } = encryptors;

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  process.stdout.write("Enter Encryption method you want to use(e.g. CaesarCipher, reverseCipher, symbolCipher)...\n> ");
  if(process.argv[2] === 'caesarCipher'){
    return caesarCipher(str, 6);
  }else if(process.argv[2] === 'reverseCipher'){
    return reverseCipher(str);
  }else{
    return symbolCipher(str);
  }
};

const decodeMessage = (str) => {
  // Use the encryptor functions here.
   return reverseCipher(str);
};

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === "encode") {
    output = encodeMessage(str);
  }
  if (process.argv[2] === "decode") {
    output = decodeMessage(str);
  }

  process.stdout.write(output + "\n");
  process.exit();
};

// Run the program.
process.stdout.write("Enter the message you would like to encrypt...\n> ");
process.stdin.on("data", handleInput);
