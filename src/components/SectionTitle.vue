<template>
    <h2 class="section-title">
      <slot />
    </h2>
  </template>
  
  <style scoped>
  .section-title {
    font-size: 32px;
    margin-top: 2rem;
    margin-bottom: 1rem;
    display: flex;
  justify-content: center; /* 横方向中央 */
  align-items: center;     /* 縦方向中央 */
    border-radius: 1px;

    width: 45%;
    height: 10%;
    font-weight: bold;    background: linear-gradient(90deg,#ffffff 0%,      /* 赤 */rgba(170, 216, 245, 1) 50%,     /* 紫 */#ffffff 100%   /* 水色 */);
  }
  </style>
  