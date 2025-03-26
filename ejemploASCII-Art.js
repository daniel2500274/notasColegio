const colors = require('colors');

function printAsciiArt() {
  const asciiArt = String.raw`
 _   _       _              _____       _            _       
| \ | |     | |            /  __ \     | |          (_)      
|  \| | ___ | |_ __ _ ___  | /  \/ ___ | | ___  __ _ _  ___  
| . \ |/ _ \| __/ _\` / __| | |    / _ \| |/ _ \/ _\` | |/ _ \ 
| |\  | (_) | || (_| \__ \ | \__/\ (_) | |  __/ (_| | | (_) |
\_| \_/\___/ \__\__,_|___/  \____/\___/|_|\___|\__, |_|\___/ 
                                                __/ |        
                                               |___/         
  `;
  console.log(asciiArt.red);
}

printAsciiArt();
