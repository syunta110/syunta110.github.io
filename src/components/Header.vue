<template>
    <header class="site-header">
      <div class="container">
        <h1 class="logo">叶　竣太のブログ</h1>
        <nav class="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/Portfolio">Portfolio</router-link>
          <!-- <router-link to="/History">History</router-link> -->
          <router-link to="/posts">Blog</router-link>
          <router-link to="/Myschedule">Myschedule</router-link>
        </nav>
      </div>
    </header>
  </template>
  
  <style scoped>
  .site-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    background-color: #333;
    color: white;
    display: flex;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
  
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .nav a {
    color: white;
    margin-left: 100px;
    text-decoration: none;
  }
  
  .nav a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    .nav {
      display: none; 
    }
    
  }
  </style>
  