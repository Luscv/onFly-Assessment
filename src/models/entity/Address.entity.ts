
import { IBaseModel } from '../shared/base-model';

export class AddressEntity{
  street?: string;
  number?: string;
  district?: string | null;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string | null;
  fullAddress?: string;

  constructor(this_class?: AddressEntity){
    if(this_class){
      Object.assign(this, this_class)
    }
  }
}
