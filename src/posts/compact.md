---
title: liquidjs <q>compact</q> filter
description: Removes any falsey values from an array.
name: compact
category: Math
tags:
  - Math
  - compact

data:
  - category: business
  - category: celebrities
  - category: 
  - category: lifestyle
  - category: sports
  - category:
  - category: technology
---

{% assign site_categories = data | map: "category" %}
{% for category in site_categories %}
- {{ category }}
{%- endfor %}

By using `compact` when we create our `data` array, we can remove all the falsey values in the array.

{% assign site_categories = data | map: "category" | compact %}
{% for category in site_categories %}
- {{ category }}
{%- endfor %}
