import { delete_data, delete_alert, details_modal } from "../classes/constants.js";
import { closeDetailsModal } from "../components/closeDetailsModal.js";
import { postData } from "../src/handler.js";

delete_data?.addEventListener('click', (e) => {
    e.preventDefault();

    const meal_id = localStorage.getItem('meal_id');
    postData('/wp-json/nutrily/v1/user/meals/delete', {
        meal_id: meal_id,
    });
    
    closeDetailsModal();
    details_modal?.classList.add('hidden');
    delete_alert?.classList.remove("hidden");
    setTimeout(() => {
        window.location.reload();
    }, 3000);
});