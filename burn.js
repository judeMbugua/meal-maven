popUP = document.getElementById("popUp");
entry = document.getElementById("exe_entry");



function showIt() {
        document.getElementById("popUp").style.display = "block";
  }

function hideIt() {
    document.getElementById("popUp").style.display = "none";   
}

async function getBurn() {
  const api_key = 'mqWkDRhByilkgzMjVmPQMg2Fnnwiwq86XQPzjXz3'
  options = {method:"GET",headers: { 'X-Api-Key': api_key}}
  exercise = document.getElementById('exe_entry').value;
  duration = document.getElementById('duration').value;
  if  (exercise == "" || duration == ""){
      alert('Please fill in all the spaces');
      return;
  }
  if (parseInt(duration) < 60 ){
    alert('Duration must be greater than 60 minutes');
    return;  
  }
  url = 'https://api.api-ninjas.com/v1/caloriesburned?activity=' +  exercise;
  const response = await fetch(url,options);
  const data = await response.json();
  document.getElementById('calories_entry').value = Math.round(parseFloat((data[0].calories_per_hour)));
  document.getElementById('total_calories_entry').value = Math.round(parseFloat((data[0].total_calories * duration)));


}