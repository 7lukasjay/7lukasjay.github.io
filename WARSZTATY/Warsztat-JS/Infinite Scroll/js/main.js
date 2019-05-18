// const getData = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then( response => response.json())
//     .then( response => {
//         const user = response;
//         console.log(user);
//         const pMore = document.createElement('p');

//         pMore.innerHTML = `
//             <span>User ID: ${user.id}</span><br />
//             <span>User NAME: ${user.name}</span><br />
//             <span>User WEBSITE: ${user.website}</span>
//         `;

//         var loadMore = function() {
//             for (var i = 0; i < 20; i++) {
//               var item = document.createElement('p');
//               item.innerText = '' + nextItem++;
//               listElm.appendChild(item);
//             }
//           }
//     });
// } 

const getData = () => {
    if (window.scrollY + window.innerHeight > document.body.offsetHeight) {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())
        .then( data => {
            data.forEach(user => {
                const container = document.getElementById('container');
                container.innerHTML += `
                    <p>User ID: ${user.id}</p>
                    <p>User Name: ${user.name}</p>
                    <p>User URL: ${user.website}</p>
                    <p>-------------</p>
                `;
            });
        })
    }
}


window.addEventListener('scroll', getData);
