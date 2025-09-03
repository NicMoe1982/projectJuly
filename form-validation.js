fetch('/data/blacklist.json')
  .then(response => response.json())
  .then(data => {
    const blacklist = data.terms;

    document.getElementById("contactform").addEventListener("submit", function(e) {
      const message = document.getElementById("message").value.toLowerCase();
      const found = blacklist.find(term => message.includes(term.toLowerCase()));

      if (found) {
        e.preventDefault();
        alert(`Your message contains a blocked term: "${found}". Please revise and try again.`);
      }
    });
  })
  .catch(error => {
    console.error("Failed to load blacklist:", error);
  });