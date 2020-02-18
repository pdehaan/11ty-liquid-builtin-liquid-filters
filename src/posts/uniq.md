---
title: uniq
description: ""
category: Array
docs:
  liquid: https://shopify.github.io/liquid/filters/uniq/
---

{% assign my_array = "ants, bugs, bees, bugs, ants" | split: ", " %}
{{ my_array | uniq | join: ", " }}
<!-- Output: "ants, bugs, bees" -->
