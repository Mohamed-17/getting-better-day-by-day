export function setItem(key: string, value: boolean) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
}

export function getItem(key: string) {
  try {
    const item = window.localStorage.getItem(key);
    return JSON.parse(item!);
  } catch (err) {
    console.log(err);
  }
}
