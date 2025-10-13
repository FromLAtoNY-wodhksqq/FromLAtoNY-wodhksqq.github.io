<script>
document.addEventListener('DOMContentLoaded', function() {
  if (typeof Swiper !== 'undefined') {
    const swiper = document.querySelector('.swiper-container');
    if (swiper && swiper.swiper) {
      swiper.swiper.changeDirection('vertical');
      swiper.swiper.params.effect = 'fade';
      swiper.swiper.update();
    }
  }
});
</script>
