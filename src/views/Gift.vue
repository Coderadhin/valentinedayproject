<template>
  <div class="gift-card-wrapper">
    <div class="hearts">
  <span>❤️</span>
  <span>💖</span>
  <span>💕</span>
  <span>💗</span>
</div>

    <div class="gift-card" @mouseover="openCard" @mouseleave="closeCard"      @click="isOpen = !isOpen">
>
      <div class="page left" :class="{ open: isOpen }">
      <div class="face front">
  <div class="front-inner">
    <h1 class="valentine-title" style="text-align:center">Happy<br><br> Valentine's<br><br> Day</h1>
    <div class="mini-hearts">
      <span>❤️</span>
      <span>💖</span>
      <span>💕</span>
    </div>
  </div>
</div>


        <div class="face back">
          <p>My Love,<br><br>
I don’t know when it started exactly… maybe it was in the quiet moments, or in the way my heart feels lighter whenever I think of you. <br><br>All I know is that somewhere along the way, you became my favorite thought, my calm, and my warmth.
With you, love doesn’t feel loud or dramatic. It feels safe. It feels like home. You make ordinary days feel special just by being in them, and even from a distance, your presence stays with me in ways I can’t explain.
<br><br>I love the way you exist in my life—not perfectly, but honestly. I love how you make me smile without trying, how you understand me even when I don’t say much, and how my heart somehow knows you belong there.
<br><br>If I had one wish, it would be to keep choosing you, every day, in all the little ways that matter.

</p>
        </div>
      </div>
  
      <div class="inside">
      <div class="inside-content">
    <img 
  src="https://cdn-icons-png.flaticon.com/512/833/833472.png" 
  class="couple-img" 
/>

    <p class="inside-text">
      If love had a language, mine would always spell your name.
      <br><br>
      Always yours
      <br>❤️
    </p>
  </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

function openCard() {
  isOpen.value = true
}
function closeCard() {
  isOpen.value = false
}
</script>

<style scoped>
.gift-card-wrapper {
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: transparent;
}
.gift-card {
  width: 45vw;
  height: 80vh;
  max-width: 900px;
  max-height: 600px;
  perspective: 1000px;
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
p{
padding:1rem}
.side {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  background: #fff;
  border: 1px solid #ccc;
  transition: transform 0.6s;
}
.left {
  left: 0;
  transform-origin: left center;
}
.right {
  right: 0;
  transform-origin: right center;
}
.inside {
  position: absolute;
  top: 0;
  left: 0;
  width:50%;
  height: 100%;
  background: #ffe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: -1; /* hidden behind sides */
}
.gift-card:hover .left {
  transform: rotateY(-150deg);
}
.gift-card:hover .right {
  transform: rotateY(150deg);
}
.page.left { position: absolute; left: 0; width: 50%; height: 100%; transform-style: preserve-3d; transition: transform 0.8s ease; }
.face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* hide the back until rotated */
  display: flex;
  align-items: center;
  justify-content: center;
}

.front {
  background: #fff;
  border: 1px solid #ccc;
    background: linear-gradient(135deg, #fff0f5, #ffe6f0);

}
/* .front {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #fff0f5, #ffe6f0);
}

.front-inner {
  text-align: center;
  z-index: 2;
} */

/* Floating small hearts */
.mini-hearts span {
  position: absolute;
  font-size: 20px;
  opacity: 0.5;
  animation: floatUp 6s linear infinite;
}

.mini-hearts span:nth-child(1) {
  left: 20%;
  animation-delay: 0s;
}

.mini-hearts span:nth-child(2) {
  left: 50%;
  animation-delay: 2s;
}

.mini-hearts span:nth-child(3) {
  left: 75%;
  animation-delay: 4s;
}

@keyframes floatUp {
  0% {
    bottom: -20px;
    transform: translateY(0);
  }
  100% {
    bottom: 110%;
    transform: translateY(-100px);
  }
}

.valentine-title {
  font-size: 2.5rem;
  color: #e60073;
  animation: fadeSlide 2s ease-out forwards,
             glowPulse 2s ease-in-out infinite alternate;
}

/* Smooth fade + slight slide up */
@keyframes fadeSlide {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Soft romantic glow */
@keyframes glowPulse {
  from {
    text-shadow: 0 0 5px #ff66b2;
  }
  to {
    text-shadow: 0 0 20px #ff1a8c;
  }
}

@keyframes slideshow {
  0% {
    background-image: url('https://images.unsplash.com/photo-1518199266791-5375a83190b7');
  }
  33% {
    background-image: url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2');
  }
  66% {
    background-image: url('https://images.unsplash.com/photo-1492724441997-5dc865305da7');
  }
  100% {
    background-image: url('https://images.unsplash.com/photo-1518199266791-5375a83190b7');
  }
}
.front-content {
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  padding: 20px 40px;
  border-radius: 20px;
  backdrop-filter: blur(5px);
}

.valentine-text {
  font-size: 2.5rem;
  color: #fff;
  font-family: 'Cursive', sans-serif;
  animation: glow 2s ease-in-out infinite alternate;
}
@keyframes glow {
  from {
    text-shadow: 0 0 10px #ff4da6, 0 0 20px #ff80bf;
  }
  to {
    text-shadow: 0 0 20px #ff99cc, 0 0 30px #ff4da6;
  }
}


.back {
  background: #ffe;
  border: 1px solid #ccc;
  white-space: pre-line;
  

  background: linear-gradient(135deg, #fff0f5, #ffe6f0);

  transform: rotateY(180deg); /* sits behind until rotated */
}
.page.left.open {
  transform: rotateY(-180deg);
}


.inside {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(135deg, #ffe6f0, #fff0f5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  overflow: hidden;
}

.inside-content {
  text-align: center;
  padding: 20px;
}

.couple-img {
  width: 180px;
  margin-bottom: 20px;
  animation: float 3s ease-in-out infinite;
}

.inside-text {
  font-size: 16px;
  color: #b30059;
  line-height: 1.6;
}
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
.hearts span {
  position: absolute;
  top: -50px;
  font-size: 20px;
  animation: fall 8s linear infinite;
  opacity: 0.6;
}

.hearts span:nth-child(1) { left: 10%; animation-delay: 0s; }
.hearts span:nth-child(2) { left: 30%; animation-delay: 2s; }
.hearts span:nth-child(3) { left: 60%; animation-delay: 4s; }
.hearts span:nth-child(4) { left: 80%; animation-delay: 6s; }

@keyframes fall {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(110vh);
  }
}
/* ============================= */
/* 📱 MOBILE RESPONSIVE SUPPORT */
/* ============================= */

@media (max-width: 768px) {

  .gift-card {
    width: 95vw;
    height: 85vh;
    max-width: none;
    max-height: none;
  }

  .page.left,
  .inside {
    width: 100%;
  }

  /* Disable 3D half-card effect on mobile */
  .gift-card:hover .page.left {
    transform: none;
  }

  .page.left {
    position: relative;
  }

  .inside {
    position: relative;
    z-index: 1;
    height: auto;
    padding: 20px;
  }

  .valentine-title {
    font-size: 1.8rem;
  }

  .back p {
    font-size: 14px;
    padding: 15px;
  }

  .couple-img {
    width: 120px;
  }

  .inside-text {
    font-size: 14px;
  }

}


</style>
