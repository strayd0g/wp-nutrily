export async function getNutritionalValues(meal_id: string) {
    await fetch(`/wp-json/nutrily/v1/user/meals/nutrition/${meal_id}`)
    .then((response) => response.json())
    .then((data) => {
  
      getNutritionalData(data, "ENERC", "g");
      getNutritionalData(data, "SUCS", "g");
      getNutritionalData(data, "FAT", "g");
      getNutritionalData(data, "FASAT", "g");
      getNutritionalData(data, "FAMCIS", "g");
      getNutritionalData(data, "FAPU", "g");
      getNutritionalData(data, "CHOAVL", "g");
      getNutritionalData(data, "SUGAR", "g");
      getNutritionalData(data, "FIBC", "g");
      getNutritionalData(data, "PROT", "g");
      getNutritionalData(data, "CA", "g");
      getNutritionalData(data, "FE", "g");
      getNutritionalData(data, "K", "g");
      getNutritionalData(data, "MG", "g");
      getNutritionalData(data, "NA", "g");
      getNutritionalData(data, "P", "g");
      getNutritionalData(data, "ID", "g");
      getNutritionalData(data, "SE", "g");
      getNutritionalData(data, "ZN", "g");
      getNutritionalData(data, "VITA", "g");
      getNutritionalData(data, "VITD", "g");
      getNutritionalData(data, "VITE", "g");
      getNutritionalData(data, "VITK", "g");
      getNutritionalData(data, "VITC", "g");
      getNutritionalData(data, "THIA", "g");
      getNutritionalData(data, "RIBF", "g");
      getNutritionalData(data, "NIA", "g");
      getNutritionalData(data, "VITB6", "g");
      getNutritionalData(data, "FOL", "g");
      getNutritionalData(data, "VITB12", "g");
      getNutritionalData(data, "BIOT", "g");
      getNutritionalData(data, "PANTAC", "g");
      
    })
  }
function getNutritionalData(data: any, EUFDNAME: string, unit: string) {
    function parseToDecimal(result: string) {
      return parseFloat(result.replace(",", "."));
    }
    
    const result = data.filter((playlist: any) => playlist.EUFDNAME === EUFDNAME);
    console.log(result.length);
    let d : number = 0;
  
    for(let i = 0; i<result.length; i++) {
      d += parseInt(result[i].qty) * parseToDecimal(result[i].BESTLOC) / 100;
    }
  
    const a = document.querySelector('#nutritional-table');
    if(result.length !== 0) {
      a!.innerHTML += `<hr class="border-gray-500"/>
      <div class="flex justify-between">
          <div>${EUFDNAME}</div>
          <div>${d.toFixed(2)}${unit}</div>
      </div>`;
    }
  }