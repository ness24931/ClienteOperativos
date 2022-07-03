function convertir() {
    console.log(document.getElementById("list_medidas").value);
}

function getUnidades(medida) {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://192.168.100.55:8080');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Methods', 'GET, POST');
    headers.append('content-type', 'application/json')
    fetch(`http://localhost:35777/api/Convertidor/${medida}`, {
        method: 'GET',
        mode: 'cors',
        headers: headers
    })
        .then(data => data.json())
        .then(resp => {
            let listU = document.getElementById('list_unidades');
            removeAllOptions(listU);
            resp.forEach((element, i) => {
                let opt = new Option(element, i);
                listU.add(opt);
            });
        })
        .catch(err => console.log(err))
}

function removeAllOptions(select) {
    while (select.options.length > 0) {
        select.remove(0);
    }
}