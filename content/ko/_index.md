---
title: "최재완 Archive"
date: 2025-10-13
type: landing

sections:
  - block: slider
    content:
      slides:
      - title: 👋 최재완 Archive 👋
        content: "**최재완**의 **대학생**으로서의 활동 기록부터 **성공적인 앱** 개발까지의 성장과정을 담은 페이지 입니다."
        align: center
        background:
          image:
            filename: coders.jpg
            filters:
              brightness: 0.7
          position: right
          color: '#666'
      - title: Lunch & Learn ☕️
        content: 'Share your knowledge with the group and explore exciting new topics together!'
        align: left
        background:
          image:
            filename: contact.jpg
            filters:
              brightness: 0.7
          position: center
          color: '#555'
      - title: World-Class Semiconductor Lab
        content: 'Just opened last month!'
        align: right
        background:
          image:
            filename: welcome.jpg
            filters:
              brightness: 0.5
          position: center
          color: '#333'
        link:
          icon: graduation-cap
          icon_pack: fas
          text: Join Us
          url: ../contact/
    
    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: ''
      is_fullscreen: true
      # Automatically transition through slides?
      loop: true
      # Duration of transition between slides (in ms)
      interval: 5000
      
      


  # ===== Latest News Collection =====
  - block: collection
    content:
      title: Latest News
      subtitle: ""
      text: ""
      count: 5
      filters:
        author: ""
        category: ""
        exclude_featured: false
        publication_type: ""
        tag: ""
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
      columns: "1"

  # ===== Markdown Section with Background =====
  - block: markdown
    content:
      title: ""
      subtitle: ""
      text: ""
    design:
      columns: "1"
      background:
        image:
          filename: coders.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen

  # ===== Latest Preprints Collection =====
  - block: collection
    content:
      title: Latest Preprints
      text: ""
      count: 5
      filters:
        folders:
          - publication
        publication_type: "article"
    design:
      view: citation
      columns: "1"

  # ===== CTA Section =====
  - block: markdown
    content:
      title: ""
      subtitle: ""
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: "1"
---
