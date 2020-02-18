---
title: newline_to_br
description: ""
category: HTML
---

{% capture string_with_newlines %}
Hello
there
{% endcapture %}

{{ string_with_newlines | newline_to_br }}
<!-- Output: "<br />Hello<br />there<br />" -->

{{ string_with_newlines | strip | newline_to_br }}
<!-- Output: "Hello<br />there" -->
