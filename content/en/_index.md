---
title: "CHoi Archive"
date: 2025-10-13
type: landing

sections:
  - block: slider
    content:
      slides:
      - title: 👋 Choi Archive 👋
        content: "This page contains the growth process from **Jaewan Choi's** record as a **university student** to **successful app** development."
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
        content: 'If you're curious about my project?'
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
        content: 'If you're curious about my hobby?'
        align: right
        background:
          image:
            filename: movie.jpg
            filters:
              brightness: 0.5
          position: center
          color: 'rgba(159, 244, 255, 1)'
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
          /* Profile 섹션 전체 */
          .profile-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 40px;
            max-width: 900px;
            margin: 60px auto;
            padding: 40px 20px;
            text-align: justify;
            flex-wrap: wrap; /* 화면 작으면 세로로 쌓이게 */
          }

          /* 프로필 이미지 */
          .profile-container img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover ;
            object-position: center top;
            transform: scale(1.2);
          
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          /* 텍스트 영역 */
          .profile-text {
            flex: 1;
            min-width: 250px;
          }

          /* 인사말 */
          .profile-text h2 {
            margin-bottom: 15px;
            font-size: 1.8rem;
            text-align: left;
          }

          .profile-text p {
            line-height: 1.7;
          }
          
          .pdf-link {
            display: inline-flex;        /* flex 사용 */
            align-items: center;         /* 세로 가운데 정렬 */
            justify-content: center;     /* 가로 가운데 정렬 */
            padding: 4px 5px;           /* 버튼 내부 여백 */
            border-radius: 12px;
            background-color: #0077B6;
            color: white;
            text-decoration: none;
            font-weight: bold;
            font-size: 0.9rem;
            line-height: 1;              /* 글자 높이 정확하게 맞춤 */
            transition: all 0.3s ease;
          }

          .pdf-link:hover {
            background-color: #fdfdfdff;
          }


       </style>

        <div class="profile-container">
          <div>
            <img src="me.png" alt="최재완 프로필">
          </div>
          <div class="profile-text">
            <h2>Hi🤙</h2>
            <p>
              Hello, I'm Choi Jae-wan</strong> and I'm a computer artificial intelligence student at Chonbuk National University.<br>
              I realized that the community power of college students is quite strong, so I designed an application development for college students to take advantage of this, and I aim to release it before graduation.
                        <div class="pdf-link">
                        <h3></h3>
                        <div class="pdf-link">
                          <a href="ass1.pdf" target="_blank" class="pdf-link">Download resume.pdf📄</a>
                      </div>
          </div>
            </p>
          </div>
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
      title: "🎬Movie🎬"
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
     text: "More→"
     url: ../hobby/movie

  # ===== Latest News Collection =====
  - block: collection
    content:
      title: "Latest TMI"
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
      view: article-grid
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
