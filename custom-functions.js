var latin = /[ABCEHIKMOPTXaceiopyx]/g;
var latinToCyrillic = {
  A: "А",
  B: "В",
  C: "С",
  E: "Е",
  H: "Н",
  I: "І",
  K: "К",
  M: "М",
  O: "О",
  P: "Р",
  T: "Т",
  X: "Х",
  a: "а",
  c: "с",
  e: "е",
  i: "і",
  o: "о",
  p: "р",
  y: "у",
  x: "х"
};

/**
 * Replaces all latin symbols to cyryllic.
 * @customfunction
 * @param {string} string
 * @returns The new string without latin symbols.
 */
function replaceAllLatin(s) {
  return s.replace(latin, function(letter) {
    return latinToCyrillic[letter];
  });
}

var replaceApostrophePattern = /[а-яєіїґ][’‘′`´'][а-яєіїґ]/gi;
var zgLettersPattern = /зг/gi;
var zgLetters = { "Зг": "Zgh", "зг": "zgh", "ЗГ": "ZGH" };
var firstLetters = {
  "Є": "Ye",
  "Ї": "Yi",
  "Й": "Y",
  "Ю": "Yu",
  "Я": "Ya",
  "є": "ye",
  "ї": "yi",
  "й": "y",
  "ю": "yu",
  "я": "ya"
};

var otherLetters = {
  "А": "A",
  "Б": "B",
  "В": "V",
  "Г": "H",
  "Ґ": "G",
  "Д": "D",
  "Е": "E",
  "Є": "Ie",
  "Ж": "Zh",
  "З": "Z",
  "И": "Y",
  "І": "I",
  "Ї": "I",
  "Й": "I",
  "К": "K",
  "Л": "L",
  "М": "M",
  "Н": "N",
  "О": "O",
  "П": "P",
  "Р": "R",
  "С": "S",
  "Т": "T",
  "У": "U",
  "Ф": "F",
  "Х": "Kh",
  "Ц": "Ts",
  "Ч": "Ch",
  "Ш": "Sh",
  "Щ": "Shch",
  "Ь": "",
  "Ъ": "",
  "Ы": "Y",
  "Э": "E",
  "Ю": "Iu",
  "Я": "Ia",
  "а": "a",
  "б": "b",
  "в": "v",
  "г": "h",
  "ґ": "g",
  "д": "d",
  "е": "e",
  "є": "ie",
  "ж": "zh",
  "з": "z",
  "и": "y",
  "і": "i",
  "ї": "i",
  "й": "i",
  "к": "k",
  "л": "l",
  "м": "m",
  "н": "n",
  "о": "o",
  "п": "p",
  "р": "r",
  "с": "s",
  "т": "t",
  "у": "u",
  "ф": "f",
  "х": "kh",
  "ц": "ts",
  "ч": "ch",
  "ш": "sh",
  "щ": "shch",
  "ь": "",
  "ъ": "",
  "ы": "Y",
  "э": "E",
  "ю": "iu",
  "я": "ia"
};

/**
 * Transliterates Ukrainain names to latin.
 * @customfunction
 * @param {string} string
 * @returns The transliterated string.
 */

function translit(s) {

  s = s.replace(replaceApostrophePattern, function (str) { return str.replace(/[’‘′`´']/g, "") });
  s = s.replace(zgLettersPattern, function (letter) { return zgLetters[letter] });
  s = s.replace(/^([єїйюя])/ig, function (letter) { return firstLetters[letter] });
  s = s.replace(/[^а-яєіїґё'][єїйюя]/ig, function (letters) { return letters[0] + firstLetters[letters[1]] });
  s = s.replace(/[а-яєіїґ]/gi, function (letter) { return otherLetters[letter] });
  return s
}

CustomFunctions.associate('UKRTRANSLIT', translit)