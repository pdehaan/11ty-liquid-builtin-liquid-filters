---
title: liquidjs <q>abs</q> filter
name: abs
description: Returns the absolute value of a number.
category: Math
tags:
  - Math
  - abs
---

### INPUT
```liquid
{% raw %}
{{ -17 | abs }}
{% endraw %}
```

### OUTPUT
{{ -17 | abs }}
<!-- Output: 17 -->

---

### INPUT
```liquid
{% raw %}
{{ 4 | abs }}
{% endraw %}
```

### OUTPUT
{{ 4 | abs }}
<!-- Output: 4 -->

---

### INPUT
```liquid
{% raw %}
{{ "-19.86" | abs }}
{% endraw %}
```

### OUTPUT
{{ "-19.86" | abs }}
<!-- Output: 19.86 -->
