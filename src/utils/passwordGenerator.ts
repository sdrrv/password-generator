enum SelectedUses {
  UpperCase,
  LowerCase,
  Symbols,
  Numbers,
}

const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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

function generate(selectedUses: SelectedUses[]): string {
  let result = "";
  for (const selectedUse of selectedUses) {
    switch (selectedUse) {
      case SelectedUses.UpperCase:
        result += upperCases;
        break;
      case SelectedUses.LowerCase:
        result += lowerCases;
        break;
      case SelectedUses.Numbers:
        result += numbers;
        break;
      case SelectedUses.Symbols:
        result += symbols;
        break;
    }
  }
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

export { passwordGenerator, generate, shuffle, SelectedUses };
