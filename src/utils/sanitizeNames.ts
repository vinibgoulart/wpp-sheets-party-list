export const sanitizeNames = (input: string) => {
  const regex = /[^\w\s]+/g; //
  const lines = input.split(/\n|,/);
  const sanitizedNames = [];

  for (let line of lines) {
    const sanitizedLine = line.trim().replace(regex, "");
    if (sanitizedLine.length > 0) {
      sanitizedNames.push(sanitizedLine);
    }
  }

  const uniqueNames = Array.from(new Set(sanitizedNames));
  const formattedNames = uniqueNames.map((name) => {
    const words = name.toLowerCase().split(" ");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join(" ");
  });

  return formattedNames.sort();
};
