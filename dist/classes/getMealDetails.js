var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { titleCase } from "../src/handler.js";
import { meal_ingredients_data, prep_steps_data, images_link_data, meal_name_data, prep_time_data, tags_data, meal_type_data, meal_temp_data, total_time_data, ingredients_type_data, mean_id, all_details_data, data_loading, } from "../classes/constants.js";
function clearAllFields() {
    meal_ingredients_data.innerHTML = '';
    document.querySelector('#ingredients-data-table-optional').innerHTML = '';
    prep_steps_data.innerHTML = '';
    images_link_data.innerHTML = '';
    meal_name_data.innerHTML = '';
    prep_time_data.innerHTML = '';
    tags_data.innerHTML = '';
    meal_type_data.innerHTML = '';
    meal_temp_data.innerHTML = '';
    total_time_data.innerHTML = '';
    ingredients_type_data.innerHTML = '';
}
const createIngredientsElements = (element) => {
    meal_ingredients_data.innerHTML += `<li>
    <label class="inline-flex w-full items-center justify-center p-3 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
    <div class="block">
      <div class="w-full text-gray-800 text-xs font-semibold">${titleCase(element.name)} <span class="border px-1 py-0.5 text-xs border-indigo-600 rounded-lg text-gray-800">${element.quantity}</span></div>
    </div>
  </label>
</li>`;
};
const createIngredientsElementsOptional = (element) => {
    document.querySelector('#ingredients-data-table-optional').innerHTML += `<li>
    <label class="inline-flex w-full items-center justify-center p-3 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
    <div class="block">
      <div class="w-full text-gray-800 text-xs font-semibold">${titleCase(element.name)} <span class="border px-1 py-0.5 text-xs border-indigo-600 rounded-lg text-gray-800">${element.quantity}</span></div>
    </div>
  </label>
</li>`;
};
const createStepsElements = (element) => {
    prep_steps_data.innerHTML += `<li class="text-gray-400"><span class="text-xs font-medium">${element}</span></li>`;
};
const createImagesElements = (element) => {
    images_link_data.innerHTML += `<div class="flex flex-wrap w-1/3"><div class="w-full p-1 md:p-2"><a data-fancybox="gallery" class="rounded-lg" data-src="/wp-content/plugins/wp-nutrily-main/dist/uploads/${element}"><img alt="gallery" class="block object-cover object-center h-48 w-96 rounded-lg" src="/wp-content/plugins/wp-nutrily-main/dist/uploads/${element}"></a></div></div>`;
};
export function getMealDetails(meal_id) {
    return __awaiter(this, void 0, void 0, function* () {
        clearAllFields();
        // fetch meal details based in  meal_id
        yield fetch(`/wp-json/nutrily/v1/user/meals/detail/${meal_id}`)
            .then((response) => response.json())
            .then((data) => {
            setTimeout(() => {
                const fetch = data[0];
                data_loading === null || data_loading === void 0 ? void 0 : data_loading.classList.add("hidden");
                all_details_data === null || all_details_data === void 0 ? void 0 : all_details_data.classList.remove("hidden");
                meal_name_data.innerHTML = `${fetch.meal_name}`;
                mean_id.innerHTML = data[0].meal_id;
                prep_time_data.textContent = `${fetch.prep_time} minutes`;
                tags_data.textContent = `${fetch.tags}`;
                meal_type_data.textContent = `${fetch.meal_type}`;
                meal_temp_data.textContent = `${fetch.meal_temperature}`;
                document.querySelector('#general-notes').textContent = `${fetch.general_notes}`;
                document.querySelector('#additional-notes').textContent = `${fetch.optional_notes}`;
                total_time_data.textContent = `${fetch.prep_total_time} minutes`;
                ingredients_type_data.textContent = `${fetch.ingredients_types}`;
                let ingredients_list = fetch.ingredients_list !== null ? fetch.ingredients_list : "";
                let ingredients_list_arr = ingredients_list === null || ingredients_list === void 0 ? void 0 : ingredients_list.split(';');
                let ingredients_list_optional = fetch.optional_ingredients_list !== null ? fetch.optional_ingredients_list : "";
                let ingredients_list_optional_arr = ingredients_list_optional === null || ingredients_list_optional === void 0 ? void 0 : ingredients_list_optional.split(';');
                let ingredients_list_optional_quantity = fetch.optional_ingredients_quantity !== null ? fetch.optional_ingredients_quantity : "";
                let ingredients_list_optional_quantity_arr = ingredients_list_optional_quantity === null || ingredients_list_optional_quantity === void 0 ? void 0 : ingredients_list_optional_quantity.split(';');
                let parse_ingredient_quantity_list = new Array();
                let parse_optional_ingredients = new Array(); // optional ingredients
                let quantity_list = fetch.quantity !== null ? fetch.quantity : "";
                let quantity_list_arr = quantity_list === null || quantity_list === void 0 ? void 0 : quantity_list.split(';');
                document.querySelector('#total-ingredients').innerHTML = `Total Ingredients: ${ingredients_list_arr.length + ingredients_list_optional_arr.length}`;
                ingredients_list_arr.forEach((ingredient_name, index) => {
                    parse_ingredient_quantity_list.push({ ['name']: ingredient_name, ['quantity']: quantity_list_arr[index] });
                });
                ingredients_list_optional_arr.forEach((ingredient_name, index) => {
                    parse_optional_ingredients.push({ ['name']: ingredient_name, ['quantity']: ingredients_list_optional_quantity_arr[index] });
                });
                console.log(parse_optional_ingredients);
                let steps_list = fetch.steps !== null ? fetch.steps : "";
                let steps_list_arr = steps_list === null || steps_list === void 0 ? void 0 : steps_list.split(';');
                steps_list_arr.forEach(createStepsElements);
                parse_ingredient_quantity_list.forEach(createIngredientsElements);
                parse_optional_ingredients.forEach(createIngredientsElementsOptional);
                let image_links = fetch.image_links !== null ? fetch.image_links : "";
                let image_links_arr = image_links === null || image_links === void 0 ? void 0 : image_links.split(';');
                image_links_arr.forEach(createImagesElements);
            }, 1000);
        });
    });
}
