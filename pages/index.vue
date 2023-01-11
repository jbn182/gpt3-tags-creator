<template>
  <div>
    <h1>Youtube Tag Generator with gpt3 AI</h1>
    <br />
    <small>Ask the Ai anything</small>
    <br />
    <textarea
      v-model="text"
      cols="30"
      rows="10"
      placeholder="give me tags for a funny youtube video"
    ></textarea>
    <br />
    <button @click="gpt3()">Generate</button>
    <br>
    <h2>Results:</h2>
    <h5>{{ results }}</h5>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "",
      results: "",
    };
  },
  methods: {
    gpt3() {
      fetch("/api/gpt3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          textGPT: this.text,
        }),
      })
        .then((response) => response.json())
        .then((textBACK) => {
          this.results = textBACK.result;
        });
    },
  },
};
</script>
