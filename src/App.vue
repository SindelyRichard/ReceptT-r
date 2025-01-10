<template>
  <div class="main">
    <nav class="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <div class="welcome">
      <HelloWorld/>
    </div>
  </div>
  
  
</template>

<script>
import HelloWorld from './components/mainPage.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
}
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(73, 73, 73);
  color: white;
  padding: 10px 20px;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navbar ul li {
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
}

.navbar ul li {
  text-decoration: underline;
}
</style>
