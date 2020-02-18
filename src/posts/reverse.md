---
title: reverse
description: ""
category: Array
---

{% assign my_array = "apples, oranges, peaches, plums" | split: ", " %}
{{ my_array | reverse | join: ", " }}
<!-- Output: "plums, peaches, oranges, apples" -->

Although `reverse` cannot be used directly on a string, you can split a string into an array, reverse the array, and rejoin it by chaining together filters:

{{ "Ground control to Major Tom." | split: "" | reverse | join: "" }}
<!-- Output: ".moT rojaM ot lortnoc dnuorG" -->
