<template>
  <div class="card" @click="$router.push('/gift')">
    <p>Click me 🎁</p>
  </div>
</template>

<style scoped>
.card {
  width: 150px;
  height: 100px;
  background: #f0c;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s;
}
.card:hover {
  transform: scale(1.05);
}
</style>
