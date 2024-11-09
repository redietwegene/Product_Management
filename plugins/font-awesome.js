import { library } from '@fortawesome/fontawesome-svg-core';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faMobileAlt);

export default (context, inject) => {
  context.app.component('font-awesome-icon', FontAwesomeIcon);
};
