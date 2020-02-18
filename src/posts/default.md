---
title: liquidjs <q>default</q> filter
description: Allows you to specify a fallback in case a value doesn’t exist. default will show its value if the left side is `undefined`, `null`, `false`, or empty.
name: default
category: Object
tags:
  - Object
  - default
---

{{ product_price | default: 2.99 }}
<!-- Output: 2.99 -->

{% assign product_price = 4.99 %}
{{ product_price | default: 2.99 }}
<!-- Output: 4.99 -->

{% assign product_price = "" %}
{{ product_price | default: 2.99 }}
<!-- Output: 2.99 -->
