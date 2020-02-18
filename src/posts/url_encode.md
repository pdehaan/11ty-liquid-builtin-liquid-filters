---
title: liquidjs <q>url_encode</q> filter
description: ""
name: url_encode
category: URL
docs:
  liquid: https://shopify.github.io/liquid/filters/url_encode/
---

### INPUT
```liquid
{% raw %}
{{ "john@liquid.com" | url_encode }}
{% endraw %}
```

### OUTPUT
{{ "john@liquid.com" | url_encode }}
<!-- Output: "john%40liquid.com" -->

---

### INPUT
```liquid
{% raw %}
{{ "Tetsuro Takara" | url_encode }}
{% endraw %}
```

### OUTPUT
{{ "Tetsuro Takara" | url_encode }}
<!-- Output: "Tetsuro+Takara" -->
