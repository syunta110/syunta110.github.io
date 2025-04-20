<template>
    <footer class="site-footer">
      <div class="sp">
          <router-link to="/"><a href="" class="anoter">Home</a></router-link>
          <router-link to="/Portfolio"><a href="" class="anoter">Portfolio</a></router-link>
          <router-link to="/Myschedule"><a href="" class="anoter">Myschedule</a></router-link>
          <router-link to="/posts"><a href="" class="anoter">Blog</a></router-link>
      </div>
      <div class="container">
        <p>メールアドレス::juntai772@gmail.com</p>
      </div>
      
    </footer>
  </template>
  
  <style scoped>
  .site-footer {
    background-color: #f0f0f0;
    padding: 20px 0;
    text-align: center;
    height:60px;
    bottom: 0;
  }
  
  .container {
    margin: 0 auto;
    padding: 0 16px;
  }

  .sp {
    display: none;
    text-decoration: none;
  }
  a {
    text-decoration: none;
    color: #333 ;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    .sp {
      display: inline;
      display: grid;
      grid-template-columns: repeat(2, 1fr); 
      grid-template-rows: repeat(3, auto);   
      gap: 40px;
      max-width: 85%;
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 40px;
    }
    .site-footer {
      height: auto;
    }
  }
  </style>
  