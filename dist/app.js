var _a, _b, _c, _d;
import { getFoodResult } from "./classes/showFoodResults.js";
import { createTabData } from "./classes/createTabsData.js";
import { getAllDAta } from "./classes/getAllData.js";
import { createImageTab, postImages, deleteImageList } from "./classes/uploadImageFiles.js";
import { postData } from "./src/handler.js";
import { getMealsPerPage } from "./classes/paginateMeals.js";
import { error_message_form, data_status, alert, all_meals, submit_data } from "./classes/constants.js";
import "./components/getNutritionalData.js";
import "./components/deleteMeal.js";
import { closeDetailsModal } from "./components/closeDetailsModal.js";
getMealsPerPage(0);
getFoodResult();
createImageTab();
deleteImageList();
closeDetailsModal();
const dd = new createTabData();
dd.createIngredientsTab();
dd.createPreparationStepsTab();
dd.createPreparationTimeTab();
dd.createTotalTimeTab();
dd.createOptionalIngredientsTab();
const getInput = new getAllDAta();
submit_data === null || submit_data === void 0 ? void 0 : submit_data.addEventListener('click', (e) => {
    e.preventDefault();
    const meal_name = getInput.getMealName();
    const ingredient_names = getInput.getIngredientNames().length;
    const prep_steps = getInput.getPrepSteps().length;
    const prep_time = getInput.getPrepTime();
    const total_time = getInput.getTotalTime();
    const tags = getInput.getTags();
    const meal_temperature = getInput.getMealTemp();
    const meal_type = getInput.getMealType();
    const ingredients_type = getInput.getIngredientType();
    if (!meal_name) {
        error_message_form.classList.remove("hidden");
    }
    else {
        data_status.classList.remove("hidden");
        error_message_form.classList.add("hidden");
        // Delay 1 second and post data
        setTimeout(() => {
            data_status.classList.add("hidden");
            // post all data if fields are not null
            postData('/wp-json/nutrily/v1/user/meals/create', {
                meal_name: meal_name,
                ingredient_names: JSON.stringify(getInput.getIngredientNames()),
                prep_steps: JSON.stringify(getInput.getPrepSteps()),
                prep_time: prep_time,
                total_time: total_time,
                tags: tags,
                meal_temperature: meal_temperature,
                meal_type: meal_type,
                ingredients_type: ingredients_type,
                img_link: JSON.stringify(postImages()),
                general_note: getInput.getGeneralMessage(),
                optional_note: getInput.getOptionalMessage(),
                optional_ingredients: JSON.stringify(getInput.getOptionalIngredients())
            });
            // retrieve new data after submit
            all_meals.innerHTML = "";
            getMealsPerPage(0);
            alert.classList.remove("hidden");
        }, 800);
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
});
(_a = document.querySelector('.open-ingredients')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
    var _a;
    e.preventDefault();
    (_a = document.querySelector('#show-open-ingredients')) === null || _a === void 0 ? void 0 : _a.classList.toggle('hidden');
});
(_b = document.querySelector('.open-optional-ingredients')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (e) => {
    var _a;
    e.preventDefault();
    (_a = document.querySelector('#show-optional-ingredients')) === null || _a === void 0 ? void 0 : _a.classList.toggle('hidden');
});
(_c = document.querySelector('.check-nutrition')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', (e) => {
    var _a;
    e.preventDefault();
    console.log('test');
    (_a = document.querySelector('#open-nutrition-modal')) === null || _a === void 0 ? void 0 : _a.classList.toggle('hidden');
});
(_d = document.querySelector('.check-nutrition1')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', (e) => {
    var _a;
    e.preventDefault();
    console.log('test');
    (_a = document.querySelector('#open-nutrition-modal')) === null || _a === void 0 ? void 0 : _a.classList.toggle('hidden');
});
