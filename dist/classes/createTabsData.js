export class createTabData {
    constructor() {
        // Create Ingredients Tab
        this.createIngredientsTab = () => {
            let list = document.getElementById('list');
            let add = document.getElementById('submit_ingredients_list');
            add === null || add === void 0 ? void 0 : add.addEventListener('click', function (e) {
                var _a, _b;
                e.preventDefault();
                const ingredient_name = document.querySelector('[id="ingredient"]');
                const quantity = document.querySelector('[id="ingredient_quantity"]');
                if (ingredient_name.value !== '' && quantity.value !== '') {
                    (_a = document.querySelector('[id="ingredients-table"]')) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
                    document.querySelector('[id="error-message-forms"]').classList.add("hidden");
                    (_b = document.querySelector('[id="ingredients-table"]')) === null || _b === void 0 ? void 0 : _b.classList.remove("hidden");
                    const num = document.querySelector('#ingredients_list option');
                    let newElement = document.createElement('LI');
                    newElement.setAttribute("class", "flex items-center");
                    list === null || list === void 0 ? void 0 : list.appendChild(newElement);
                    newElement.innerHTML = `<span class="t-ellipsis" data-id="${num.dataset.id}" data-title="${ingredient_name.value}" data-quantity="${quantity.value}">${ingredient_name.value}</span>\
                <span class="inline-flex justify-center p-3 items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">${quantity.value}</span>\
                <button class="inline-flex justify-center p-3 items-center ml-2 w-4 h-4 text-xs font-semibold text-red-700 bg-red-100 rounded-full">X</button>`;
                }
                else {
                    document.querySelector('[id="error-message-forms"]').classList.remove("hidden");
                }
            });
            list === null || list === void 0 ? void 0 : list.addEventListener('click', function (e) {
                var _a, _b;
                const target = e.target;
                if (target && target.nodeName == "BUTTON") {
                    (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
                    const list_length = document.querySelectorAll('[id="list"] li').length;
                    if (list_length === 0) {
                        (_b = document.querySelector('[id="ingredients-table"]')) === null || _b === void 0 ? void 0 : _b.classList.add("hidden");
                    }
                }
            });
        };
        // Create Optional Ingredients Tab
        this.createOptionalIngredientsTab = () => {
            let list = document.getElementById('ingredient-optional_list');
            let add = document.getElementById('submit_ingredients_optional_list');
            let unit = document.querySelector('#optional-ingredients_unit');
            let quantity = document.querySelector('#ingredient_optional_quantity');
            let ingredient_name = document.querySelector('#ingredient_optional');
            let div_ul = document.querySelector('.ingredient-optional_list');
            add === null || add === void 0 ? void 0 : add.addEventListener('click', (e) => {
                e.preventDefault();
                if (unit.value !== '' && quantity.value !== '' && ingredient_name.value !== '') {
                    div_ul.classList.remove('hidden');
                    list.innerHTML += `<li class="flex items-center" data-title="${ingredient_name.value}" data-unit="${unit.value}" data-quantity="${quantity.value}">\
                <svg class="w-4 h-4 mr-1.5 text-red-400 flex-shrink-0" fill="currentColor" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"></path></svg>\
                <span class="t-ellipsis uppercase mr-2">${ingredient_name.value}</span>\
                <div class="border px-2 text-white text-xs border-gray-300 rounded-lg mr-2"><span class="group-hover:text-white uppercase">${unit.value}</span></div>\
                <div class="border px-2 text-white text-xs border-gray-300 rounded-lg"><span class="group-hover:text-white">${quantity.value}</span></div></li>`;
                }
                else {
                    document.querySelector('[id="error-message-forms"]').classList.remove("hidden");
                }
            });
            list === null || list === void 0 ? void 0 : list.addEventListener('click', function (e) {
                var _a;
                e.preventDefault();
                const target = e.target;
                if (e.target && target.nodeName === "svg") {
                    // js: parentNode. ts: parentElement
                    (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
                    // count prep step list
                    let prep_list = document.querySelectorAll('[id="ingredient-optional_list"] li');
                    const list_length = prep_list.length;
                    if (list_length === 0) {
                        div_ul.classList.add("hidden");
                    }
                }
            });
        };
        // Create Preparation Steps Tab
        this.createPreparationStepsTab = () => {
            let prep_step_list = document.getElementById('prep_step_list');
            let prep_step = document.getElementById('prep_steps_submit');
            prep_step === null || prep_step === void 0 ? void 0 : prep_step.addEventListener('click', function (e) {
                e.preventDefault();
                const name = document.querySelector("#prep_steps");
                if (name.value !== '') {
                    document.querySelector('[id="error-message-forms"]').classList.add("hidden");
                    document.querySelector('[id="prep_steps-table"]').classList.remove("hidden");
                    let newElement = document.createElement('LI');
                    newElement.setAttribute("class", "flex items-center");
                    prep_step_list === null || prep_step_list === void 0 ? void 0 : prep_step_list.appendChild(newElement);
                    newElement.innerHTML = `<svg class="w-4 h-4 mr-1.5 text-red-400 flex-shrink-0" fill="currentColor" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>\
                    <span class="t-ellipsis capitalize">${name === null || name === void 0 ? void 0 : name.value}</span>`;
                }
                else {
                    document.querySelector('[id="error-message-forms"]').classList.remove("hidden");
                }
            });
            prep_step_list === null || prep_step_list === void 0 ? void 0 : prep_step_list.addEventListener('click', function (e) {
                var _a;
                e.preventDefault();
                const target = e.target;
                if (e.target && target.nodeName === "svg") {
                    // js: parentNode. ts: parentElement
                    (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
                    // count prep step list
                    let prep_list = document.querySelectorAll('[id="prep_step_list"] li');
                    const list_length = prep_list.length;
                    if (list_length === 0) {
                        document.querySelector('[id="prep_steps-table"]').classList.add("hidden");
                    }
                }
            });
        };
        this.createPreparationTimeTab = () => {
            let ul_data = document.getElementById('prep_time-value');
            let submit = document.getElementById('submit-prep_time');
            submit === null || submit === void 0 ? void 0 : submit.addEventListener('click', (e) => {
                var _a;
                e.preventDefault();
                const name = document.querySelector("#prep_time");
                const stopper = (_a = document.querySelectorAll('#prep_time-value li')) === null || _a === void 0 ? void 0 : _a.length;
                if (name.value !== "") {
                    document.querySelector('[id="error-message-forms"]').classList.add("hidden");
                    document.querySelector('[id="prep_time-table"]').classList.remove("hidden");
                    let newElement = document.createElement('LI');
                    newElement.setAttribute("class", "flex items-center");
                    if (stopper !== 1) {
                        ul_data === null || ul_data === void 0 ? void 0 : ul_data.appendChild(newElement);
                    }
                    newElement.innerHTML = `<svg class="w-4 h-4 mr-1.5 text-red-400 flex-shrink-0" fill="currentColor" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>\
                <span class="t-ellipsis capitalize">${name === null || name === void 0 ? void 0 : name.value} Minute${(name === null || name === void 0 ? void 0 : name.value) === '1' ? "" : "s"}</span>`;
                }
                else {
                    document.querySelector('[id="error-message-forms"]').classList.remove("hidden");
                }
            });
            ul_data === null || ul_data === void 0 ? void 0 : ul_data.addEventListener('click', (e) => {
                var _a;
                e.preventDefault();
                const target = e.target;
                if (target && target.nodeName === "svg") {
                    (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
                    let ul_count = document.querySelectorAll('[id="prep_time-value"] li');
                    const ul_length = ul_count.length;
                    if (ul_length === 0) {
                        document.querySelector('[id="prep_time-table"]').classList.add("hidden");
                    }
                }
            });
        };
        this.createTotalTimeTab = () => {
            let ul_data = document.getElementById('total_time-value');
            let submit = document.getElementById('submit-total_time');
            submit === null || submit === void 0 ? void 0 : submit.addEventListener('click', (e) => {
                var _a;
                e.preventDefault();
                const name = document.querySelector("#total_time");
                const stopper = (_a = document.querySelectorAll('#total_time-value li')) === null || _a === void 0 ? void 0 : _a.length;
                if (name.value !== "") {
                    document.querySelector('[id="error-message-forms"]').classList.add("hidden");
                    document.querySelector('[id="total_time-table"]').classList.remove("hidden");
                    let newElement = document.createElement('LI');
                    newElement.setAttribute("class", "flex items-center");
                    if (stopper !== 1) {
                        ul_data === null || ul_data === void 0 ? void 0 : ul_data.appendChild(newElement);
                    }
                    newElement.innerHTML = `<svg class="w-4 h-4 mr-1.5 text-red-400 flex-shrink-0" fill="currentColor" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>\
                <span class="t-ellipsis capitalize">${name === null || name === void 0 ? void 0 : name.value} Minute${(name === null || name === void 0 ? void 0 : name.value) === '1' ? "" : "s"}</span>`;
                }
                else {
                    document.querySelector('[id="error-message-forms"]').classList.remove("hidden");
                }
            });
        };
    }
}
