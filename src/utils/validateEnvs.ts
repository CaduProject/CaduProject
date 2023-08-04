function addValidation(key: string, errMsg: string = "") {
  const value = process.env[key]
  return {
    key: key,
    value: value,
    errMsg: errMsg ? errMsg : `Missing Env ${key}`
  }
}

function validator(env: any) {
  if (!env.value) {
    console.warn(env.errMsg);
    return true;
  }
  return false
} 

function validateAllEnvs(listOfEnvs: Array<Object>) {
  let err_count = 0
  listOfEnvs.forEach((value) => {
    if (validator(value)) {
      err_count++
    }
  })
  return err_count
}

export function validateEnv() {
  const listOfEnvs = [
    addValidation('BOT_TOKEN'),
    addValidation('DB_USER'),
    addValidation('DB_PASSWORD')
  ]

  const err_count = validateAllEnvs(listOfEnvs)
  if (err_count > 0) return true

  return false
};
