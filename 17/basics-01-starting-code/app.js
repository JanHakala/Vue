const app = Vue.createApp({
  data() {
    return {
      // courseGoalA = data()-funktion palauttamassa objektissa määritelty ominaisuus nimeltä courseGoalA
      // data()-funktio palauttaa objektin
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      vLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
