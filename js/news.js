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
        .then(data => console.log(data.data))
    }

loadNewsdata()