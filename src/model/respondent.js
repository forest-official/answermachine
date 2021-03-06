
import Model from '../model';
import { v4 as uuid } from 'uuid';

export default Model.extend({
  tableName: 'respondents',

  initialize: function() {
    // Set UUID that we can use to pass to frontend as unique code
    this.on('creating', () => this.set('uuid', uuid()));
    this.on('created', () => {
      // TODO - sendmail
      // this.get('uuid');
    })
  },

  responses: function() {
    return this.hasMany('Response');
  },

  recoveries: function() {
    return this.hasMany('Recovery');
  } 
})
