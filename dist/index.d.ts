declare module 'undefinedify-null/index' {
  export function undefinedifyNull<T>(arg: T): any;
  export function undefinedifyNullProperties<T>(arg: T): any;

}
declare module 'undefinedify-null/index.test' {
  export {};

}
declare module 'undefinedify-null' {
  import main = require('undefinedify-null/src/index');
  export = main;
}