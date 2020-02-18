---
title: liquidjs <q>at_least</q> filter
name: at_least
description: Limits a number to a minimum value.
category: Math
related:
  - at_most
tags:
  - Math
  - at_least
---

### INPUT
```liquid
{% raw %}{{ 4 | at_least: 5 }}{% endraw %}
```

### OUTPUT
{{ 4 | at_least: 5 }}
<!-- Output: 5 -->

---

### INPUT
```liquid
{% raw %}{{ 4 | at_least: 3 }}{% endraw %}
```

### OUTPUT
{{ 4 | at_least: 3 }}
<!-- Output: 4 -->
