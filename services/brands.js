import brandData from './db/brandData'

const brands = {
  getAll: () => {
    return brandData;
  },

  getById: (id) => {
    return brandData.filter(x => x.BrandId == id)[0]
  }
}

export default brands;

