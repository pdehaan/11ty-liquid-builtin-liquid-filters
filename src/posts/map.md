---
title: liquidjs <q>map</q> filter
description: ""
name: map
category: Array
tags:
  - Array
  - map

data:
  - category: business
  - category: celebrities
  - category: lifestyle
  - category: sports
  - category: technology
---

{% assign all_categories = data | map: "category" %}
{% for item in all_categories %}
- {{ item }}
{%- endfor %}

<!-- Output:
- business
- celebrities
- lifestyle
- sports
- technology
-->
