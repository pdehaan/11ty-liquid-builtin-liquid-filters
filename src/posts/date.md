---
title: liquidjs <q>date</q> filter
description: Converts a timestamp into another date format.
name: date
category: Date
tags:
  - Date
  - date

random_date: 2020-02-14
---

The format for this syntax is the same as <a href="https://npm.im/strftime"><b>strftime</b></a>.

### INPUT
```liquid
{% raw %}
{{ random_date | date: "%a, %b %d, %y" }}
{% endraw %}
```

### OUTPUT
{{ random_date | date: "%a, %b %d, %y" }}
<!-- Output: "Thu, Feb 13, 20" -->

---

### INPUT
```liquid
{% raw %}
{{ random_date | date: "%Y" }}
{% endraw %}
```

### OUTPUT
{{ random_date | date: "%Y" }}
<!-- Output: "2020" -->

---

`date` works on strings if they contain well-formatted dates:

### INPUT
```liquid
{% raw %}
{{ "March 14, 2016" | date: "%b %d, %Y" }}
{% endraw %}
```

### OUTPUT
{{ "March 14, 2016" | date: "%b %d, %Y" }}
<!-- Output: "Mar 14, 2016" -->

---

To get the current time, pass the special word `"now"` (or `"today"`) to date:

### INPUT
```liquid
{% raw %}
{{ "now" | date: "%Y-%m-%d %H:%M" }}
{% endraw %}
```

### OUTPUT
{{ "now" | date: "%Y-%m-%d %H:%M" }}
<!-- Output: "2020-02-17 18:04" -->

<fieldset>
  <legend>TODO: File liquidjs bug</legend>
  <pre>{{ "today" | date: "%Y-%m-%d %H:%M" }}</pre>
  <!-- Output: "today" -->
</fieldset>
