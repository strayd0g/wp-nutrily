interface I_VeganFoodName {
    odid: number | string,
    foodname: string,
}

class showFoodResults {
    protected input_key: string;

    constructor(query: string) {
        this.input_key = query;
    }

    async foodname_query(params: string) {
        let response = await fetch('/wp-json/nutrily/v1/search/' + params);
        let data = await response.json();
        return data;
    }
    
    showResults = () => {
        const res = document.querySelector("#ingredients_list")!;
        res.innerHTML = "";
    
        if (this.input_key === "") {
            return;
        }
    
        let list = "";
      
        this.foodname_query(this.input_key).then(function (data) {
            
            data.map(function(food: I_VeganFoodName) {
              list += '<option data-id='+ food.odid +'>' + food.foodname + '</option>';
            })
            
            res.innerHTML = list;
            return true;
        }).catch(function (err) {
            console.warn('Something went wrong.', err);
            return false;
        });
    }
}

 
export function getFoodResult() {
        document.querySelector('#ingredient')?.addEventListener('keyup', (e: Event) => {
            e.preventDefault();
            const target = e.target as HTMLInputElement;
            const food_name = new showFoodResults(target.value);
            food_name.showResults();
    });
}