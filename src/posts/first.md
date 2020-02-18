---
title: first
description: ""
category: Array
tags:
  - array
---

{{ "Ground control to Major Tom." | split: " " | first }}
<!-- Output: "Ground" -->

{% assign my_array = "zebra, octopus, giraffe, tiger" | split: ", " %}
{{ my_array.first }}
<!-- Output: "zebra" -->

{% if my_array.first == "zebra" %}
  Here comes a zebra!
{% endif %}
<!-- Output: "Here comes a zebra!" -->
