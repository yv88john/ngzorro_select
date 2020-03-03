export class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    options: {key: string, value: string}[];
    children:QuestionBase<T>[];
    getValue :()=>any;
    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        type?: string,
        options?:any,
        children?:QuestionBase<T>[],
        getValue?:()=>any;
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.options = options.options===undefined?[]:options.options;
      this.children = options.children===undefined?[]:options.children;
      this.getValue = options.getValue===undefined?function(){ return null;}:options.getValue;
    }
  }