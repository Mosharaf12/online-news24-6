    const loadNewsdata =()=>{
        const url = `https://openapi.programming-hero.com/api/news/categories`
        fetch(url)
        .then(Response => Response.json())
        .then(data => displaydata(data.data.news_category))
    }
    const displaydata = catagories => {
        // console.log(catagories);
        const ulCatagory = document.getElementById('ul-catagory');
       

        for (const category of catagories) {
            const allCatagories = category.category_name;
            // console.log(allCatagories);
            const li = document.createElement('li');
            li.classList.add('me-3')
            li.innerHTML = `
                <a onclick="alllink('${category.category_id}')" class="btn categoryBtn">${allCatagories}</a>
            `
            ulCatagory.appendChild(li);
        }

    }

    // loading 
const loadingSpin = (loader) => {
    const spinner = document.getElementById('spiner-loading');
    if (loader) {
        spinner.classList.remove('d-none');
    }
    else {
        spinner.classList.add('d-none');
    }
}


    const alllink = (id)=> {
        console.log('button cliked');
        const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
        fetch(url)
        .then(Response => Response.json())
        .then(data => showCard(data.data))
        loadingSpin(true);
    }
    // alllink();

    const showCard = (cards)=>{
    const fillCard = document.getElementById('category-Posts')
        fillCard.innerHTML=``;
        for(const card of cards){
            
        

        const foundCategoryField = document.getElementById('found-category');
        foundCategoryField.innerHTML = `
            <h4>${cards.length}  items found for category </h4>
        `;

            console.log(card);
            const createRow = document.createElement('div');
            createRow.classList.add('row', 'my-4', 'bg-light', 'py-3', 'shadow', 'px-3', 'rounded-3', 'g-0')

            createRow.innerHTML = `
                <div class="col-md-4 d-flex d-lg-block justify-content-center mb-3 mb-lg-0">
                <img src="${card.thumbnail_url}" class="img-fluid w-75 rounded-3" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title fw-bold py-3">${card.title}</h5>
                <p class="card-text text-muted ">${card.details.slice(0, 150)}</p>
                <p class="card-text text-muted allPeragraph">${card.details.slice(201, 318)}</p>
                
                <div class="row mt-5 d-flex align-items-center pt-5"> <!--Author details-->
                    <div class='d-flex align-content-start col-lg-4'>
                        <img style="width:50px; height: 50px" class="img-fluid rounded-circle me-3" src="${card.author.img}">
                        <div>
                            <p class="fw-bold m-0">${card.author.name ? card.author.name : 'no username found'}</p>
                            <p><small>Sep 3, 2022</small></p>
                        </div>
                    </div>
                
                <div class="col-lg-3"  style="color: black" >
                    <div class=" d-flex align-items-center">
                    <i class="fa-solid fa-eye me-2"></i>
                    <p class="m-0 fw-bold postView" id="${card._id}">${card.total_view ? card.total_view : 'No views'}</p>
                    </div>
                </div>

                <div class="col-lg-3">
                    <i class="fa-solid fa-star"></i> 
                    <i class="fa-solid fa-star"></i> 
                    <i class="fa-solid fa-star"></i> 
                    <i class="fa-solid fa-star"></i> 
                    <i class="fa-solid fa-star"></i> 
                </div>

                <div id="clickToModal" class="col-lg-2" >
                <button onclick="myModal('${card._id}')" class='btn border-0'   data-bs-toggle="modal" data-bs-target="#postDetailModal">
                    <i style="font-size: 23px; font-weight: bold" class="fa-solid fa-arrow-right"></i>
                </button>

                </div>
                
                </div>
                </div>
            </div>
            `

            fillCard.appendChild(createRow);
        }
    
        loadingSpin(false)
        }

        const myModal = (modals) => {
            const geturl = `
            https://openapi.programming-hero.com/api/news/${modals}
            `
            fetch(geturl)
                .then(Response => Response.json())
                .then(data => displayModal(data.data[0]))
        }
        
        const displayModal = modal => {
            console.log(modal);
            const postTitle = document.getElementById('modalPostDetail');
            postTitle.innerText = `${modal.title}`;
            
            const modalBody = document.getElementById('modalBody');
            modalBody.innerHTML = `
                <h6>Badge: ${modal.rating.badge}</h6>
                <img src="${modal.image_url}" class="img-fluid">
                <p>${modal.details}</p>
                <p class="fw-bold">Rating: ${modal.rating.number}</p>
            `
            
        
        }



loadNewsdata()