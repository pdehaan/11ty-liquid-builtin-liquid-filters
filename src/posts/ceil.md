---
title: liquidjs <q>ceil</q> filter
description: Rounds the input up to the nearest whole number. Liquid tries to convert the input to a number before the filter is applied.
name: ceil
category: Math
related:
  - floor
  - round
tags:
  - Math
  - ceil
---

{{ 1.2 | ceil }}
<!-- Output: 2 -->

{{ 2.0 | ceil }}
<!-- Output: 2 -->

{{ 183.357 | ceil }}
<!-- Output: 184 -->

{{ "3.5" | ceil }}
<!-- Output: 4 -->
