---
title: sort
description: ""
category: Array

my_array:
  - zebra
  - octopus
  - giraffe
  - Sally Snake

products:
  - title: wrench
    price: 4.99
  - title: screwdriver
    price: 1.99
  - title: saw
    price: 12.99
  - title: hammer
    price: 7.99
---

{{ my_array | sort | join: ", " }}
<!-- Output: "Sally Snake, giraffe, octopus, zebra" -->

{% comment %}
An optional argument specifies which property of the array’s items to use for sorting.

{% assign products_by_price = products | sort: "price" %}
{% for product in products_by_price %}
- {{ product.title }} ({{ product.price }})
{%- endfor %}
<!-- Output: "" -->
{% endcomment %}
