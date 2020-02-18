---
title: liquidjs <q>at_most</q> test
name: at_most
description: Limits a number to a maximum value.
category: Math
related:
  - at_least
tags:
  - Math
  - at_most
---

{{ 4 | at_most: 5 }}
<!-- Output: 4 -->

{{ 4 | at_most: 3 }}
<!-- Output: 3 -->
