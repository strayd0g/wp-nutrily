var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
import { formatDate } from "../src/handler.js";
import { getMealDetails } from "../classes/getMealDetails.js";
import { getNutritionalValues } from "../components/getNutritionalData.js";
// counter for current page
let current_page = 0;
const next_page = document.querySelector(".next-page");
const prev_page = document.querySelector(".prev-page");
const all_meals = document.getElementById("all-meals");
// eventlistener for next page button
next_page.addEventListener("click", (e) => {
    all_meals.innerHTML = "";
    // load 5 items per page
    current_page += 5;
    getMealsPerPage(Number(current_page === 0 ? 1 : current_page));
});
// eventlistener for previous page button
prev_page.addEventListener("click", (e) => {
    all_meals.innerHTML = "";
    // load 5 items per page
    current_page -= 5;
    getMealsPerPage(current_page);
});
function titleCase(str) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
        // Assign it back to the array
        splitStr[i] =
            splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
}
const createMealElements = (element) => {
    const li = document.createElement("li");
    li.dataset.id = String(element.meal_id);
    li.setAttribute("class", "open-details group cursor-pointer rounded-md p-3 bg-blue-500 ring-1 ring-slate-200 shadow-sm hover:opacity-75 hover:ring-blue-500 hover:shadow-md");
    all_meals === null || all_meals === void 0 ? void 0 : all_meals.appendChild(li);
    li.innerHTML = `<dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
    <div><dt class="sr-only">Title</dt><dd class="font-semibold text-white">${element.meal_name}</dd>
    </div><div><dt class="sr-only">Category</dt><dd class="text-white">${formatDate(element.timestamp)}</dd></div>
    <div class="col-start-2 flex gap-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
    <div class="border px-2 text-sm border-gray-300 rounded-lg"><span class="text-white">${element.tags}</span></div>
    <div class="border px-2 text-sm border-gray-300 rounded-lg"><span class="text-white">${element.meal_temperature}</span></div>
    </div></dl>`;
};
export function getMealsPerPage(page_num) {
    return __awaiter(this, void 0, void 0, function* () {
        // fetch items per page
        yield fetch(`/wp-json/nutrily/v1/user/meals/page/${page_num}`)
            .then((response) => response.json())
            .then((data) => {
            data.forEach(createMealElements);
            const status = document.querySelectorAll(".open-details");
            const details_modal = document.querySelector("#crypto-modal");
            // for popup details modal
            for (let i = 0; i < status.length; i++) {
                status[i].addEventListener("click", function () {
                    var _a;
                    details_modal === null || details_modal === void 0 ? void 0 : details_modal.classList.remove("hidden");
                    getMealDetails(this.getAttribute("data-id"));
                    localStorage.setItem("meal_id", this.getAttribute("data-id"));
                    getNutritionalValues(this.getAttribute("data-id"));
                    (_a = document.querySelector(".data-loading")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
                });
            }
            if (data.length === 5 || page_num === 0) {
                next_page.classList.remove("hidden");
                prev_page.classList.add("hidden");
            }
            else {
                next_page.classList.add("hidden");
                prev_page.classList.remove("hidden");
            }
        });
    });
}
function getMealByNameOrID(meal_identifier) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`/wp-json/nutrily/v1/user/meals/get/${meal_identifier}`);
        const data = yield response.json();
        return data;
    });
}
(_a = document
    .querySelector('[name="search-meals"]')) === null || _a === void 0 ? void 0 : _a.addEventListener("keyup", function () {
    const res = document.querySelector("#all-meals");
    res.innerHTML = "";
    if (this.value === "") {
        getMealsPerPage(0);
        return;
    }
    let list = "";
    setTimeout(() => {
        getMealByNameOrID(this.value).then((meals) => {
            meals.forEach((element) => {
                list += `<li data-id=${element.meal_id} class="open-details group cursor-pointer rounded-md p-3 bg-blue-500 ring-1 ring-slate-200 shadow-sm hover:opacity-75 hover:ring-blue-500 hover:shadow-md">
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
                status[i].addEventListener("click", function () {
                    var _a;
                    details_modal === null || details_modal === void 0 ? void 0 : details_modal.classList.remove("hidden");
                    getMealDetails(this.getAttribute("data-id"));
                    localStorage.setItem("meal_id", this.getAttribute("data-id"));
                    getNutritionalValues(this.getAttribute("data-id"));
                    (_a = document.querySelector(".data-loading")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
                });
            }
        });
    }, 800);
});
