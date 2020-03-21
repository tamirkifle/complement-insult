document
    .querySelector('.complement-button')
    .addEventListener('click', function() {
        fetch("/complements")
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                document.querySelector('.result').innerText = data.complement;
            })
            .catch(function(err) {
                console.error(err);
            })
    });

document
    .querySelector('.insult-button')
    .addEventListener('click', function() {
        fetch("/insults")
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                document.querySelector('.result').innerText = data.insult;
            })
            .catch(function(err) {
                console.error(err);
            })
    });