export const isBrowser = typeof window !== 'undefined'

export function setBrowserStorage(item: string, value: any = null, session: boolean = false): null {
  if (session) {
    sessionStorage.setItem(item, JSON.stringify(value))
  } else {
    localStorage.setItem(item, JSON.stringify(value))
  }

  return null
}

export function getBrowserStorage<T = {}>(item: string, session: boolean = false): T | null {
  if (session) {
    const localValue = sessionStorage.getItem(item)
    if (localValue) {
      const value: T = JSON.parse(localValue)
      return value
    }
  } else {
    const localValue = localStorage.getItem(item)
    if (localValue) {
      const value: T = JSON.parse(localValue)
      return value
    }
  }

  return null
}