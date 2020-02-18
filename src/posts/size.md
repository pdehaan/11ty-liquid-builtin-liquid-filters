---
title: size
description: ""
category: Array

data:
  - apples
  - oranges
  - peaches
  - plums
---

{{ "Ground control to Major Tom." | size }}
<!-- Output: 28 -->

{% assign my_array = data %}
{{ my_array.size }}
<!-- Output: 4 -->

You can use `size` with dot notation when you need to use the filter inside a tag:

{% if data.size < 10 %}
  This is a small website!
{% endif %}
<!-- Output: "This is a small website!" -->