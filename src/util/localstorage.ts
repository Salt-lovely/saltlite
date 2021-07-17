const techprefix = 'SaltLite-';
/**
 * 根据key存入本地存储
 * @param key 键值
 * @param value 要存放的值
 */
export function write(key: string, value: any) {
  if (value) {
    value = JSON.stringify(value);
  }
  localStorage.setItem(techprefix + key, value);
}
/**
 * 根据key读取本地数据
 * @param key 键值
 */
export function read<T>(key: string): T {
  let value: string | null = localStorage.getItem(techprefix + key);
  if (value && value != 'undefined' && value != 'null') {
    return <T>JSON.parse(value);
  }
  return <T>(<unknown>null);
}
/**
 * @deprecated 根据key读取本地数据，若没有则写入默认数据
 * @param key 键值
 */
export function readWithDefault<T>(key: string, defaultValue: T): T {
  let value: string | null = localStorage.getItem(techprefix + key);
  if (value && value != 'undefined' && value != 'null') {
    let temp = <T>JSON.parse(value);
    if (typeof defaultValue == 'boolean' && typeof temp == 'string') {
      // 防坑措施
      if (temp == 'true') {
        // @ts-ignore
        temp = true;
      } else {
        // @ts-ignore
        temp = false;
      }
    }
    return temp;
  }
  write(key, defaultValue);
  return defaultValue;
}
