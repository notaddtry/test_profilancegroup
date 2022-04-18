export const scrollLock = () => {
  document.querySelector('body').classList.add('hidden')
}

export const scrollUnlock = () => {
  document.querySelector('body').classList.remove('hidden')
}
