const addLoading = () => {
    document.getElementById("addRemove-loading").classList.remove("hidden");
};
const removeLoading = () => {
    document.getElementById("addRemove-loading").classList.add("hidden");
};

const middleSectionCards = document.getElementById("middle-section-Cards");

// all plant API
// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500
addLoading();
fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
        // console.log(data.plants);
        middleSectionCards.innerHTML = "";
        const plants = data.plants;
        plants.forEach((plant) => {
            middleSectionCards.innerHTML += `
            <div id="${plant.id}" class="card bg-base-100 shadow-sm">
                                <figure class="">
                                    <img
                                        src="${plant.image}"
                                        alt="Plant"
                                        class="rounded-t-xl h-48 w-full object-cover"
                                    />
                                </figure>
                                <div class="card-body px-3 pt-0">
                                    <h2 class="card-title">${plant.name}</h2>
                                    <p class="text-sm font-light">
                                        ${plant.description}
                                    </p>
                                    <div
                                        class="flex justify-between items-center"
                                    >
                                        <button
                                            class="btn btn-xs rounded-xl bg-[#dcfce7] text-[#15803D]"
                                        >
                                            ${plant.category}
                                        </button>
                                        <p class="text-right"><span class="text-xl font-bold">৳</span>${plant.price}</p>
                                    </div>
                                    <div class="card-actions">
                                        <button
                                            class="btn btn-primary w-full bg-[#15803D] rounded-full"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
            `;
        });
        removeLoading();
    });
// all categories---------
// "id": 1,
// "category_name": "Fruit Tree",
// "small_description": "Trees that bear edible fruits like mango, guava, and jackfruit."

fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
        const allDivCategories = document.getElementById("allDiv-categories");
        //console.log(data.categories);
        const categories = data.categories;
        categories.forEach((category) => {
            //console.log(category);
            allDivCategories.innerHTML += `
                            <button id="${category.id}"
                                class="w-full text-left text-sm p-2 rounded-sm hover:bg-[#166534] hover:text-white"
                            >
                                ${category.category_name}
                            </button>
            `;
        });
    });

document.getElementById("left-section").addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        fetch(
            `https://openapi.programming-hero.com/api/${
                e.target.id === "all-trees"
                    ? "plants"
                    : "category/" + e.target.id
            }`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data.plants);
                const targetedPlants = data.plants;
                middleSectionCards.innerHTML = "";
                targetedPlants.forEach((plant) => {
                    console.log(plant);
                    middleSectionCards.innerHTML += `
                    <div id="${plant.id}" class="card bg-base-100 shadow-sm">
                                <figure class="">
                                    <img
                                        src="${plant.image}"
                                        alt="Plant"
                                        class="rounded-t-xl h-48 w-full object-cover"
                                    />
                                </figure>
                                <div class="card-body px-3 pt-0">
                                    <h2 class="card-title">${plant.name}</h2>
                                    <p class="text-sm font-light">
                                        ${plant.description}
                                    </p>
                                    <div
                                        class="flex justify-between items-center"
                                    >
                                        <button
                                            class="btn btn-xs rounded-xl bg-[#dcfce7] text-[#15803D]"
                                        >
                                            ${plant.category}
                                        </button>
                                        <p class="text-right"><span class="text-xl font-bold">৳</span>${plant.price}</p>
                                    </div>
                                    <div class="card-actions">
                                        <button
                                            class="btn btn-primary w-full bg-[#15803D] rounded-full"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                    `;
                });
            });
    }
});
