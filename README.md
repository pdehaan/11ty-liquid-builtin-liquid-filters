# 11ty-liquid-builtin-liquid-filters

Liquidjs built-in filters.

BUILT IN LIQUID FILTERS (as of liquidjs@6.4.3 via eleventy@0.10.0):

| NAME | DESCRIPTION | CATEGORY |
|------|-------------|----------|
| `abs` | Returns the absolute value of a number. | Math
| `append` | Concatenates two strings and returns the concatenated value. | String
| `at_least` | Limits a number to a minimum value. | Math
| `at_most` | Limits a number to a maximum value. | Math
| `capitalize` | Makes the first character of a string capitalized. | String
| `ceil` | Rounds the input up to the nearest whole number. Liquid tries to convert the input to a number before the filter is applied. | Math
| `compact` | Removes any `nil` values from an array. | Array
| `concat` | Concatenates (joins together) multiple arrays. The resulting array contains all the items from the input arrays. | Array
| `date` | Converts a timestamp into another date format. The format for this syntax is the same as [**strftime**](http://strftime.net/). | Date
| `default` | Allows you to specify a fallback in case a value doesn’t exist. default will show its value if the left side is `undefined`, `null`, `false`, or empty. | Object
| `divided_by` | Divides a number by another number. | Math
| `downcase` | Makes each character in a string lowercase. It has no effect on strings which are already all lowercase. | String
| `escape` | Escapes a string by replacing characters with escape sequences (so that the string can be used in a URL, for example). It doesn’t change strings that don’t have anything to escape. | HTML
| `escape_once` | Escapes a string without changing existing escaped entities. It doesn’t change strings that don’t have anything to escape. | HTML
| `first` | Returns the first item of an array. | Array
| `floor` | Rounds the input down to the nearest whole number. Liquid tries to convert the input to a number before the filter is applied. | Math
| `join` | Combines the items in an array into a single string using the argument as a separator. | Array
| `last` | Returns the last item of an array. | Array
| `lstrip` | Removes all whitespace (tabs, spaces, and newlines) from the left side of a string. It does not affect spaces between words. | String
| `map` | Creates an array of values by extracting the values of a named property from another object. | Array
| `minus` | Subtracts a number from another number. | Math
| `modulo` | Returns the remainder of a division operation. | Math
| `newline_to_br` | Replaces every newline (`\n`) in a string with an HTML line break (`<br />`). | HTML
| `plus` | Adds a number to another number. | Math
| `prepend` | Adds the specified string to the beginning of another string. | String
| `remove` | Removes every occurrence of the specified substring from a string. | String
| `remove_first` | Removes only the first occurrence of the specified substring from a string. | String
| `replace` | Replaces every occurrence of the first argument in a string with the second argument. | String
| `replace_first` | Replaces only the first occurrence of the first argument in a string with the second argument. | String
| `reverse` | Reverses the order of the items in an array. `reverse` cannot reverse a string. | Array
| `round` | Rounds a number to the nearest integer or, if a number is passed as an argument, to that number of decimal places. | Math
| `rstrip` | Removes all whitespace (tabs, spaces, and newlines) from the right side of a string. It does not affect spaces between words. | String
| `size` | Returns the number of characters in a string or the number of items in an array. | Array / String
| `slice` | Returns a substring of 1 character beginning at the index specified by the first argument. An optional second argument specifies the length of the substring to be returned. String indices are numbered starting from 0. | Array
| `sort` | Sorts items in an array in case-sensitive order. | Array
| `sort_natural` | Sorts items in an array in case-insensitive order. | Array
| `split` | Divides a string into an array using the argument as a separator. `split` is commonly used to convert comma-separated items from a string to an array. | String
| `strip` | Removes all whitespace (tabs, spaces, and newlines) from both the left and right sides of a string. It does not affect spaces between words. | String
| `strip_html` | Removes any HTML tags from a string. | HTML
| `strip_newlines` | Removes any newline characters (line breaks) from a string. | String
| `times` | Multiplies a number by another number. | Math
| `truncate` | Shortens a string down to the number of characters passed as an argument. If the specified number of characters is less than the length of the string, an ellipsis (`…`) is appended to the string and is included in the character count. | String
| `truncatewords` | Shortens a string down to the number of words passed as an argument. If the specified number of words is less than the number of words in the string, an ellipsis (`…`) is appended to the string. | String
| `uniq` | Removes any duplicate elements in an array. | Array
| `upcase` | Makes each character in a string uppercase. It has no effect on strings which are already all uppercase. | String
| `url_decode` | Decodes a string that has been encoded as a URL or by `url_encode`. | URL
| `url_encode` | Converts any URL-unsafe characters in a string into percent-encoded characters. | URL
| `where` | Creates an array including only the objects with a given property value, or any truthy value by default. | Array
