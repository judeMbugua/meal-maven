
async function getMuscles() {
  const api_key = 'mqWkDRhByilkgzMjVmPQMg2Fnnwiwq86XQPzjXz3'
  options = {method:"GET",headers: { 'X-Api-Key': api_key}}
  muscle = document.getElementById('muscles_entry').value;
  url = 'https://api.api-ninjas.com/v1/exercises?muscle=' +  muscle;
  const response = await fetch(url,options);
  const data = await response.json();
  document.getElementById('type_entry').value = data[0].type;
  document.getElementById('diff_entry').value = data[0].difficulty;
  document.getElementById('inst_holder').value = data[0].instructions;

}