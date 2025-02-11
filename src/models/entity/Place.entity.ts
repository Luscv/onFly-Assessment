import { StateEntity } from './State.entity';

export class PlaceEntity {
  name?: string;
  state?: StateEntity;
  placeId?: number | null;
  fullname?: string;

  constructor(this_class?: PlaceEntity){
    if(this_class){
      Object.assign(this, this_class)
    }
  }
}
