---
title: "최재완 Archive"
date: 2025-10-13
type: landing

sections:
  # ===== 메인 슬라이더 =====
  - block: slider
    content:
      slides:
        - title: 👋 최재완 Archive 👋
          content: "**최재완**의 **대학생**으로서의 활동 기록부터 **성공적인 앱** 개발까지의 성장 과정을 담은 페이지입니다."
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
            color: 'rgba(159, 244, 255, 1)'
          link:
            text: "hobby →"
            url: ../hobby/
    design:
      is_fullscreen: true
      loop: true
      interval: 5000

  # ===== 프로필 섹션 =====
  - block: markdown
    content:
      title: ''
      text: |
        <style>
          .profile-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 40px;
            max-width: 900px;
            margin: 60px auto;
            padding: 40px 20px;
            text-align: justify;
            flex-wrap: wrap;
          }

          .profile-container img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            object-position: center top;
            transform: scale(1.2);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          .profile-text {
            flex: 1;
            min-width: 250px;
          }

          .profile-text h2 {
            margin-bottom: 15px;
            font-size: 1.8rem;
            text-align: left;
          }

          .profile-text p {
            line-height: 1.7;
          }

          .pdf-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 6px 12px;
            border-radius: 12px;
            background-color: #0077B6;
            color: white;
            text-decoration: none;
            font-weight: bold;
            font-size: 0.9rem;
            line-height: 1.2;
            transition: all 0.3s ease;
            margin-top: 15px;
          }

          .pdf-link:hover {
            background-color: #005f8c;
          }
        </style>

        <div class="profile-container">
          <div>
            <img src="me.png" alt="최재완 프로필">
          </div>
          <div class="profile-text">
            <h2>안녕하세요🤙</h2>
            <p>
              안녕하세요. 저는 전북대학교 컴퓨터 인공지능 학부에 재학 중인 <strong>최재완</strong>입니다.<br>
              저는 대학생의 커뮤니티 파워가 꽤 강하다는 점을 깨닫고, 이를 활용한 대학생 대상 어플리케이션을 개발 중입니다. 졸업 전 출시를 목표로 두고 있습니다.
            </p>
            <a href="ass1.pdf" target="_blank" class="pdf-link">이력서 다운로드📄</a>
          </div>
        </div>

  # ===== 프로젝트 =====
  - block: collection
    content:
      title: 🖥️ project 🖥️
      page_type: project
      featured_only: true
    design:
      view: masonry
      columns: "2"

  # ===== 영화 취미 섹션 =====
  - block: collection
    content:
      title: "🎬 영화 🎬"
      count: 3
      filters:
        page_type: hobby
    design:
      view: grid
      columns: "2"
    link:
      text: "더보기 →"
      url: ../hobby/movie

  # ===== 최근 TMI =====
  - block: collection
    content:
      title: "최근 TMI"
      count: 5
      order: desc
      page_type: post
    design:
      view: article-grid
      columns: "2"

  # ===== 연락 CTA =====
  - block: markdown
    content:
      text: |
        {{% cta cta_link="./contact/" cta_text="contact →" %}}
    design:
      columns: "1"
---

