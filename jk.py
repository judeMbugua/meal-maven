import requests
import json

muscle = 'biceps'
api_url = 'https://api.api-ninjas.com/v1/exercises?muscle=biceps'
response = requests.get(api_url, headers={'X-Api-Key': 'mqWkDRhByilkgzMjVmPQMg2Fnnwiwq86XQPzjXz3'})
if response.status_code == requests.codes.ok:
    frm = json.loads(response.text)
    print(response.text)
    
