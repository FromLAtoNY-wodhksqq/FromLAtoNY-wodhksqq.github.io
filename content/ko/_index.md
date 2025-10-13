---
title: "최재완 Archive"
date: 2025-10-13
type: landing
layouts: landing
sections:
  # ===== Hero Carousel =====
  - block: hero-carousel
    content:
      slides:
        - title: "최재완 Archive"
          image: "welcome.jpg"
          text: "**최재완**의 **대학생**으로서의 활동 기록부터 **성공적인 앱** 개발까지의 성장과정을 담은 페이지 입니다."
        - title: "Research & Projects"
          image: "research.jpg"
          text: "현재 진행 중인 프로젝트와 논문"
        - title: "Contact"
          image: "contact.jpg"
          text: "협업 제안은 언제든 환영합니다!"

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
