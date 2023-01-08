<div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      <div class="relative w-full h-full max-w-3xl md:h-auto">
        <div class="relative bg-white h-full overflow-y-auto rounded-lg shadow">
          <div class="flex items-start justify-between p-4 border-b rounded-t">
            <h3 class="text-xl font-semibold text-gray-900"> Create Meal </h3>
            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-6 space-y-6">
           <!-- Start Meal Name -->
              <div class="relative">
                <input type="text" id="meal_name" class="border block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label for="meal_name" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Meal Name</label>
              </div>
           <!-- -->
            <!-- Start File upload -->
            <div class="flex items-center justify-center w-full">
              <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 text-center images-notif">
                    <span class="font-semibold">Click to upload</span> or drag and drop <br /> SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                  <ul id="file-image-list" class="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400"></ul>
                </div>
                <input id="dropzone-file" type="file" class="hidden" multiple />
              </label>
            </div>
            <!-- End File Upload -->
            <!-- Start Ingredients (Quantity) -->
            <div>
              <div class="grid md:grid-cols-3 grid-cols-2 gap-2">
                <div class="relative relative md:col-span-2">
                  <input type="text" id="ingredient" value="" list="ingredients_list" class="border block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label for="ingredient" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Ingredient</label>
                </div>
                <datalist id="ingredients_list"></datalist>
                <div class="relative">
                  <input type="number" min="0" id="ingredient_quantity" class="border block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label for="ingredient_quantity" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Quantity</label>
                  <button id="submit_ingredients_list" class="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Add</button>
                </div>
              </div>
              <!-- Start Ingredients (Table) -->
              <div id="ingredients-table" class="mt-2 hidden" data-accordion="open">
                <h2 id="accordion-open-heading-2">
                  <button type="button" class="flex border bg-gray-800 rounded-lg items-center justify-between w-full p-2 font-medium text-left border-b-0 border-gray-700 text-gray-400" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                    <span class="flex items-center">
                      <svg class="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                      </svg> List of Ingredients </span>
                    <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </h2>
                <div id="accordion-open-body-2" class="hidden bg-gray-800 rounded-lg" aria-labelledby="accordion-open-heading-2">
                  <div class="p-5 font-light mt-1">
                    <p class="mb-2 text-gray-400">
                    <ul id="list" class="mt-2 space-y-1 list-inside text-gray-400 text-sm"></ul>
                    </p>
                  </div>
                </div>
              </div>
              <!-- End Ingredients (Table) -->
            </div>
            <!-- End Ingredients (Quantity) -->
            <div>
              <div class="grid md:grid-cols-4 grid-cols-2 gap-2">
                <div class="relative relative md:col-span-2">
                  <input type="text" id="ingredient_optional" value="" class="border block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label for="ingredient_optional" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Optional Ingredients</label>
                </div>
                <div class="relative">
                  <select id="optional-ingredients_unit" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3">
                    <option selected>Choose Unit</option>
                    <option value="g">G</option>
                    <option value="tsp">TSP</option>
                    <option value="tbl">TBL</option>
                    <option value="ml">ML</option>
                  </select>
                </div>
                <div class="relative">
                  <input type="number" min="0" id="ingredient_optional_quantity" class="border block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label for="ingredient_optional_quantity" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Quantity</label>
                  <button id="submit_ingredients_optional_list" class="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Add</button>
                </div>
              </div>
              <!-- Start Ingredients (Table) -->
              <div class="hidden ingredient-optional_list mt-2 block p-2 border rounded-lg hover:bg-gray-100 bg-gray-800 border-gray-700 hover:bg-gray-700">
                <p class="font-normal text-gray-400"></p>
                <ul id="ingredient-optional_list" class="space-y-1 list-inside text-gray-400 text-sm"></ul>
              </div>
              <!-- End Ingredients (Table) -->
            </div>
            <div>
              <textarea id="additional_notes-ingredients" rows="4" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500" placeholder="Addition notes for ingredients..."></textarea>
            </div>
            <!-- Start Preparation Steps -->
            <div>
              <div class="relative">
                <input type="text" id="prep_steps" class="border block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label for="prep_steps" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Preparation Steps</label>
                <button type="submit" id="prep_steps_submit" class="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Add</button>
              </div>
              <div id="prep_steps-table" class="hidden mt-2 block p-2 border rounded-lg hover:bg-gray-100 bg-gray-800 border-gray-700 hover:bg-gray-700">
                <p class="font-normal text-gray-400">
                <ul id="prep_step_list" class="space-y-1 list-inside text-gray-400 text-sm"></ul>
                </p>
              </div>
            </div>
            <!-- End Preparation Steps -->
            <!-- Start Preparation Time -->
            <div>
              <div class="relative">
                <input type="number" min="0" id="prep_time" class="border block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label for="prep_time" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Preparation Time (Minutes)</label>
              </div>
            </div>
            <!-- End Preparation Time -->
            <!-- Start Total Time -->
            <div>
              <div class="relative">
                <input type="number" min="0" id="total_time" class="border block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label for="total_time" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Total Time (Minutes)</label>
              </div>
            </div>
            <!-- End Total Time -->
            <!-- Start Tags -->
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Tags</label>
              <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex">
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                  <div class="flex items-center pl-3">
                    <input id="tag-checkbox-baked" name="tags" type="checkbox" value="Baked" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500">
                    <label for="tag-checkbox-baked" class="py-3 ml-2 w-full text-sm font-medium text-gray-900">Baked</label>
                  </div>
                </li>
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                  <div class="flex items-center pl-3">
                    <input id="tag-checkbox-boiled" name="tags" type="checkbox" value="Boiled" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500">
                    <label for="tag-checkbox-boiled" class="py-3 ml-2 w-full text-sm font-medium text-gray-900">Boiled</label>
                  </div>
                </li>
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                  <div class="flex items-center pl-3">
                    <input id="tag-checkbox-fried" name="tags" type="checkbox" value="Fried" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500">
                    <label for="tag-checkbox-fried" class="py-3 ml-2 w-full text-sm font-medium text-gray-900">Fried</label>
                  </div>
                </li>
                <li class="w-full">
                  <div class="flex items-center pl-3">
                    <input id="tag-checkbox-raw" name="tags" type="checkbox" value="Raw" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500">
                    <label for="tag-checkbox-raw" class="py-3 ml-2 w-full text-sm font-medium text-gray-900">Raw</label>
                  </div>
                </li>
              </ul>
            </div>
            <!-- End Tags -->
            <!-- Start Meal Temperature -->
            <div>
              <label for="meal_temp" class="block mb-2 text-sm font-medium text-gray-900">Meal Temperature</label>
              <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex">
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                  <div class="flex items-center pl-3">
                    <input id="temperature-checkbox-baked" name="meal_temp" type="checkbox" value="Baked" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500">
                    <label for="temperature-checkbox-baked" class="py-3 ml-2 w-full text-sm font-medium text-gray-900">Baked</label>
                  </div>
                </li>
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                  <div class="flex items-center pl-3">
                    <input id="temperature-checkbox-cold" name="meal_temp" type="checkbox" value="Cold" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500">
                    <label for="temperature-checkbox-cold" class="py-3 ml-2 w-full text-sm font-medium text-gray-900">Cold</label>
                  </div>
                </li>
              </ul>
            </div>
            <!-- End Meal Temperature -->
            <!-- Start Meal/Ingredients Type -->
            <div class="flex gap-2">
              <button id="dropdownSearchButton" data-dropdown-toggle="meal_type" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" type="button"> Meal Type <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div id="meal_type" class="hidden z-10 w-60 bg-white rounded shadow">
                <ul class="overflow-y-auto px-3 pb-3 h-48 text-sm text-gray-700" aria-labelledby="dropdownSearchButton">
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100">
                      <input id="meal-type-breakfast" type="checkbox" name="meal_type" value="Breakfast" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2">
                      <label for="meal-type-breakfast" class="ml-2 w-full text-sm font-medium text-gray-900 rounded">Breakfast</label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100">
                      <input id="meal-type-lunch" type="checkbox" name="meal_type" value="Lunch" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2">
                      <label for="meal-type-lunch" class="ml-2 w-full text-sm font-medium text-gray-900 rounded">Lunch</label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100">
                      <input id="meal-type-dinner" type="checkbox" name="meal_type" value="Dinner" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2">
                      <label for="meal-type-dinner" class="ml-2 w-full text-sm font-medium text-gray-900 rounded">Dinner</label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100">
                      <input id="meal-type-sweets" type="checkbox" name="meal_type" value="Sweets" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2">
                      <label for="meal-type-sweets" class="ml-2 w-full text-sm font-medium text-gray-900 rounded">Sweets</label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100">
                      <input id="meal-type-snacks" type="checkbox" name="meal_type" value="Snacks" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2">
                      <label for="meal-type-snacks" class="ml-2 w-full text-sm font-medium text-gray-900 rounded">Snacks</label>
                    </div>
                  </li>
                </ul>
              </div>
              <button id="dropdownSearchButton" data-dropdown-toggle="ingredients_type" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" type="button"> Ingredients Types <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div id="ingredients_type" class="hidden z-10 w-60 bg-white rounded shadow">
                <ul class="overflow-y-auto px-3 pb-3 h-48 text-sm text-gray-700" aria-labelledby="dropdownSearchButton">
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100">
                      <input id="ingredient-type-fruits" type="checkbox" name="ingredients_type" value="Fruits" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2">
                      <label for="ingredient-type-fruits" class="ml-2 w-full text-sm font-medium text-gray-900 rounded">Fruits</label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100">
                      <input id="ingredient-type-vegs" type="checkbox" name="ingredients_type" value="Vegs" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2">
                      <label for="ingredient-type-vegs" class="ml-2 w-full text-sm font-medium text-gray-900 rounded">Vegs</label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100">
                      <input id="ingredient-type-legumes" type="checkbox" name="ingredients_type" value="Legumes" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2">
                      <label for="ingredient-type-legumes" class="ml-2 w-full text-sm font-medium text-gray-900 rounded">Legumes</label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100">
                      <input id="ingredient-type-grains" type="checkbox" name="ingredients_type" value="Grains" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2">
                      <label for="ingredient-type-grains" class="ml-2 w-full text-sm font-medium text-gray-900 rounded">Grains</label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100">
                      <input id="ingredient-type-potatoes" type="checkbox" name="ingredients_type" value="Potatoes" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2">
                      <label for="ingredient-type-potatoes" class="ml-2 w-full text-sm font-medium text-gray-900 rounded">Potatoes</label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100">
                      <input id="ingredient-type-oil" type="checkbox" name="ingredients_type" value="Oil" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2">
                      <label for="ingredient-type-oil" class="ml-2 w-full text-sm font-medium text-gray-900 rounded">Oil</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <textarea id="general_notes-ingredients" rows="4" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="General notes..."></textarea>
            </div>
            <!-- End Meal/Ingredients Type -->
            <div id="error-message-forms" class="hidden flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
              <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Info</span>
              <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800"> Ooops! Make it sure you fill all the fields. Try again. </div>
            </div>
            <div role="status" class="hidden status flex justify-center">
              <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
            <div id="alert-3" class="hidden flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200" role="alert">
              <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Info</span>
              <div class="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
                Successfully Added! Page will reload in a moment.
              </div>
            </div>
          </div>
          <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
            <button id="submit_data" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add Meal</button>
            <button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    