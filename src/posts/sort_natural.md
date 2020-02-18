---
title: sort_natural
description: ""
category: Array

my_array:
  - zebra
  - octopus
  - giraffe
  - Sally Snake
---

{{ my_array | sort_natural | join: ", " }}
<!-- Output: "giraffe, octopus, Sally Snake, zebra" -->

{% comment %}
An optional argument specifies which property of the array’s items to use for sorting.

{% assign products_by_company = collection.products | sort_natural: "company" %}
{% for product in products_by_company %}
  <h4>{{ product.title }}</h4>
{% endfor %}
{% endcomment %}