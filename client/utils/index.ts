export const convertToBase64 = (buffer: Buffer) => {
  const baseimg = `data:image/png;base64,${buffer.toString("base64")}`;
  return baseimg;
};

export const AddBase64unit = (string: string) => {
  const base64 = `data:image/png;base64,${string}`;
  return base64;
};

export const convertToBuffer = (string: string) => {
  const buffer = Buffer.from(string, "base64");
  return buffer;
};

export const discountedPrice = (p: number, d: number) => {
  const discountPrice = (p * d) / 100;
  const priceWithDiscount = (p - discountPrice).toFixed(2);
  return priceWithDiscount;
};

export const generateRandomString = (length: number) => {
  const symbols = "!@#$%^&*()_+{}[]|;:,.<>?";
  const numbers = "0123456789";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Ensure at least one symbol, one number, and one uppercase letter
  let randomSymbol = symbols.charAt(Math.floor(Math.random() * symbols.length));
  let randomNumber = numbers.charAt(Math.floor(Math.random() * numbers.length));
  let randomUppercase = uppercaseLetters.charAt(
    Math.floor(Math.random() * uppercaseLetters.length)
  );

  // Generate remaining characters
  const characters = symbols + numbers + uppercaseLetters;
  for (let i = 3; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomSymbol += characters.charAt(randomIndex);
  }

  // Shuffle the characters to ensure the position of the added characters is random
  let shuffledCharacters = randomSymbol + randomNumber + randomUppercase;
  shuffledCharacters = shuffledCharacters
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return shuffledCharacters;
};
