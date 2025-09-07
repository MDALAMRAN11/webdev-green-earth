const addLoading = () => {
    document.getElementById("addRemove-loading").classList.remove("hidden");
};
const removeLoading = () => {
    document.getElementById("addRemove-loading").classList.add("hidden");
};

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
        const middleSectionCards = document.getElementById(
            "middle-section-Cards"
        );
        middleSectionCards.innerHTML = "";
        const plants = data.plants;
        plants.forEach((plant) => {
            middleSectionCards.innerHTML += `
            <div id="${plant.id}" class="card bg-base-100 shadow-sm">
                                <figure class="px-2 pt-2">
                                    <img
                                        src="${plant.image}"
                                        alt="Plant"
                                        class="rounded-xl h-48 w-full object-cover"
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
