var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function getNutritionalValues(meal_id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`/wp-json/nutrily/v1/user/meals/nutrition/${meal_id}`)
            .then((response) => response.json())
            .then((data) => {
            getNutritionalData(data);
        });
    });
}
function getNutritionalData(data) {
    const nutritional_table_1 = document.querySelector('.t-1');
    const nutritional_table_2 = document.querySelector('.t-2');
    function parseResult(name, unit) {
        if (name)
            return (name.toFixed(2)).replace(".", ",") + `${unit}`;
        return 0 + `${unit}`;
    }
    let html_1 = "";
    let html_2 = "";
    let result = data.reduce((c, v) => {
        c[v.EUFDNAME] = (c[v.EUFDNAME] || 0) + parseFloat(v.qty) * parseFloat(v.BESTLOC) / 100;
        return c;
    }, {});
    html_1 += `<div class="flex justify-between">
  <div>
    <span class="font-bold">Energy</span>
  </div>
  <div>${parseResult(result.ENERC, 'kcal')}</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>
    <span class="font-bold">Total Fat</span>
  </div>
  <div>${parseResult(result.FAT, 'g')}</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>Saturated Fat Acid</div>
  <div>${parseResult(result.FASAT, 'g')}</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>Monounsatured fatty acids</div>
  <div>${parseResult(result.FAMCIS, 'g')}</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>Polyunsaturated fatty acids</div>
  <div>${parseResult(result.FAPU, 'g')}</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>
    <span class="font-bold">Carbohydrates</span>
  </div>
  <div>${parseResult(result.CHOAVL, 'g')}</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>Sugar</div>
  <div>${parseResult(result.SUGAR, 'g')}</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>Fiber</div>
  <div>${parseResult(result.FIBC, 'g')}</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>
    <span class="font-bold">Protein</span>
  </div>
  <div>${parseResult(result.PROT, 'g')}</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>&nbsp;</div>
  <div class="font-bold">&nbsp;</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>Calcium</div>
  <div>${parseResult(result.CA, 'mg')}</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>Iron</div>
  <div>${parseResult(result.FE, 'mg')}</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>Potassium</div>
  <div>${parseResult(result.K, 'mg')}</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>Magnesium</div>
  <div>${parseResult(result.MG, 'mg')}</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>Sodium</div>
  <div>${parseResult(result.NA, 'g')}</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>Phosphorus</div>
  <div>${parseResult(result.P, 'mg')}</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>&nbsp;</div>
  <div class="font-bold">&nbsp;</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>Iodine</div>
  <div>${parseResult(result.ID, 'μg')}</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>Selenium</div>
  <div>${parseResult(result.SE, 'μg')}</div>
</div>
<hr class="border-gray-500" />
<div class="flex justify-between">
  <div>Zinc</div>
  <div>${parseResult(result.ZN, 'mg')}</div>
</div> `;
    html_2 += `<div class="flex justify-between">
<div>Vitamin A</div>
<div>${parseResult(result.VITA, 'μg')}</div>
</div>
<hr class="border-gray-500"/>
<div class="flex justify-between">
<div>Vitamin D</div>
<div>${parseResult(result.VITD, 'μg')}</div>
</div>
<hr class="border-gray-500"/>
<div class="flex justify-between">
<div>Vitamin E</div>
<div>${parseResult(result.VITE, 'mg')}</div>
</div>
<hr class="border-gray-500"/>
<div class="flex justify-between">
<div>Vitamin K</div>
<div>${parseResult(result.VITK, 'mμg')}</div>
</div>
<hr class="border-gray-500"/>
<div class="flex justify-between">
<div>Vitamin C</div>
<div>${parseResult(result.VITC, 'mg')}</div>
</div>
<hr class="border-gray-500"/>
<div class="flex justify-between">
<div>Thiamine</div>
<div>${parseResult(result.THIA, 'mg')}</div>
</div>
<hr class="border-gray-500"/>
<div class="flex justify-between">
<div>Riboflavin</div>
<div>${parseResult(result.RIBF, 'mg')}</div>
</div>
<hr class="border-gray-500"/>
<div class="flex justify-between">
<div>Niacin</div>
<div>${parseResult(result.NIA, 'mg')}</div>
</div>
<hr class="border-gray-500"/>
<div class="flex justify-between">
<div>Vitamin B6</div>
<div>${parseResult(result.VITB6, 'mg')}</div>
</div>
<hr class="border-gray-500"/>
<div class="flex justify-between">
<div>Folate</div>
<div>${parseResult(result.FOL, 'μg')}</div>
</div>
<hr class="border-gray-500"/>
<div class="flex justify-between">
<div>Vitamin B12</div>
<div>${parseResult(result.VITB12, 'μg')}</div>
</div>
<hr class="border-gray-500"/>
<div class="flex justify-between">
<div>Biotin</div>
<div>${parseResult(result.BIOT, 'μg')}</div>
</div>
<hr class="border-gray-500"/>
<div class="flex justify-between">
<div>Pantothenic Acid</div>
<div>${parseResult(result.PANTAC, 'mg')}</div>
</div>`;
    nutritional_table_1.innerHTML = html_1;
    nutritional_table_2.innerHTML = html_2;
}
