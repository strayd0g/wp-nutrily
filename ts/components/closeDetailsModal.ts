import { 
    details_modal,
    details_close,
    all_details_data,
    data_loading
  } from "../classes/constants.js";


export function closeDetailsModal() {
    details_close?.addEventListener('click', (e: Event) => {
        e.preventDefault();
        console.log('close');
        details_modal?.classList.add("hidden");
        all_details_data?.classList.add("hidden");
        data_loading?.classList.add("hidden");
        document.querySelector('#nutritional-table')!.innerHTML = "";
  });
}