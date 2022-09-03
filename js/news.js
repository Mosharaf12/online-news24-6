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
            // isLoading(true);
        }

    }

    const alllink = (id)=> {
        console.log('button cliked');
        const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
        fetch(url)
        .then(Response => Response.json())
        .then(data => showCard(data.data))
    }

    const fillCard = document.getElementById('category-Posts')
    const showCard = (cards)=>{
        for(const card of cards){
            fillCard.innerHTML = '';
            console.log(card);
            const newDiv = document.createElement('div');
            newDiv.innerHTML = `
            <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div><div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="..." class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
            `
            fillCard.append(newDiv)
        }
    }

loadNewsdata()