---
title: truncate
description: ""
category: String
docs:
  - liquid: https://shopify.github.io/liquid/filters/truncate/
---

{{ "Ground control to Major Tom." | truncate: 20 }}
<!-- Output: "Ground control to..." -->
{{ "Ground control to Major Tom." | truncate: 20 | size }}
<!-- Output: 20 -->

## Custom ellipsis

`truncate` takes an optional second argument that specifies the sequence of characters to be appended to the truncated string. By default this is an ellipsis (…), but you can specify a different sequence.

The length of the second argument counts against the number of characters specified by the first argument. For example, if you want to truncate a string to exactly 10 characters, and use a 3-character ellipsis, use 13 for the first argument of `truncate`, since the ellipsis counts as 3 characters.

{{ "Ground control to Major Tom." | truncate: 25, ", and so on" }}
<!-- Output: "Ground control, and so on" -->
{{ "Ground control to Major Tom." | truncate: 25, ", and so on" | size }}
<!-- Output: 25 -->

## No ellipsis

You can truncate to the exact number of characters specified by the first argument and avoid showing trailing characters by passing a blank string as the second argument:

{{ "Ground control to Major Tom." | truncate: 20, "" }}
<!-- Output: "Ground control to Ma" -->
{{ "Ground control to Major Tom." | truncate: 20, "" | size }}
<!-- Output: 20 -->
