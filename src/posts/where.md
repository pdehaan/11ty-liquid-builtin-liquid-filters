---
title: liquidjs <q>where</q> filter
description: ""
name: where
category: Array
tags:
  - Array
  - where

products:
  - title: Vacuum
    type: floor
    available: true
  - title: Spatula
    type: kitchen
  - title: Television
    type: living room
    available: true
  - title: Garlic press
    type: kitchen
---

All products:
{% for product in products %}
- {{ product.title }} ({{ product.type }})
{%- endfor %}

{% assign kitchen_products = products | where: "type", "kitchen" %}
Kitchen products:
{% for product in kitchen_products %}
- {{ product.title }}
{%- endfor %}

<!-- Output:
All products:
- Vacuum (floor)
- Spatula (kitchen)
- Television (living room)
- Garlic press (kitchen)

Kitchen products:
- Spatula
- Garlic press
-->

Say instead you have a list of products and you only want to show those that are available to buy. You can where with a property name but no target value to include all products with a truthy "available" value.

All products:
{% for product in products %}
- {{ product.title }} (available: {{ product.available }})
{%- endfor %}

{% assign available_products = products | where: "available" %}
Available products:
{% for product in available_products %}
- {{ product.title }}
{%- endfor %}

<!-- Output:
All products:
- Vacuum (available: true)
- Spatula (available: )
- Television (available: true)
- Garlic press (available: )

Available products:
- Vacuum
- Television
-->

The `where` filter can also be used to find a single object in an array when combined with the `first` filter. For example, say you want to show off the latest kitchen product.

{% assign new_kitchen = products | where: "type", "kitchen" | first %}
Featured product: {{ new_kitchen.title }}
<!-- Output: "Featured product: Spatula" -->
