import {getValues, getValuesFromUri} from '../utility/api';

class Utility
{
  async Class(parent)
  {
    const classes = await this.Item(parent.state.classes)
    parent.setState({randomizedClass: classes})

    const item3 = await this.Subinfo('classes/', parent.state.randomizedClass)
    parent.setState({subClass: item3})
  }
  async Race(parent)
  {
    const races = await this.Item(parent.state.races)
    parent.setState({randomizedRace: races})

    const item4= await getValuesFromUri(parent.state.randomizedRace.url)
    parent.setState({subRace: item4})
  }
  Subinfo(url, endpoint)
  {
    return new Promise((resolve, reject)=>
    {
      if(endpoint)
      {
        let name = endpoint.name.toLowerCase()
        getValues(`${url}${name}`).then(res=>
          {
            resolve(res)
          })
      }
    })
  }
  Item(array)
  {
    return new Promise((resolve,reject) =>
    {
      let item =array.results[Math.floor(Math.random()*array.count)];
      if(!item)
      {
        reject('couldnt generate a random value')
      }
      resolve(item)
    });
  }
  Save(character)
  {

  }
}
export default Utility
