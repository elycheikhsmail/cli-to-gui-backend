export interface IDataType {
  id?: number;
  typeName: string;
}
export interface IBasUrl {
  baseUrl: string;
  isActive: boolean;
}

export interface IAction {
  id?:number,
  name: string;
  desc: string;
}

export interface IActionParams {
  actionId: number;
  key: string;
  dataType: number;
}

export interface IActionParamsShow {
  id?:number,
  key: string;
  typeName: string;
}
