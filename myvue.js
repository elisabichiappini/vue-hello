//destrutturazione iniziale
  const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Passione broccolo!',
        formatImage: 'myImage',
        classTitle: 'myText'
      }
    }
  }).mount('#app')