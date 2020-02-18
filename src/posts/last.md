---
title: liquidjs <q>last</q> filter
description: ""
name: last
category: Array
related:
  - first
tags:
  - Array
  - last
---

### INPUT
```liquid
{% raw %}
{{ "Ground control to Major Tom." | split: " " | last }}
{% endraw %}
```

### OUTPUT
{{ "Ground control to Major Tom." | split: " " | last }}
<!-- Output: "Tom." -->

---

### INPUT
```liquid
{% raw %}
{% assign my_array = "zebra, octopus, giraffe, tiger" | split: ", " %}
{{ my_array.last }}
{% endraw %}
```

### OUTPUT 
{% assign my_array = "zebra, octopus, giraffe, tiger" | split: ", " %}
{{ my_array.last }}
<!-- Output: "tiger" -->

---

### INPUT
```liquid
{% raw %}
{% assign my_array = "zebra, octopus, giraffe, tiger" | split: ", " %}
{% if my_array.last == "tiger" %}
  There goes a tiger!
{% endif %}
{% endraw %}
```

### OUTPUT
{% if my_array.last == "tiger" %}
  There goes a tiger!
{% endif %}
<!-- Output: "There goes a tiger!" -->

---

### INPUT
```liquid
{% raw %}
{{ (10..20) | last }}
{% endraw %}
```

### OUTPUT
{{ (10..20) | last }}
<!-- Output: 20 --->
