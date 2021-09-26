import { TypeModel } from '../model/type.model';

export const ItemTypeList: TypeModel[] = [
    {
        Id: 1,
        Value: 'Individual'
    },
    {
        Id: 2,
        Value: 'Group'
    },
];

export enum ItemTypes {
    Individual = 1,
    Group = 2
}
