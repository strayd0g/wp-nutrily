import { details_modal, details_close, all_details_data, data_loading } from "../classes/constants.js";
export function closeDetailsModal() {
    details_close === null || details_close === void 0 ? void 0 : details_close.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('close');
        details_modal === null || details_modal === void 0 ? void 0 : details_modal.classList.add("hidden");
        all_details_data === null || all_details_data === void 0 ? void 0 : all_details_data.classList.add("hidden");
        data_loading === null || data_loading === void 0 ? void 0 : data_loading.classList.add("hidden");
        document.querySelector('#nutritional-table').innerHTML = "";
    });
}
