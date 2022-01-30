import { mapper } from './services'

export function camelToSnake(object: Record<any, any>): any {
  const formattingMethod = (key: string)=> {
    return key.replace(/([A-Z])/g, function ($1) {
      return `_${$1.toLowerCase()}`;
    })
  }
  return mapper(object, formattingMethod, camelToSnake)

}

export function snakeToCamel(object: Record<any, any>): any {
  const formattingMethod = (key: string)=> {
    return key.replace(/(\_\w)/g, function (k) {
      return k[1].toUpperCase();
    });
  }
  return mapper(object, formattingMethod, snakeToCamel)
}
