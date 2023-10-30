
async function get() {
    const api_key = 'mqWkDRhByilkgzMjVmPQMg2Fnnwiwq86XQPzjXz3'
    options = {method:"GET",headers: { 'X-Api-Key': api_key}}
    item = document.getElementById('snack_entry').value;
    quantity = document.getElementById('quantity_entry').value;
    if (item == "" || quantity == ""){
        alert('Please fill in all the spaces');
    }
    url = 'https://api.api-ninjas.com/v1/nutrition?query=' + item
    console.log(item);
    const response = await fetch(url,options);
    const data = await response.json();
    document.getElementById('calories_entry').value = Math.round(parseFloat((data[0].calories * quantity))) ;
    document.getElementById('fat_entry').value = Math.round(parseFloat((data[0].fat_total_g * quantity)));
    document.getElementById('protein_entry').value = Math.round(parseFloat((data[0].protein_g * quantity)));
    document.getElementById('sugar_entry').value = Math.round(parseFloat((data[0].sugar_g * quantity)));
    document.getElementById('chol_entry').value = Math.round(parseFloat((data[0].cholesterol_mg * quantity)));
    document.getElementById('chol_entry').value = Math.round(parseFloat((data[0].cholesterol_mg * quantity)));
    document.getElementById('carbo_entry').value = Math.round(parseFloat((data[0].carbohydrates_total_g * quantity)));
}