const app = Vue.createApp({
  data() {
    return{
      courseGoal: 'Finish the course can learn Vue!',
      vueLink: 'https://vuejs.org/v2/guide/installation.html'
    };
  }
});

app.mount('#user-goal');