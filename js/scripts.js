'use strict';

import _ from 'lodash'

let arr = [0, 1, 2].map(v => v + 1);

arr = _.filter(arr, i => i > 1);

alert(`hey there, ${arr}`);
