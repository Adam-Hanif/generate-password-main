function generatePassword(length, level, passwordCount) {
  const digits = "0123456789";
  const symbols = "!#$%&()*+,-./:;<=>?@[]^_{|}~";

  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let newPassword = "";
  let levelStatus = alphabet;

  const passwords = [];

  if (
    level !== undefined &&
    level !== "easy" &&
    level !== "medium" &&
    level !== "hard"
  ) {
    return "ошибка во втором параметре";
  }

  if (level === "easy") {
    levelStatus = alphabet;
  }

  if (level === "medium") {
    levelStatus = alphabet + digits;
  }

  if (level === "hard") {
    levelStatus = alphabet + digits + symbols;
  }

  if (passwordCount !== undefined) {
    for (let i = 0; i < passwordCount; i++) {
      for (let i = 0; i < length; i++) {
        const random = Math.round(Math.random() * levelStatus.length);
        const randomSymbol = levelStatus[random];

        newPassword += randomSymbol;
      }

      passwords.push(newPassword);
    }

    return passwords;
  } else {
    for (let i = 0; i < length; i++) {
      const random = Math.round(Math.random() * levelStatus.length);
      const randomSymbol = levelStatus[random];

      newPassword += randomSymbol;
    }

    return newPassword;
  }
}

console.log(generatePassword(10, "easy", 2));
