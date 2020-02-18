---
title: liquidjs <q>concat</q> filter
description: Concatenates (joins together) multiple arrays. The resulting array contains all the items from the input arrays.
name: concat
category: Array
tags:
  - Array
  - concat

fruits:
  - apples
  - oranges
  - peaches

vegetables:
  - carrots
  - turnips
  - potatoes

furniture:
  - chairs
  - tables
  - shelves
---

{% assign everything = fruits | concat: vegetables %}
{% for item in everything %}
- {{ item }}
{%- endfor %}

You can string together `concat` filters to join more than two arrays:

{% assign everything = fruits | concat: vegetables | concat: furniture %}
{% for item in everything %}
- {{ item }}
{%- endfor %}
