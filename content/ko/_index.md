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

  - block: markdown
    extra:
      markdown: |
        <div class="intro-card" style="display:flex; flex-direction: column; align-items:center; gap:1rem; padding:20px; background-color:#f0f4f8; border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
          
          <!-- 왼쪽: 프로필 사진 -->
          <div style="flex:0 0 auto; width:150px; height:150px;">
            <img src="media/me.png" alt="최재완" style="width:100%; height:100%; border-radius:50%; object-fit:cover; border:4px solid white; box-shadow:0 2px 6px rgba(0,0,0,0.2);">
          </div>
          
          <!-- 오른쪽: 소개글 -->
          <div style="text-align:center; max-width:600px;">
            <h2 style="font-size:2rem; font-weight:bold; margin-bottom:0.5rem;">최재완</h2>
            <p>안녕하세요! 전북대학교 컴퓨터공학과 학생 <strong>최재완</strong>입니다.<br>
            이 사이트에서는 제 포트폴리오와 프로젝트를 소개합니다.</p>
          </div>
        </div>

        <style>
        @media(min-width:768px) {
          .intro-card {
            flex-direction: row;
            align-items: center;
            text-align: left;
          }
          .intro-card div:last-child {
            margin-left: 1.5rem;
          }
        }
        </style>

  - block: collection
    content:
      title: 🖥️ project 🖥️
      page_type: project
      featured_only: true
    design:
      view: masonry
      columns: "2"
    

 
  - block: collection
    content:
      title: "🎬영화🎬"
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
      view: article-card
      columns: "2"

  # ===== CTA Section =====
  - block: markdown
    content:
      title: ""
      subtitle: ""
      text: |
        {{% cta cta_link="./contact/" cta_text="contact →" %}}
    design:
      columns: "1"
---
