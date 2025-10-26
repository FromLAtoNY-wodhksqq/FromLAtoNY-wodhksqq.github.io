<style>
  /* 앨범 컨테이너 */
  .diary-album {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* 사진 간 간격 */
    justify-content: center; /* 가운데 정렬 */
  }

  /* 각 사진 + 코멘트 묶음 */
  .diary-item {
    flex: 1 1 calc(33.333% - 20px); /* 한 줄에 최대 3장 */
    box-sizing: border-box;
    text-align: center;
    margin-bottom: 20px;
  }

  .diary-item img {
    width: 100%; /* 각 아이템 폭에 맞춰 사진 확장 */
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }

  .diary-item p {
    margin-top: 8px;
    font-size: 1rem;
    color: #333;
    line-height: 1.4;
  }

  /* 화면이 좁으면 한 줄에 2장 또는 1장으로 변경 */
  @media (max-width: 900px) {
    .diary-item {
      flex: 1 1 calc(50% - 20px);
    }
  }

  @media (max-width: 600px) {
    .diary-item {
      flex: 1 1 100%;
    }
  }
</style>
 
어렸을 때 부터 사진찍는걸 싫어했는데 이렇게까지 제 사진이 없을 줄이야 깜짝 놀랐습니다.

<div class="diary-album">
  <div class="diary-item">
    <img src="14.jpg" alt="중1">
    <p>중1</p>
  </div>

  <div class="diary-item">
    <img src="16.jpg" alt="중3">
    <p>중3</p>
  </div>

  <div class="diary-item">
    <img src="17.jpg" alt="고1">
    <p>고1</p>
  </div>

 <div class="diary-item">
    <img src="18.jpg" alt="고2">
    <p>고2</p>
  </div>
   
  <div class="diary-item">
    <img src="19.jpeg" alt="고3">
    <p>고3</p>
  </div>  
 
 <div class="diary-item">
    <img src="20.jpg" alt="스물">
    <p>스물</p>
  </div>  

  이때부터 세월의 풍파를 맞았습니다.

  <div class="diary-item">
    <img src="21.jpg" alt="21">
    <p>21</p>
  </div>  

  <div class="diary-item">
    <img src="23.jpg" alt="24">
    <p>24(어흥)</p>
  </div>  

  <div class="diary-item">
    <img src="25.jpg" alt="25">
    <p>25</p>
  </div>  

  <!-- 더 추가 가능 -->
</div>
