// Avani Part Start

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login');
    const signupButton = document.getElementById('signup');
    const getStartedButton = document.getElementById('get-started');

    loginButton.addEventListener('click', function() {
        alert('Login button clicked');
    });

    signupButton.addEventListener('click', function() {
        alert('Signup button clicked');
    });

    getStartedButton.addEventListener('click', function() {
        alert('Get Started button clicked');
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

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('focus', function() {
        this.style.borderColor = '#000';
    });
    searchInput.addEventListener('blur', function() {
        this.style.borderColor = '#ccc';
    });
});

// Avani Part End



// Shasikant Part Start

//  Shasikant Part End



// Neelesh Part Start
let ncontainer1=document.querySelector("#ncontainer1")

async function ngetData(){
    try{
        let res=await fetch('http://localhost:3000/inspiring_designs')
        if(res.ok){
            let data=await res.json()
            nshowData(data)
        }
    }catch(error){
        console.log(error)
    }
}    

    function nshowData(data){
        ncontainer1.innerHTML=""
        data.forEach((ele)=>{
            let card1=document.createElement('div')
            let card2=document.createElement('div')
            let card3=document.createElement('div')
            let card=document.createElement('div')
            let cards=document.createElement('div')
            let img=document.createElement('img')
            img.src=ele.img
            let icon=document.createElement('img')
            icon.src=ele.icon
            let name=document.createElement("p")
            name.textContent=ele.name
            let like=document.createElement('p')
            like.textContent=ele.like_count
            let watch=document.createElement('p')
            watch.textContent=ele.watch_count
            card1.append(img)
            let status;
            if(ele.id===9 || ele.id===10 || ele.id===18 || ele.id ===40){
                 status=document.createElement('p')
                status.textContent="TEAM"
                
            }
            else if(ele.id===20 || ele.id===26){
                status=document.createElement('p')
                status.textContent=""
            }
            else{
                status=document.createElement('p')
                status.textContent="PRO"
            }

            let heart=document.createElement('i')
            heart.classList.add('fa-solid','fa-heart')
            heart.style.color="#e3e3e3"
            let eye=document.createElement('i')
            eye.classList.add("fa-regular","fa-eye")
            eye.style.color="#727274"
            card3.append(heart,like,eye,watch)
            card2.append(icon,name,status)
            card.append(card2,card3)
            cards.append(card1,card)
            ncontainer1.append(cards)

        })
    }
    ngetData()
// Neelesh Part End



// Ayush Part Start

    // Create the main section element
    const footerCta = document.createElement('section');
    footerCta.classList.add('footer-cta');
    footerCta.setAttribute('data-track-location', 'Lower Pricing Tiers');
    
    // Create the content div
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('footer-cta__content', 'home-container');
    
    // Create and append the heading
    const heading = document.createElement('h2');
    heading.classList.add('footer-cta__heading', 'home-type-heading');
    heading.textContent = 'Find your next designer today';
    contentDiv.appendChild(heading);
    
    // Create and append the copy div
    const copyDiv1 = document.createElement('div');
    copyDiv1.classList.add('footer-cta__copy');
    copyDiv1.textContent = 'The world’s leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.';
    contentDiv.appendChild(copyDiv1);
    
    // Create and append the actions div
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('footer-cta__actions');
    
    // Create and append the first button
    const getStartedButton = document.createElement('a');
    getStartedButton.classList.add('btn1', 'btn1--large');
    getStartedButton.setAttribute('data-track-cta', 'Get started');
    getStartedButton.setAttribute('href', '/signup/new?return_to_after_signup=%2Fget-started%3Fintention%3Dhire%23hiringWorkType');
    getStartedButton.textContent = 'Get started now';
    actionsDiv.appendChild(getStartedButton);
    
    // Create and append the second button
    const learnMoreButton = document.createElement('a');
    learnMoreButton.classList.add('btn2', 'btn2--secondary-alt', 'btn2--large');
    learnMoreButton.setAttribute('data-track-cta', 'Learn about hiring');
    learnMoreButton.setAttribute('href', '/hiring');
    learnMoreButton.textContent = 'Learn about hiring';
    actionsDiv.appendChild(learnMoreButton);
    
    contentDiv.appendChild(actionsDiv);
    
    // Create and append the second copy div
    const copyDiv2 = document.createElement('div');
    copyDiv2.classList.add('footer-cta__copy');
    copyDiv2.textContent = 'Are you a designer? ';
    
    const joinDribbbleLink = document.createElement('a');
    joinDribbbleLink.setAttribute('data-track-cta', 'Join Dribbble');
    joinDribbbleLink.setAttribute('href', '/signup/new');
    joinDribbbleLink.textContent = 'Join Dribbble';
    
    copyDiv2.appendChild(joinDribbbleLink);
    contentDiv.appendChild(copyDiv2);
    
    // Append the content div to the main section
    footerCta.appendChild(contentDiv);
    
    // Append the main section to the specified container in the body
    document.getElementById('footer-cta-container').appendChild(footerCta);
    
    
// Ayush Part End



// Kranti Part Start

// Kranti Part End