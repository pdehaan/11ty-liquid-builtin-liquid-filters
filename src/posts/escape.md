---
title: escape
description: ""
category: HTML
tags:
  - html
---

{{ "Have you read 'James & the Giant Peach'?" | escape }}
<!-- Output: "Have you read &#39;James &amp; the Giant Peach&#39;?" -->

{{ "Tetsuro Takara" | escape }}
<!-- Output: "Tetsuro Takara" -->
