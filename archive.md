---
layout: page
title:  Daily Diary
date: 2023-07-11
---

{% for tag in site.tags %}
  <h3>{{ tag[personal,diary] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.date | date: "%B %Y" }} - {{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}