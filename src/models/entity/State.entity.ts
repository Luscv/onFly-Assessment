export class StateEntity {
  name?: string;
  shortname?: string;

  constructor(this_class?: StateEntity){
    if(this_class){
      Object.assign(this, this_class)
    }
  }
}
