/*
 * Hook del menú hamburguesa. Guarda si está abierto y ofrece
 * alternarlo o cerrarlo. El estado vive acá para que el Header
 * solo consuma menuOpen, toggleMenu y closeMenu.
 */
import { useCallback, useState } from 'react'

export default function useMenu() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setMenuOpen((open) => !open)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  return { menuOpen, toggleMenu, closeMenu }
}
