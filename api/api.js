export function getValues(endpoint)
{
  return fetch(`http://dnd5eapi.co/api/${endpoint}`)
  .then( res => res.json())
  .then(response =>
    {
      return response;
    })
    .catch((error) => {
      console.log(error);
    })
  }
export function getValuesFromUri(endpoint)
{
  return fetch(`${endpoint}`)
  .then( res=>res.json())
  .then(response =>
  {
    return response
  })
  .catch((error) => {
    console.log(error);
  })
}
export function getdataLocally()
{
  return fetch('http://127.0.0.1:8080')
  .then( res => res.json())
  .then(response =>
    {
      return response;
    })
    .catch((error) => {
      console.log(error);
    })
}
