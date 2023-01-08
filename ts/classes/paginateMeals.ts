import { formatDate } from "../src/handler.js";
import { getMealDetails } from "../classes/getMealDetails.js";
import { getNutritionalValues } from "../components/getNutritionalData.js";
// initialize all meals interface
interface I_AllMeals {
  meal_id: string;
  meal_name: string;
  timestamp: Date;
  tags: string;
  meal_temperature: string;
}

// counter for current page
let current_page = 0;
const next_page = document.querySelector(".next-page") as HTMLElement;
const prev_page = document.querySelector(".prev-page") as HTMLElement;
const all_meals = document.getElementById("all-meals");

// eventlistener for next page button
next_page.addEventListener("click", (e: Event) => {
  all_meals!.innerHTML = "";

  // load 5 items per page
  current_page += 5;
  getMealsPerPage(Number(current_page === 0 ? 1 : current_page));
});

// eventlistener for previous page button
prev_page.addEventListener("click", (e: Event) => {
  all_meals!.innerHTML = "";

  // load 5 items per page
  current_page -= 5;
  getMealsPerPage(current_page);
});

function titleCase(str: string) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  // Directly return the joined string
  return splitStr.join(" ");
}

const createMealElements = (element: I_AllMeals): void => {
  const li = document.createElement("li");
  li.dataset.id = String(element.meal_id);
  li.setAttribute(
    "class",
    "open-details group cursor-pointer rounded-md p-3 bg-blue-500 ring-1 ring-slate-200 shadow-sm hover:opacity-75 hover:ring-blue-500 hover:shadow-md"
  );
  all_meals?.appendChild(li);

  li.innerHTML = `<dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
    <div><dt class="sr-only">Title</dt><dd class="font-semibold text-white">${
      element.meal_name
    }</dd>
    </div><div><dt class="sr-only">Category</dt><dd class="text-white">${formatDate(
      element.timestamp
    )}</dd></div>
    <div class="col-start-2 flex gap-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
    <div class="border px-2 text-sm border-gray-300 rounded-lg"><span class="text-white">${
      element.tags
    }</span></div>
    <div class="border px-2 text-sm border-gray-300 rounded-lg"><span class="text-white">${
      element.meal_temperature
    }</span></div>
    </div></dl>`;
};

export async function getMealsPerPage(page_num: number) {
  // fetch items per page
  await fetch(`/wp-json/nutrily/v1/user/meals/page/${page_num}`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach(createMealElements);
      const status = document.querySelectorAll(".open-details");
      const details_modal = document.querySelector("#crypto-modal");

      // for popup details modal
      for (let i = 0; i < status.length; i++) {
        status[i].addEventListener("click", function (this: any) {
          details_modal?.classList.remove("hidden");
          getMealDetails(this.getAttribute("data-id"));

          localStorage.setItem("meal_id", this.getAttribute("data-id"));
          getNutritionalValues(this.getAttribute("data-id"));
          document.querySelector(".data-loading")?.classList.remove("hidden");
        });
      }

      if (data.length === 5 || page_num === 0) {
        next_page!.classList.remove("hidden");
        prev_page!.classList.add("hidden");
      } else {
        next_page!.classList.add("hidden");
        prev_page!.classList.remove("hidden");
      }
    });
}

async function getMealByNameOrID(meal_identifier: string) {
  const response = await fetch(
    `/wp-json/nutrily/v1/user/meals/get/${meal_identifier}`
  );
  const data = await response.json();
  return data;
}

document
  .querySelector('[name="search-meals"]')
  ?.addEventListener("keyup", function (this: any) {
    const res = document.querySelector("#all-meals")!;
    res.innerHTML = "";

    if (this.value === "") {
      getMealsPerPage(0);
      return;
    }

    let list = "";
    setTimeout(() => {
      getMealByNameOrID(this.value).then((meals) => {
        meals.forEach((element: any) => {
          list += `<li data-id=${
            element.meal_id
          } class="open-details group cursor-pointer rounded-md p-3 bg-blue-500 ring-1 ring-slate-200 shadow-sm hover:opacity-75 hover:ring-blue-500 hover:shadow-md">
          <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
            <div>
              <dt class="sr-only">Title</dt>
              <dd class="font-semibold text-white">${element.meal_name}</dd>
            </div>
            <div>
              <dt class="sr-only">Category</dt>
              <dd class="text-white">${formatDate(element.timestamp)}</dd>
            </div>
            <div class="col-start-2 flex gap-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
              <div class="border px-2 text-sm border-gray-300 rounded-lg">
                <span class="text-white">${element.tags}</span>
              </div>
              <div class="border px-2 text-sm border-gray-300 rounded-lg">
                <span class="text-white">${element.meal_temperature}</span>
              </div>
            </div>
          </dl>
        </li>`;
          res.innerHTML = list;
        });

        const status = document.querySelectorAll(".open-details");
        const details_modal = document.querySelector("#crypto-modal");

        // for popup details modal
        for (let i = 0; i < status.length; i++) {
          status[i].addEventListener("click", function (this: any) {
            details_modal?.classList.remove("hidden");
            getMealDetails(this.getAttribute("data-id"));

            localStorage.setItem("meal_id", this.getAttribute("data-id"));
            getNutritionalValues(this.getAttribute("data-id"));
            document.querySelector(".data-loading")?.classList.remove("hidden");
          });
        }
      });
    }, 800);
  });
