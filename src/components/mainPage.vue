<template>
  <div class="app">
    <div class="welcome">Üdvözöljük a RecepTár oldalon!</div>
    <div class="trapezoid">
      <img :src="currentImage" alt="Dynamic image" class="image" />
    </div>
    <div class="details">Változatos és különféle receptek csak önnek!</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require('@/assets/food1.jpg'),
        require('@/assets/food4.jpg'),
        require('@/assets/food3.jpg'),
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  mounted() {
    this.startImageRotation();
  },
  methods: {
    startImageRotation() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 3000);
    },
  },
};
</script>


<style scoped>
.app {
  display: flex;
  justify-content: center;
  background-image: url("../assets/panel.jpeg");
  width: 100vw;
}

.trapezoid {
  width: 800px;
  height: 200px;
  clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
  background: #000;
  position: relative;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}
.welcome{
   position: absolute;
   left: 10%;
   top: 13%;
   color: white;
   font-family: 'Courier New', Courier, monospace;
   font-weight: bold;
}
.details{
  position: absolute;
  right: 7%;
  top: 13%;
  color: white;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}
</style>
