---
layout: page
title:  Index
---
**Day 1 July 11,2023**
 Introduction to DevOps

**Day 2 July 12,2023**
Introduction to GitHub
----------------

{% for tag in site.tags %}
  <h3>{{ tag[personal,diary] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.date | date: "%B %Y" }} - {{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
