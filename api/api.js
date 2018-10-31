

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
export function getSub(endpoint)
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
