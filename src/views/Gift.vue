<template>
  <div class="gift-card-wrapper">
    <div class="gift-card" @mouseover="openCard" @mouseleave="closeCard">
      <div class="page left" :class="{ open: isOpen }">
        <div class="face front">
          <p>Front side message</p>
        </div>
        <div class="face back">
          <p>Back side message (visible after opening)</p>
        </div>
      </div>
  
      <div class="inside">
        <h2>🎉 Surprise!</h2>
        <p>This is the inside of your card.</p>
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
  width: 80vw;
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
}

.back {
  background: #ffe;
  border: 1px solid #ccc;
  transform: rotateY(180deg); /* sits behind until rotated */
}
.gift-card:hover .page.left {
  transform: rotateY(-180deg);
}

</style>
