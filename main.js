await fetch("https://research001-4ba740c5cac1.herokuapp.com/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: jsPsych.data.get().json()
});
