---
title: strip_newlines
description: ""
category: String
---

{% capture string_with_newlines %}
Hello
there
{% endcapture %}
<pre>{{ string_with_newlines | strip_newlines }}</pre>
<!-- Output: "Hellothere" -->
