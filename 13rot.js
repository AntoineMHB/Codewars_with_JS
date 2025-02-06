function rot13(message) {
    return message.split('').map(char => {
      if (/[a-zA-Z]/.test(char)) { // Check if the character is a letter
        const base = char.charCodeAt(0) >= 97 ? 97 : 65; // Determine if it's lowercase or uppercase
        return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
      }
      return char; // Keep non-alphabetic characters unchanged
    }).join('');
  }
  
  console.log(rot13("Ant"));  // "Nag"
  console.log(rot13("Hello, World!"));  // "Uryyb, Jbeyq!"
  