var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class showFoodResults {
    constructor(query) {
        this.showResults = () => {
            const res = document.querySelector("#ingredients_list");
            res.innerHTML = "";
            if (this.input_key === "") {
                return;
            }
            let list = "";
            this.foodname_query(this.input_key).then(function (data) {
                data.map(function (food) {
                    list += '<option data-id=' + food.odid + '>' + food.foodname + '</option>';
                });
                res.innerHTML = list;
                return true;
            }).catch(function (err) {
                console.warn('Something went wrong.', err);
                return false;
            });
        };
        this.input_key = query;
    }
    foodname_query(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch('/wp-json/nutrily/v1/search/' + params);
            let data = yield response.json();
            return data;
        });
    }
}
export function getFoodResult() {
    var _a;
    (_a = document.querySelector('#ingredient')) === null || _a === void 0 ? void 0 : _a.addEventListener('keyup', (e) => {
        e.preventDefault();
        const target = e.target;
        const food_name = new showFoodResults(target.value);
        food_name.showResults();
    });
}
