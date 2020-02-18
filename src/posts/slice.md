---
title: slice
description: ""
category: String
---

{{ "Liquid" | slice: 0 }}
<!-- Output: "L" -->

{{ "Liquid" | slice: 2 }}
<!-- Output: "q" -->

{{ "Liquid" | slice: 2, 5 }}
<!-- Output: "quid" -->

If the first argument is a negative number, the indices are counted from the end of the string:

{{ "Liquid" | slice: -3, 2 }}
<!-- Output: "ui" -->
