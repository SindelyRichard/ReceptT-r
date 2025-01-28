<template>
  <div class="app">
    <div class="container">
      <div class="welcome">
        Üdvözöljük a RecepTár oldalon!
      </div>
      <div class="trapezoid">
        <img :src="currentImage" alt="Dynamic image" class="image" />
      </div>
      <div class="details">
        Változatos és különféle receptek csak önnek!
      </div>
    </div>
    <div class="content">
      <div class="row">
      <div class="food_content">
        <div class="food_pic_container">
          <img src="../assets/food1.jpg" class="foodsPic">
        </div>
        <div @click="handleRecipe('rantotthus')" class="food_description">
          Rántotthús receptje
        </div>
      </div>
      <div class="food_content">
        <div class="food_pic_container">
          <img src="../assets/food1.jpg" class="foodsPic">
        </div>
        <div @click="handleRecipe('rantotthus')" class="food_description">
          Rántotthús receptje
        </div>
      </div>
      </div>
    </div>
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
    handleRecipe(recipeName) {
      this.$router.push({ name: 'recipe', params: { name: recipeName } });
    }
  },
};
</script>


<style scoped>
.container {
  display: flex;
  justify-content: center;
  background-image: url("../assets/panel.jpeg");
  width: 100vw;
}

.row{
  display: flex;

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

.welcome {
  position: absolute;
  left: 10%;
  top: 13%;
  color: white;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

.details {
  position: absolute;
  right: 7%;
  top: 13%;
  color: white;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

.food_content {
  width: 50%;
  border: 5px solid gray;
  border-radius: 1%;
  left: 0;
  height: 200px;
  display: flex;
  cursor: pointer;
}

.foodsPic {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.food_pic_container {
  border: 1px solid black;
  width: 30%;
  height: 100%;
  overflow: hidden;
}

.food_description {
  display: flex;
  text-align: center;
  font-size: xx-large;
  justify-content: center;
  align-items: center;
  width: 70%;
  background-image: url("../assets/vagodeszka.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}
</style>
