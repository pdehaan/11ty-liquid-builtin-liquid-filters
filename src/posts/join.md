---
title: join
description: ""
category: Array
---

{% assign beatles = "John, Paul, George, Ringo" | split: ", " %}

{{ beatles | join: " and " }}
<!-- Output: "John and Paul and George and Ringo" -->
