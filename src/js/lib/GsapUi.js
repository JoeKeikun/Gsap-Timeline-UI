var template = require('../templates/ui.mustache');

export default class GsapUi {
  constructor() {
    console.log('Class init!');
    document.body.innerHTML = template.render({ name: 'World!' });
    console.log(template);
  }
};
