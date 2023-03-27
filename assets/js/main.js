function activeClass(id) {
    let collection = document.getElementsByClassName('all');
    for (let i = 0; i < collection.length; i++) {
        collection[i].setAttribute('style', 'display: none !important;')
    }

    collection = document.getElementsByClassName(id);
    for (let i = 0; i < collection.length; i++) {
        collection[i].setAttribute('style', 'display: flex !important;')
    }

    let tabLink = document.querySelectorAll(".ngt-nav-list li a");

    tabLink.forEach(function () {
        tabLink.forEach(function (item) {
            item.classList.remove("active");
        });
    });

    let element = document.getElementById(id);
    element.classList.add("active");
    console.log(id);
}

let multiPageStart=1,onePageStart=1;

function loadMultipages(){
    let pageName='multipage-'+multiPageStart+'.html';
    $("#multiPage").load(pageName);
    multiPageStart+=1;
    if(multiPageStart===3){
        document.getElementById("multiPagebtn").disabled = true;
    }
}

function loadOnepages(){
    let pageName='onepage-'+onePageStart+'.html';
    $("#onePage").load(pageName);
    onePageStart+=1;
    if(onePageStart===6){
        document.getElementById("onePagebtn").disabled = true;
    }
}


