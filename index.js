const data = [
    {
        id: 1,
        name: "Adarsh",
        teamlead_name: "Harshit",
        hours:8,
        date:"17-04-23"
    },
    {
        id: 2,
        name: "Adarsh",
        teamlead_name: "Harshit",
        hours:8,
        date:"17-04-23"
     
    },
    {
        id: 3,
        name: "Adarsh",
        teamlead_name: "Harshit",
        hours:8,
        date:"17-04-23"
    },
   
]


const newDiv = document.createElement('div');
const mainCont = document.querySelector('.draft-container');


const eachDiv = data.map((item, index) => {
    return (
         ` <div class="draft">
        <p>
        Project Name:${item.name}
        </p>
        <p>
        Hours:${item.hours}
        </p>

        <p>
        Team Lead Name:${item.teamlead_name}
        </p>

        <p>
        Date:${item.date}
        </p>


        <div class="box">
        <button type="submit" class="edit">Edit</button>
        <button type="submit" class="delete">Delete</button>
        </div>
     </div>`
        );
    });

    
    mainCont.innerHTML = eachDiv.join("");