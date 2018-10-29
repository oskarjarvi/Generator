

export function getValues(endpoint)
{
  return fetch(`http://dnd5eapi.co/api/${endpoint}`)
  .then( res => res.json())
  .then(response =>
    {
      return response;
    }
    )
    .catch((error) => {
      console.log(error);
    })
    console.log(data);
  }
