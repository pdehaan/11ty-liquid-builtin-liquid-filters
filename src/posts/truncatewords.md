---
title: truncatewords
description: ""
category: String
docs:
  liquid: https://shopify.github.io/liquid/filters/truncatewords/
---

{{ "Ground control to Major Tom." | truncatewords: 3 }}
<!-- Output: "Ground control to..." -->

## Custom ellipsis

`truncatewords` takes an optional second argument that specifies the sequence of characters to be appended to the truncated string. By default this is an ellipsis (…), but you can specify a different sequence.

{{ "Ground control to Major Tom." | truncatewords: 3, "--" }}
<!-- Output: "Ground control to--" -->

## No ellipsis

You can avoid showing trailing characters by passing a blank string as the second argument:

{{ "Ground control to Major Tom." | truncatewords: 3, "" }}
<!-- Output: "Ground control to" -->
