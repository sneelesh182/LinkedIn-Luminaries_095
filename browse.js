let selectTag = document.querySelector("#selectTag");
let ncontainer2 = document.querySelector("#ncontainer2");
let go=document.querySelector("#go")
let data=[]
async function ngetData2() {
    try {
        let res = await fetch('http://localhost:3000/explore_designs');
        if (res.ok) {
             data = await res.json();
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

function nshowData2(data2) {
    ncontainer2.innerHTML = "";
    data2.forEach((ele) => {
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
        
cards.addEventListener('click', () => {
    showModal(ele);
});
        ncontainer2.append(cards);
    });
}

selectTag.addEventListener("change", handleSelect);

async function handleSelect() {
    let value = selectTag.value;
     data = await ngetData2();

    if (value === "name") {
        data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "likeCount") {
        data.sort((a, b) => b.like_count - a.like_count);
    } else if (value === "watchCount") {
        data.sort((a, b) => a.watch_count.localeCompare(b.watch_count));
    }

    nshowData2(data);
}
go.addEventListener("input",handleSearch)
let timeout;
async function handleSearch(){
    let value=go.value.toLowerCase()
    clearTimeout(timeout)
    if(value.length===0)
    {
        nshowData2(data)
        return
    }
    if(value.length<=4){
        return false
    }
    
    timeout=setTimeout(()=>{
        let narr=data.filter((ele)=>{
            return ele.name.toLowerCase().includes(value)
        })
        nshowData2(narr)
    },2000)
}
function showModal(cardData) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.querySelector('.close');

    modalContent.innerHTML = `
        <h2>${cardData.name}</h2>
        <p>Likes: ${cardData.like_count}</p>
        <p>Watchers: ${cardData.watch_count}</p>
        <img src="${cardData.img}" alt="${cardData.name}">
    `;

    modal.style.display = 'block';
    
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

(async function init() {
     data = await ngetData2();
    nshowData2(data);
})();


// avani 
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login');
    const signupButton = document.getElementById('signup');
    const getStartedButton = document.getElementById('get-started');
    const searchInput = document.getElementById('search');

    loginButton.addEventListener('click', function() {
        window.location.href = 'login.html'; // to login page
    });

    signupButton.addEventListener('click', function() {
        window.location.href = 'signup.html'; // to signup page
    });


    getStartedButton.addEventListener('click', function() {
        window.location.href = 'signup.html'; // to signup page
    });

    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.color = '#000';
        });
        item.addEventListener('mouseout', function() {
            this.style.color = '#333';
        });
    });

    searchInput.addEventListener('focus', function() {
        this.style.borderColor = '#000';
    });
    searchInput.addEventListener('blur', function() {
        this.style.borderColor = '#ccc';
    });

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        filterDesigns(query);
    });

    function filterDesigns(query) {

        // add data
        
        const designs = [
            { title: 'Blue Ocean', designer: 'Alex Krugli', tags: ['blue', 'ocean', 'water'] },
            { title: 'Sunset', designer: 'Jane Doe', tags: ['orange', 'sunset', 'sky'] },
            { title: 'Forest', designer: 'John Smith', tags: ['green', 'trees', 'nature'] },
            { title: 'Blue Sky', designer: 'Alex Krugli', tags: ['blue', 'sky', 'clouds'] },
        ];

        const filteredDesigns = designs.filter(design => {
            return design.tags.includes(query) || design.designer.toLowerCase().includes(query);
        });

        displayDesigns(filteredDesigns);
    }

    function displayDesigns(designs) {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = designs.map(design => `
            <div class="design">
                <h2>${design.title}</h2>
                <p>by ${design.designer}</p>
            </div>
        `).join('');
    }
});
// avani end 
