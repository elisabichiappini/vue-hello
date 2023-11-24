//destrutturazione iniziale
  const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Passione broccolo!',
        classTitle: 'myText'
      }
    }
  }).mount('#app')