
export function toObject(data) {
    return JSON.parse(JSON.stringify(data));
}

export function isEmpty(data) {
    if (data === undefined || data === null || data === "")
        return true;
    return false;
}

export function to(promise):any{
    return promise
      .then(data => ([undefined, data]))
      .catch(error => Promise.resolve([error, undefined]));
  }