enum SelectedUses {
  UpperCase,
  LowerCase,
  Symbols,
  Numbers,
}

const upperCases = "ABCDEFGHIJKLMNOPQRSTUVXZ";
const lowerCases = upperCases.toLowerCase();
const symbols = '!"#$%&/()=@€+*,';
const numbers = "0123456789";

function shuffle(str: string): string {
  return str
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
}

function generate(selectedUses: SelectedUses): string {
  let result = "";
  if (selectedUses === SelectedUses.UpperCase) result += upperCases;
  if (selectedUses == SelectedUses.LowerCase) result += lowerCases;
  if (selectedUses === SelectedUses.Symbols) result += symbols;
  if (selectedUses === SelectedUses.Numbers) result += numbers;
  return shuffle(result);
}

function passwordGenerator(length: number, chars: string): string {
  let result = "";
  const charsLength = chars.length;
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  return result;
}

export { passwordGenerator, generate, shuffle };
