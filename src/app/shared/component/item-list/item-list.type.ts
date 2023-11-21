import { productData } from 'app/modules/products/products.type';

export interface SectionData {
  header?: string;
  type?: string;
  link?: string;
  isFirst?: boolean;
  data: productData[] | any[];
  mostViewProduct?: SectionData;
}
