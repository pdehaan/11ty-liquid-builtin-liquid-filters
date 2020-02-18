---
title: escape_once
description: ""
category: HTML
tags:
  - html
---

{{ "1 < 2 & 3" | escape_once }}
<!-- Output: "1 &lt; 2 &amp; 3" -->

{{ "1 &lt; 2 &amp; 3" | escape_once }}
<!-- Output: "1 &lt; 2 &amp; 3" -->
