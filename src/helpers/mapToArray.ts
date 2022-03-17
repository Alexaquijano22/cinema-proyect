const mapToArray = (object: any) => {
    const array = []
    for (const elem in object) {
       array.push({
          ...object[elem],
          id: elem
       })
    }
    return array
 }
 
export {mapToArray}