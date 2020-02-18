---
title: split
description: ""
category: String
---

{% assign beatles = "John, Paul, George, Ringo" | split: ", " %}
{% for member in beatles %}
- {{ member }}
{%- endfor %}
<!-- Output:
- John
- Paul
- George
- Ringo
-->
