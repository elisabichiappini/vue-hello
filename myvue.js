'use strict';
//destrutturazione iniziale
  const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Passione broccolo!',
        formatImage: 'myImage',
        classTitle: 'myText',
        imageSource: 'img/broccolo.jpg'
      }
    }
  }).mount('#app')