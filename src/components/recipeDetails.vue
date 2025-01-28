<template>
    <div>
      <h1>{{ recipe }} receptje</h1>
      <p>Itt található a {{ recipe }} részletes leírása.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      recipe: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>