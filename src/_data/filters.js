module.exports = [
  {
    name: "abs",
    description: "Returns the absolute value of a number.",
    category: "Math"
  },
  {
    name: "append",
    description: "Concatenates two strings and returns the concatenated value.",
    category: "String"
  },
  {
    name: "at_least",
    description: "Limits a number to a minimum value.",
    category: "Math"
  },
  {
    name: "at_most",
    description: "Limits a number to a maximum value.",
    category: "Math"
  },
  {
    name: "capitalize",
    description: "Makes the first character of a string capitalized.",
    category: "String"
  },
  {
    name: "ceil",
    description:
      "Rounds the input up to the nearest whole number. Liquid tries to convert the input to a number before the filter is applied.",
    category: "Math"
  },
  {
    name: "compact",
    description: "Removes any `nil` values from an array.",
    category: "Array"
  },
  {
    name: "concat",
    description:
      "Concatenates (joins together) multiple arrays. The resulting array contains all the items from the input arrays.",
    category: "Array"
  },
  {
    name: "date",
    description:
      "Converts a timestamp into another date format. The format for this syntax is the same as [**strftime**](http://strftime.net/).",
    category: "Date"
  },
  {
    name: "default",
    description:
      "Allows you to specify a fallback in case a value doesn’t exist. default will show its value if the left side is `undefined`, `null`, `false`, or empty.",
    category: "Object"
  },
  {
    name: "divided_by",
    description: "Divides a number by another number.",
    category: "Math"
  },
  {
    name: "downcase",
    description:
      "Makes each character in a string lowercase. It has no effect on strings which are already all lowercase.",
    category: "String"
  },
  {
    name: "escape",
    description:
      "Escapes a string by replacing characters with escape sequences (so that the string can be used in a URL, for example). It doesn’t change strings that don’t have anything to escape.",
    category: "HTML"
  },
  {
    name: "escape_once",
    description:
      "Escapes a string without changing existing escaped entities. It doesn’t change strings that don’t have anything to escape.",
    category: "HTML"
  },
  {
    name: "first",
    description: "Returns the first item of an array.",
    category: "Array"
  },
  {
    name: "floor",
    description:
      "Rounds the input down to the nearest whole number. Liquid tries to convert the input to a number before the filter is applied.",
    category: "Math"
  },
  {
    name: "join",
    description:
      "Combines the items in an array into a single string using the argument as a separator.",
    category: "Array"
  },
  {
    name: "last",
    description: "Returns the last item of an array.",
    category: "Array"
  },
  {
    name: "lstrip",
    description:
      "Removes all whitespace (tabs, spaces, and newlines) from the left side of a string. It does not affect spaces between words.",
    category: "String"
  },
  {
    name: "map",
    description:
      "Creates an array of values by extracting the values of a named property from another object.",
    category: "Array"
  },
  {
    name: "minus",
    description: "Subtracts a number from another number.",
    category: "Math"
  },
  {
    name: "modulo",
    description: "Returns the remainder of a division operation.",
    category: "Math"
  },
  {
    name: "newline_to_br",
    description:
      "Replaces every newline (`\n`) in a string with an HTML line break (`<br />`).",
    category: "HTML"
  },
  {
    name: "plus",
    description: "Adds a number to another number.",
    category: "Math"
  },
  {
    name: "prepend",
    description:
      "Adds the specified string to the beginning of another string.",
    category: "String"
  },
  {
    name: "remove",
    description:
      "Removes every occurrence of the specified substring from a string.",
    category: "String"
  },
  {
    name: "remove_first",
    description:
      "Removes only the first occurrence of the specified substring from a string.",
    category: "String"
  },
  {
    name: "replace",
    description:
      "Replaces every occurrence of the first argument in a string with the second argument.",
    category: "String"
  },
  {
    name: "replace_first",
    description:
      "Replaces only the first occurrence of the first argument in a string with the second argument.",
    category: "String"
  },
  {
    name: "reverse",
    description:
      "Reverses the order of the items in an array. `reverse` cannot reverse a string.",
    category: "Array"
  },
  {
    name: "round",
    description:
      "Rounds a number to the nearest integer or, if a number is passed as an argument, to that number of decimal places.",
    category: "Math"
  },
  {
    name: "rstrip",
    description:
      "Removes all whitespace (tabs, spaces, and newlines) from the right side of a string. It does not affect spaces between words.",
    category: "String"
  },
  {
    name: "size",
    description:
      "Returns the number of characters in a string or the number of items in an array.",
    category: "Array"
  },
  {
    name: "slice",
    description:
      "Returns a substring of 1 character beginning at the index specified by the first argument. An optional second argument specifies the length of the substring to be returned. String indices are numbered starting from 0.",
    category: "Array"
  },
  {
    name: "sort",
    description: "Sorts items in an array in case-sensitive order.",
    category: "Array"
  },
  {
    name: "sort_natural",
    description: "Sorts items in an array in case-insensitive order.",
    category: "Array"
  },
  {
    name: "split",
    description:
      "Divides a string into an array using the argument as a separator. `split` is commonly used to convert comma-separated items from a string to an array.",
    category: "String"
  },
  {
    name: "strip",
    description:
      "Removes all whitespace (tabs, spaces, and newlines) from both the left and right sides of a string. It does not affect spaces between words.",
    category: "String"
  },
  {
    name: "strip_html",
    description: "Removes any HTML tags from a string.",
    category: "HTML"
  },
  {
    name: "strip_newlines",
    description: "Removes any newline characters (line breaks) from a string.",
    category: "String"
  },
  {
    name: "times",
    description: "Multiplies a number by another number.",
    category: "Math"
  },
  {
    name: "truncate",
    description:
      "Shortens a string down to the number of characters passed as an argument. If the specified number of characters is less than the length of the string, an ellipsis (`…`) is appended to the string and is included in the character count.",
    category: "String"
  },
  {
    name: "truncatewords",
    description:
      "Shortens a string down to the number of words passed as an argument. If the specified number of words is less than the number of words in the string, an ellipsis (`…`) is appended to the string.",
    category: "String"
  },
  {
    name: "uniq",
    description: "Removes any duplicate elements in an array.",
    category: "Array"
  },
  {
    name: "upcase",
    description:
      "Makes each character in a string uppercase. It has no effect on strings which are already all uppercase.",
    category: "String"
  },
  {
    name: "url_decode",
    description:
      "Decodes a string that has been encoded as a URL or by `url_encode`.",
    category: "URL"
  },
  {
    name: "url_encode",
    description:
      "Converts any URL-unsafe characters in a string into percent-encoded characters.",
    category: "URL"
  },
  {
    name: "where",
    description:
      "Creates an array including only the objects with a given property value, or any truthy value by default.",
    category: "Array"
  }
];
