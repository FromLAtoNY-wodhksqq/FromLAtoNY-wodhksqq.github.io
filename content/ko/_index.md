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
            filename: coder.jpg
            focal_point: Right

            filters:
              brightness: 0.7
          position: right
          color: '#777777ff'
      - title: Project🖥️
        content: '저의 프로젝트가 궁금하시다면?'
        align: right
        background:
          image:
            filename: project.jpg
            filters:
              brightness: 0.7
          position: center
          color: '#555'
        link:
          
          text: "project →"
          url: ../project/
      - title: I Like to..
        content: '저의 취미가 궁금하시다면?'
        align: right
        background:
          image:
            filename: movie.jpg
            filters:
              brightness: 0.5
          position: center
          color: '#333'
        link:
          text: "hobby →"
          url: ../hobby/
    
    design:
      slide_height: ''
      is_fullscreen: true
      loop: true
      interval: 5000

  - block: collection
    id: papers
    content:
      title: 📅 project 📅
      page_type: project
      featured_only: true
    design:
      view: article-grid
      columns: 3

 
  - block: collection
    content:
      title: "영화"
      subtitle: ""
      text: ""
      count: 3
      filters:
        author: ""
        category: ""
        exclude_featured: false
        publication_type: ""
        tag: ""
      offset: 0
      page_type: hobby
    design:
      view: grid
      columns: "2"
    link:
     text: "더보기→"
     url: ../hobby/movie

  # ===== Latest News Collection =====
  - block: collection
    content:
      title: "최근 TMI"
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
