import { general_notes, additional_notes, } from "./constants.js";
export class getAllDAta {
    constructor() {
        this.getMealName = () => {
            const meal_name = document.querySelector('#meal_name');
            return meal_name.value;
        };
        this.getIngredientNames = () => {
            const ingredient_names = [];
            const d = document.querySelectorAll('#list li .t-ellipsis');
            for (let i = 0; i < d.length; i++) {
                const res = d[i];
                ingredient_names.push({ "odid": Number(res.dataset.id), "qty": Number(res.dataset.quantity), "unit": "G" });
            }
            return ingredient_names;
        };
        this.getPrepSteps = () => {
            const prep_steps = [];
            const d = document.querySelectorAll('#prep_step_list span.t-ellipsis');
            for (let i = 0; i < d.length; i++) {
                prep_steps.push({ "steps": d[i].innerText });
            }
            return prep_steps;
        };
        this.getPrepTime = () => {
            var _a, _b;
            const d = document.querySelector('#prep_time');
            let result = d === null || d === void 0 ? void 0 : d.value;
            return (_b = (_a = result === null || result === void 0 ? void 0 : result.match(/[0-9]+/g)) === null || _a === void 0 ? void 0 : _a.join("")) !== null && _b !== void 0 ? _b : 1;
        };
        this.getTotalTime = () => {
            var _a, _b;
            const d = document.querySelector('#total_time');
            let result = d === null || d === void 0 ? void 0 : d.value;
            return (_b = (_a = result === null || result === void 0 ? void 0 : result.match(/[0-9]+/g)) === null || _a === void 0 ? void 0 : _a.join("")) !== null && _b !== void 0 ? _b : 1;
        };
        this.getTags = () => {
            const tags = [];
            const d = document.querySelectorAll('input[name=tags]:checked');
            for (let i = 0; i < d.length; i++) {
                tags.push(d[i].value);
            }
            return tags.join(", ");
        };
        this.getMealTemp = () => {
            const meal_temp = [];
            const d = document.querySelectorAll('input[name=meal_temp]:checked');
            for (let i = 0; i < d.length; i++) {
                meal_temp.push(d[i].value);
            }
            return meal_temp.join(", ");
        };
        this.getMealType = () => {
            const meal_type = [];
            const d = document.querySelectorAll('input[name=meal_type]:checked');
            for (let i = 0; i < d.length; i++) {
                meal_type.push(d[i].value);
            }
            return meal_type.join(", ");
        };
        this.getIngredientType = () => {
            const ingredients_type = [];
            const d = document.querySelectorAll('input[name=ingredients_type]:checked');
            for (let i = 0; i < d.length; i++) {
                ingredients_type.push(d[i].value);
            }
            return ingredients_type.join(", ");
        };
        this.getOptionalIngredients = () => {
            const ingredient_names = [];
            const list = document.querySelectorAll('#ingredient-optional_list li');
            for (let i = 0; i < list.length; i++) {
                const res = list[i];
                ingredient_names.push({ "foodname": res.dataset.title, "unit": res.dataset.unit, "quantity": res.dataset.quantity });
            }
            return ingredient_names;
        };
        this.getGeneralMessage = () => {
            const result = general_notes;
            return result.value;
        };
        this.getOptionalMessage = () => {
            const result = additional_notes;
            return result.value;
        };
    }
}
