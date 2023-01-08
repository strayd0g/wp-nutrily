export async function postData(url = '', data = {}) {

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    return response.json();
}

export function formatDate(date: Date ) {
  
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric'
  };
  
  let today: Date  = new Date(date);
  return today.toLocaleDateString("en-US", options);
}


export function titleCase(str: string) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {

      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }

  // Directly return the joined string
  return splitStr.join(' '); 
}
