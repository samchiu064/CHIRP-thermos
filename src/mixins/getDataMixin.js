// Private Funcitons
function convertColor(chineseName) {
  if (chineseName === '胡克綠') return 'classic-green';
  if (chineseName === '灰玫紅') return 'classic-red';
  if (chineseName === '灰丁寧藍') return 'classic-blue';
  return false;
}

function convertOrder(chineseName) {
  if (chineseName === '胡克綠') return 1;
  if (chineseName === '灰玫紅') return 2;
  if (chineseName === '灰丁寧藍') return 3;
  return false;
}

function addColor(item, chineseName) {
  Object.defineProperty(item, 'chtColor', {
    value: chineseName,
    writable: false,
  });
  Object.defineProperty(item, 'engColor', {
    value: convertColor(chineseName),
    writable: false,
  });
}

function addOrder(item, chineseName) {
  Object.defineProperty(item, 'order', {
    value: convertOrder(chineseName),
    writable: false,
  });
}

export default {
  methods: {
    $_getDataMixin_getProducts() {
      return this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`,
        )
        .then((res) => {
          if (res.data.success) {
            this.origin = res.data.products; // Save origin data
          }
        })
        .catch((error) => console.log(error));
    },
    $_getDataMixin_filterCategory(categoryName) {
      this.products = this.origin.filter(
        (item) => item.category === categoryName,
      );
    },
    $_getDataMixin_addProperty(propertyName) {
      this.products.forEach((item) => {
        const startIndex = item.title.indexOf('-') + 2;
        const chineseName = item.title.slice(startIndex, item.length);

        if (propertyName === 'color') {
          addColor(item, chineseName);
        }

        if (propertyName === 'order') {
          addOrder(item, chineseName);
        }
      });
    },
    $_getDataMixin_sortProduct() {
      this.products.sort((a, b) => a.order - b.order);
    },
  },
};
