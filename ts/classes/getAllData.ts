import { 
    general_notes,
    additional_notes,
} from "./constants.js";

interface I_IngredientNames {
    odid: number | undefined;
    qty: number | undefined;
    unit: string;
}

interface I_PrepSteps {
    steps: string | undefined
}

export class getAllDAta {

    getMealName = (): string => {
        const meal_name = document.querySelector('#meal_name') as HTMLInputElement;
        return meal_name.value;
    }

    getIngredientNames = (): Partial<I_IngredientNames>[] => {

        const ingredient_names: I_IngredientNames[] = [];
        
        const d = document.querySelectorAll('#list li .t-ellipsis');
        
        for(let i = 0; i < d.length; i++) {
            const res = (d[i] as HTMLElement);
            ingredient_names.push({ "odid": Number(res.dataset.id), "qty": Number(res.dataset.quantity), "unit": "G"});
        }

        return ingredient_names;
    }
    
    getPrepSteps = () => {
        const prep_steps : I_PrepSteps[] = [];
        const d = document.querySelectorAll('#prep_step_list span.t-ellipsis');

        for(let i = 0; i < d.length; i++) {
            prep_steps.push({ "steps": (d[i] as HTMLElement).innerText });
        }

        return prep_steps;
    }

    getPrepTime = ()  => {        
        const d = document.querySelector('#prep_time') as HTMLInputElement;
        let result = d?.value;
        return result?.match(/[0-9]+/g)?.join("") ?? 1;
    }

    getTotalTime = () => {
        const d = document.querySelector('#total_time') as HTMLInputElement;
        let result = d?.value;
        return result?.match(/[0-9]+/g)?.join("") ?? 1;
    }
    
    getTags = () => {
        const tags = [];

        const d = document.querySelectorAll('input[name=tags]:checked');

        for(let i = 0; i < d.length; i++) {
            tags.push((d[i] as HTMLInputElement).value);
        }

        return tags.join(", ");
    }

    getMealTemp = () => {
        const meal_temp = [];

        const d = document.querySelectorAll('input[name=meal_temp]:checked');

        for(let i = 0; i < d.length; i++) {
            meal_temp.push((d[i] as HTMLInputElement).value);
        }

        return meal_temp.join(", ");
    }

    getMealType = () => {
        const meal_type = [];

        const d = document.querySelectorAll('input[name=meal_type]:checked');

        for(let i = 0; i < d.length; i++) {
            meal_type.push((d[i] as HTMLInputElement).value);
        }

        return meal_type.join(", ");
    }

    getIngredientType = () => {
        const ingredients_type = [];

        const d = document.querySelectorAll('input[name=ingredients_type]:checked');

        for(let i = 0; i < d.length; i++) {
            ingredients_type.push((d[i] as HTMLInputElement).value);
        }

        return ingredients_type.join(", ");
    }


    getOptionalIngredients = () => {
        const ingredient_names = [];
        const list = document.querySelectorAll('#ingredient-optional_list li');

        for(let i = 0; i < list.length; i++) {
            const res = (list[i] as HTMLElement);
            ingredient_names.push({ "foodname": res.dataset.title, "unit": res.dataset.unit, "quantity": res.dataset.quantity });
        }
        
        return ingredient_names;
    }


    getGeneralMessage = () => {
        const result = general_notes as HTMLInputElement;
        return result.value;
    }


    getOptionalMessage = () => {
        const result = additional_notes as HTMLInputElement;
        return result.value;
    }


}