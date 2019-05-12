// AJAX fetch()
/*
fetch('https://jsonplaceholder.typicode.com/posts')
    .then( response => response.json())
    .then( response => console.log(response));
*/   


// 2. AJAX ~ $.getJSON()     -wymagany jest jQuery
/*
$.getJSON('https://jsonplaceholder.typicode.com/posts', 
    response => {
        console.log(response);
    }
)
*/

// 3. AJAX - $.ajax()
/*
$. ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    dataType: "json",
    success: function (resultJSON) { 
        console. log(resultJSON);
    },
    onerror: function (msg) {
        console. log(msg);
    } 
});
*/

// 4. AJAX - czysta JS funkcja ajax()

const ajax = (method, url) => {
    //tworzymy object
    let httpReq = new XMLHttpRequest();

    //otwieramy połączenie
    httpReq.open(method, url);

    //w momencie dotarcia do serwera
    httpReq.onreadystatechange = () => {

        //jeśli wszystko poszło pomyślnie i dane zostały zwrócone
        if (httpReq.readyState ===4 && httpReq.status === 200) {
            //wrzucamy gotowe dane do zmiennej
            let response = httpReq.responseText;
            //parsujemu JSON string do tablicy z obiektami
            response = JSON.parse(response);
            console.log(response);

            //rozłączamy się z serwerem
            httpReq = null;
        }
    }

    //wywołujemy .onreadystatechange()
    httpReq.send();
}

ajax('GET', 'https://jsonplaceholder.typicode.com/users');