import { useEffect } from 'react'

/* Actualiza el título de la pestaña al entrar en cada página. */
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}
