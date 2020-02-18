---
title: liquidjs <q>append</q> filter
name: append
description: Concatenates two strings and returns the concatenated value.
category: String
related:
  - preprend
tags:
  - String
  - append
---

### INPUT
```liquid
{% raw %}
{{ "/my/fancy/url" | append: ".html" }}
{% endraw %}
```

### OUTPUT
{{ "/my/fancy/url" | append: ".html" }}
<!-- Output: "/my/fancy/url.html" -->

---

### INPUT
```liquid
{% raw %}
{% assign filename = "/index.html" %}
{{ "website.com" | append: filename }}
{% endraw %}
```

### OUTPUT
{% assign filename = "/index.html" %}
{{ "website.com" | append: filename }}
<!-- Output: "website.com/index.html" -->
