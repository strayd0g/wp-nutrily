<div id="delete-alert" class="hidden absolute bottom-5 left-5 flex items-center w-full max-w-xs p-4 text-gray-400 bg-gray-800 rounded-lg shadow" role="alert">
    <div class="text-sm font-normal">
       Meal Deleted Successfully, Page will reload in a moment
    </div>
    <div class="flex items-center ml-auto space-x-2">
        <button type="button" class="bg-gray-800 text-gray-500 hover:text-white rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-700 inline-flex h-8 w-8" data-dismiss-target="#delete-alert" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
</div>

<div id="crypto-modal" tabindex="-1" aria-hidden="true" class="flex fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-gray-900 bg-opacity-80 fixed inset-0 z-40 justify-center">
<div class="relative h-full w-full 2xl:w-3/4 md:h-auto">
    <div class="relative overflow-x-hidden bg-gray-900 h-full overflow-y-auto rounded-lg shadow">
      <div class="absolute top-0 right-0 flex items-start justify-between p-4">
        <button type="button" class="details-close text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>

      <div role="status" class="flex justify-center m-10 data-loading hidden">
          <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
        </div>

      <div class="p-2 md:p-6 space-y-6 all-details-data hidden">
        <div>
          <!-- Image gallery -->
          <section class="overflow-hidden text-gray-700 ">
            <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div class="flex flex-wrap -m-1 md:-m-2" id="meal-images-data"></div>
            </div>
            </section>
          <!-- Product info -->
          <div class="mx-auto max-w-2xl px-2 md:px-4 md:pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div class="lg:col-span-2 lg:border-r lg:border-gray-700 lg:pr-8">
              <h1 class="text-[15px] mt-4 md:text-[25px] text-white font-bold tracking-tight uppercase text-center md:text-left" id="meal-name-data"></h1>
            </div>
            <!-- Options -->
            <div class="mt-4 lg:row-span-3 lg:mt-0">
              <h2 class="sr-only">Information</h2>
              <div class="flex gap-1">
                <label class="inline-flex w-full md:w-40 items-center justify-center p-1 text-gray-500 bg-gray-800 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 w-2 h-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.548 9l.452-2h-5.364l1.364-6h-2l-1.364 6h-5l1.364-6h-2l-1.364 6h-6.184l-.452 2h6.182l-1.364 6h-5.36l-.458 2h5.364l-1.364 6h2l1.364-6h5l-1.364 6h2l1.364-6h6.185l.451-2h-6.182l1.364-6h5.366zm-8.73 6h-5l1.364-6h5l-1.364 6z"/></svg>
                    <div class="block">
                        <div class="w-full text-xs font-medium text-blue-400" id="meal-id"></div>
                    </div>
                </label>
                <label class="inline-flex w-full md:w-40 items-center justify-center p-1 text-gray-500 bg-gray-800 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 w-2 h-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"/></svg>
                    <div class="block">
                        <div class="w-full text-xs font-medium text-blue-400" id="total-ingredients"></div>
                    </div>
                </label>
              </div>

                <div class="flex gap-1 mt-2">
                  <button type="button" class="open-ingredients py-2.5 w-full px-5 text-xs font-medium text-white focus:outline-none bg-indigo-600 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-indigo-500">Ingredients / Quantity</button>
                  <button type="button" class="open-optional-ingredients py-2.5 w-full px-5 text-xs font-medium text-white focus:outline-none bg-indigo-600 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-indigo-500">Optional Ingredients</button>
                </div>
                
                <!-- Sizes -->
                <div class="mt-6 mb-4 hidden" id="show-open-ingredients">
                  <div class="flex items-center justify-between">
                    <h3 class="text-sm font-medium text-white">Ingredients List:</h3>
                  </div>
                  <ul class="grid gap-2 w-full md:grid-cols-1 mt-2" id="ingredients-data-table"></ul>
                </div>
                <!-- Producers -->
                <div class="mt-6 mb-4 hidden" id="show-optional-ingredients">
                  <div class="flex items-center justify-between">
                    <h3 class="text-sm font-medium text-white">Ingredients List: (Optional)</h3>
                  </div>
                  <ul class="grid gap-2 w-full md:grid-cols-1 mt-2" id="ingredients-data-table-optional"></ul>
                </div>

              <!-- Reviews -->
              <div class="mt-2">
                <div href="#" class="w-full grid items-center p-3 text-base font-bold text-gray-900 rounded-lg border-b bg-gray-800 border-gray-700 group hover:shadow">
                    <span class="font-medium whitespace-nowrap text-white">Preparation Time</span>
                    <span class="items-center justify-center py-0.5 text-xs font-medium text-gray-400 rounded" id="prep-time-data"></span>
                </div>
              </div>

              <div class="mt-2">
                <div href="#" class="w-full grid items-center p-3 text-base font-bold text-gray-900 rounded-lg border-b bg-gray-800 border-gray-700 group hover:shadow">
                    <span class="bb font-medium whitespace-nowrap text-white">Total Time</span>
                    <span id="total-time-data" class="items-center justify-center py-0.5 text-xs font-medium text-gray-400 rounded"></span>
                </div>
              </div>

              
              <div class="mt-2 flex gap-1">
                <div href="#" class="w-full grid items-center p-3 text-base font-bold text-gray-900 rounded-lg border-b bg-gray-800 border-gray-700 group hover:shadow">
                    <span class="font-medium whitespace-nowrap text-white">Tags</span>
                    <span class="items-center justify-center py-0.5 text-xs font-medium text-gray-400 rounded" id="tags-data"></span>
                </div>
                <div href="#" class="w-full grid items-center p-3 text-base font-bold text-gray-900 rounded-lg border-b bg-gray-800 border-gray-700 group hover:shadow">
                    <span class="font-medium whitespace-nowrap text-white">Meal Type</span>
                    <span class="items-center justify-center py-0.5 text-xs font-medium text-gray-400 rounded" id="meal-type-data"></span>
                </div>
              </div>

              <div class="mt-2 flex gap-1">
                <div href="#" class="w-full grid items-center p-3 text-base font-bold text-gray-900 rounded-lg border-b bg-gray-800 border-gray-700 group hover:shadow">
                    <span class="font-medium whitespace-nowrap text-white">Meal Temperature</span>
                    <span class="items-center justify-center py-0.5 text-xs font-medium text-gray-400 rounded" id="meal-temp-data"></span>
                </div>
                <div href="#" class="w-full grid items-center p-3 text-base font-bold text-gray-900 rounded-lg border-b bg-gray-800 border-gray-700 group hover:shadow">
                    <span class="font-medium whitespace-nowrap text-white">Ingredients Type</span>
                    <span class="items-center justify-center py-0.5 text-xs font-medium text-gray-400 rounded" id="ingredients-type-data"></span>
                </div>
              </div>


              
              <div class="mt-2">
                <button type="submit" class="delete-meal mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Delete Meal</button>
              </div>
            
            
            </div>

            


            <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-700 lg:pt-6 lg:pb-16 lg:pr-8">

              <div class="text-base font-bold rounded-lg border-b bg-gray-800 border-gray-700 p-4">
                <h3 class="font-medium whitespace-nowrap text-white">Preparation Steps: </h3>
                <div class="mt-2">
                  <ul role="list" class="list-decimal space-y-2 pl-4 text-sm" id="prep-steps-data"></ul>
                </div>
              </div>

              <div class="mt-2">
                <div class="space-y-6">
                  <div class="text-gray-400 rounded-lg border-b bg-gray-800 border-gray-700 p-4">
                    <span class="font-medium whitespace-nowrap text-white">General Notes: </span> <br />
                    <p class="text-xs font-medium" id="general-notes"></p> </div>
                </div>
              </div>
              
              <div class="mt-2">
                <div class="space-y-6">
                  <div class="text-gray-400 rounded-lg border-b bg-gray-800 border-gray-700 p-4">
                    <span class="font-medium whitespace-nowrap text-white">Additional Notes (Ingredients): </span> <br />
                    <p class="text-xs font-medium" id="additional-notes"></p></div>
                </div>
              </div>

              <div class="mt-2">
                <button class="check-nutrition mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" type="button">
                  Open Nutrition Facts
                </button>

                <div id="open-nutrition-modal" tabindex="-1" class="flex hidden fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-gray-900 bg-opacity-80 fixed inset-0 z-40 justify-center">
                    <div class="relative w-full h-full max-w-md md:h-auto">
                        <div class="relative bg-white rounded-lg shadow">
                            <button type="button" class="check-nutrition1 absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                              <div class="p-6 text-center">
                                  <div class="p-1 border-2 border-black font-sans w-full">
                                    <div class="text-4xl font-extrabold leading-none">Nutrition Facts</div>
                                    <div class="t-1 border-t-4 border-black text-sm pb-1"></div>
                                    <div class="t-2 border-t-8 border-black pt-1 text-sm">
                                        <div class="border-t-4 border-black flex leading-none text-xs pt-2 pb-1">
                                            <div class="pr-1">*</div>
                                            <div>The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>