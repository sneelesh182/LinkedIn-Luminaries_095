// Avani Part Start

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

// Ayush Part End



// Kranti Part Start

// Kranti Part End