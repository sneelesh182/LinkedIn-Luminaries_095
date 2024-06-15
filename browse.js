let selectTag = document.querySelector("#selectTag");
let ncontainer2 = document.querySelector("#ncontainer2");

async function ngetData2() {
    try {
        let res = await fetch('http://localhost:3000/explore_designs');
        if (res.ok) {
            let data = await res.json();
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

function nshowData2(data) {
    ncontainer2.innerHTML = "";
    data.forEach((ele) => {
        let card1 = document.createElement('div');
        let card2 = document.createElement('div');
        let card3 = document.createElement('div');
        let card = document.createElement('div');
        let cards = document.createElement('div');
        let img = document.createElement('img');
        img.src = ele.img;
        let icon = document.createElement('img');
        icon.src = ele.icon;
        let name = document.createElement("p");
        name.textContent = ele.name;
        let like = document.createElement('p');
        like.textContent = ele.like_count;
        let watch = document.createElement('p');
        watch.textContent = ele.watch_count;
        card1.append(img);
        let status;
        if (ele.id === 9 || ele.id === 10 || ele.id === 18 || ele.id === 40) {
            status = document.createElement('p');
            status.textContent = "TEAM";
        } else if (ele.id === 20 || ele.id === 26) {
            status = document.createElement('p');
            status.textContent = "";
        } else {
            status = document.createElement('p');
            status.textContent = "PRO";
        }

        let heart = document.createElement('i');
        heart.classList.add('fa-solid', 'fa-heart');
        status.classList.add('stats');
        let eye = document.createElement('i');
        eye.classList.add("fa-regular", "fa-eye");
        eye.style.color = "#727274";
        eye.style.fontSize = "24px";
        heart.style.fontSize = "24px";
        card3.append(heart, like, eye, watch);
        card2.append(icon, name, status);
        card.append(card2, card3);
        cards.append(card1, card);
        ncontainer2.append(cards);
    });
}

selectTag.addEventListener("change", handleSelect);

async function handleSelect() {
    let value = selectTag.value;
    let data = await ngetData2();

    if (value === "name") {
        data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "likeCount") {
        data.sort((a, b) => b.like_count - a.like_count);
    } else if (value === "watchCount") {
        data.sort((a, b) => a.watch_count.localeCompare(b.watch_count));
    }

    nshowData2(data);
}

(async function init() {
    let data = await ngetData2();
    nshowData2(data);
})();
