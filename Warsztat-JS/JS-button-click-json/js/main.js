// AJAX WARSZTAT 1
/*
*
*
*
*

const pobierzDaneBtn = document.getElementById('pobierzDane');

const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then( response => response.json())
    .then( response => {
        const user = response;
        //console.log(user);
        const paragraf = document.createElement('p');

        paragraf.innerHTML = `
            <span>User ID: ${user.id}</span><br />
            <span>User NAME: ${user.name}</span><br />
            <span>User WEBSITE: ${user.website}</span>
        `;

        pobierzDaneBtn.insertAdjacentElement('afterend', paragraf);



        //SPOSÓB 2
        
        // const userKeys = Object.keys(user);
        // userKeys.forEach(key => {
        //     const paragraf = document.createElement('p');

        //     if (typeof user[key] === 'string') {
        //         paragraf.innerHTML = `
        //             ${key.toUpperCase()} : ${user[key]}
        //         `;

        //         pobierzDaneBtn.insertAdjacentElement('afterend', paragraf);
        //     }
        // })
        
        
    });
}    


pobierzDaneBtn.addEventListener('click', getData);

*
*
*
*
*/

//WARSZTAT 2

let pobierzDaneBtn = $('#pobierzDane');

pobierzDaneBtn.click(function() {
    $.getJSON('https://jsonplaceholder.typicode.com/users/1', 
    response => {
        console.log(response);
    }
    )
});
