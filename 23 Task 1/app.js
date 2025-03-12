const app = Vue.createApp({
  data() {
    return {
      yourName: "Janne Hakala",
      yourAge: 57,
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/8d/Test_Drive_5.jpg",
    };
  },
  methods: {
    calcAge() {
      return this.yourAge + 5;
    },
    randomNum() {
      const num = Math.random();
      return num;
    },
  },
});

app.mount("#assignment");
