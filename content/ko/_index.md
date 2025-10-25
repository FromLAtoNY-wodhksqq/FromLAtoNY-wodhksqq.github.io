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
    content:
      title: ''
      text: |
        <style>
          /* Profile Tags Styles */
          .profile-tag {
            padding: 8px 16px;
            border-radius: 20px;
            border: 1px solid #dee2e6;
            background-color: #f8f9fa;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 5px;
            transition: all 0.3s ease;
            margin: 5px;
          }


          .profile-section {
            margin-top: 30px;
          }

          .profile-section h3 {
            text-align: center;
            margin-bottom: 15px;
          }
        </style>
        <div style="text-align: justify; max-width: 800px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="/media/me.png" alt="최재완 프로필" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; margin: 0 auto 20px auto; display: block;">
            <h2>안녕하세요🤙</h2>
          </div>
          <p>안녕하세요. 저는 전북대학교 컴퓨터 인공지능 학부에 재학 중인 최재완입니다. 제가 구상중인 어플 개발을 위해 부지런히 노력하는 중입니다.</p>
        </div>

      

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
      view: article
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
