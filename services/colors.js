import colorData from './db/colorData'

const brands = {
  getAll: () => {
    return colorData;
  },
  getByBrand: (id) => {
    const result = colorData.filter(x => x.BrandId == id)

    console.log(result);
    return result;
  }
}

export default brands;

