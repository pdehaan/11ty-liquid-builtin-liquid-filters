---
title: prepend
description: ""
category: String
---

{{ "apples, oranges, and bananas" | prepend: "Some fruit: " }}
<!-- Output: "Some fruit: apples, oranges, and bananas" -->

`prepend` can also be used with variables:

{% assign url = "example.com" %}
{{ "/index.html" | prepend: url }}
<!-- Output: "example.com/index.html" -->
