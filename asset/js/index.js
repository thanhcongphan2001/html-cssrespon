fetch('http://localhost:3000/').then(
  resp => resp.json() // this returns a promise
).then(repos => {
    console.log(repos);
  }
).catch(ex => {
  console.error(ex);
})