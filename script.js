const button = document.getElementById("myBtn");
button.addEventListener("click", () => {
    fetch('https://icanhazdadjoke.com/slack ')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = jokeText;
    });
});

fetch('https://icanhazdadjoke.com/slack ')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = jokeText;
    });