const _ = require('lodash');
module.exports.getLandscapeCategories = ({ landscape, landscapeSettings }) => {
  if (landscapeSettings.isMain || landscapeSettings.url == 'super-blueprint') {
    return landscape.filter( ({ level }) => level === 1).filter((category) => {
      return _.find(landscapeSettings.elements, (element) => element.category === category.id);
    })
  } else {
    return landscape.filter(({ label }) => label === landscapeSettings.category)
  }
}
