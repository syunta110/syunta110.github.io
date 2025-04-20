<template>
    <button class="base-button">
      <slot />
    </button>
  </template>
  
  <style scoped>
  .base-button {
    padding: 10px 20px;
    background: linear-gradient(90deg, rgba(231,34,65,1) 35%, rgba(170,216,245,1) 100%);
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
  }
  .base-button:hover {
    background-color: #36946e;
  }
  </style>
  