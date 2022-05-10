function transferOne() {
    var b = document.getElementById('name').value,
        url = 'http://path_to_your_html_files/next.html?name=' + encodeURIComponent(b);

    document.location.href = url;
}

let rounds=8;
// let array=document.