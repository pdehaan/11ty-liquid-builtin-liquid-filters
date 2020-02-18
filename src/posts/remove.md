---
title: liquidjs <q>remove</q> filter
description: ""
name: remove
category: String
tags:
  - String
  - remove
---

### INPUT
```liquid
{% raw %}
{{ "I strained to see the train through the rain" | remove: "rain" }}
{% endraw %}
```

### OUTPUT
{{ "I strained to see the train through the rain" | remove: "rain" }}
<!-- Output: "I sted to see the t through the " -->
