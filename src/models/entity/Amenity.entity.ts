import { IBaseModel } from "../shared/base-model";

export class AmenityEntity{
  key?: string;
  label?: string;

  constructor(this_class?: AmenityEntity){
    if(this_class){
      Object.assign(this, this_class)
    }
  }
}
