 'use client'
 import { useEffect, useRef, useState } from 'react'
 import { motion, AnimatePresence } from 'framer-motion'

 const Header = () => {
     const [open, setOpen] = useState(false)
     const menuRef = useRef<HTMLDivElement | null>(null)
     const buttonRef = useRef<HTMLButtonElement | null>(null)

     const handleNavigate = (id: string) => {
         setOpen(false)
        // if user chose 'our-memory', signal the music overlay to close
        if (id === 'our-memory') {
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('closeMemoryOverlay'))
            }
        }

        const el = document.getElementById(id)
        if (el) {
             // account for fixed header height so target isn't hidden
             const headerEl = document.querySelector('header')
             const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 0
            
             const rect = el.getBoundingClientRect()
             const targetY = rect.top + window.scrollY - headerHeight - 8

             window.scrollTo({ top: targetY, behavior: 'smooth' })

             if (typeof history !== 'undefined') {
                 history.replaceState(null, '', `#${id}`)
             }
         }
     }

     useEffect(() => {
         const onKey = (e: KeyboardEvent) => {
             if (e.key === 'Escape') setOpen(false)
         }

         const onClick = (e: MouseEvent) => {
             const target = e.target as Node
             if (
                 open &&
                 menuRef.current &&
                 !menuRef.current.contains(target) &&
                 buttonRef.current &&
                 !buttonRef.current.contains(target)
             ) {
                 setOpen(false)
             }
         }

         document.addEventListener('keydown', onKey)
         document.addEventListener('mousedown', onClick)
         return () => {
             document.removeEventListener('keydown', onKey)
             document.removeEventListener('mousedown', onClick)
         }
     }, [open])

     return (
         <header className='fixed top-0 left-0 w-full z-50 pointer-events-auto'>
             <div className='max-con flex justify-end p-4'>
                 <div className='relative'>
                     <button
                         ref={buttonRef}
                         aria-expanded={open}
                         aria-label='Open menu'
                         onClick={() => setOpen((s) => !s)}
                         className='w-12 h-12 bg-brown-700 rounded-full flex items-center justify-center hover:opacity-90'>
                         {/* simple X / menu icon */}
                         <svg
                             xmlns='http://www.w3.org/2000/svg'
                             viewBox='0 0 24 24'
                             width='20'
                             height='20'
                             className='fill-white'>
                             {open ? (
                                 <path d='M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59 7.12 5.7A1 1 0 0 0 5.7 7.12L10.59 12l-4.88 4.88a1 1 0 1 0 1.41 1.41L12 13.41l4.88 4.88a1 1 0 0 0 1.41-1.41L13.41 12l4.88-4.88a1 1 0 0 0 0-1.41z' />
                             ) : (
                                 <path d='M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z' />
                             )}
                         </svg>
                     </button>

                     <AnimatePresence>
                        {open && (
                            <>
                                <motion.div
                                     key='backdrop'
                                     initial={{ opacity: 0 }}
                                     animate={{ opacity: 0.02 }}
                                     exit={{ opacity: 0 }}
                                     transition={{ duration: 0.18 }}
                                     className='fixed inset-0 z-40'
                                 />

                                 <motion.div
                                     ref={menuRef}
                                     key='menu'
                                     initial={{ opacity: 0, y: -6, scale: 0.985 }}
                                     animate={{ opacity: 1, y: 0, scale: 1 }}
                                     exit={{ opacity: 0, y: -6, scale: 0.985 }}
                                     transition={{ duration: 0.18 }}
                                     className='absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg z-50 overflow-hidden'>
                                     <button
                                         onClick={() => handleNavigate('foto-angkatan')}
                                         className='w-full text-left px-4 py-3 hover:bg-gray-100 text-brown-700'>
                                         Foto Angkatan
                                     </button>
                                     <button
                                         onClick={() => handleNavigate('our-memory')}
                                         className='w-full text-left px-4 py-3 hover:bg-gray-100 text-brown-700'>
                                         Our Memory
                                     </button>
                                </motion.div>
                            </>
                        )}
                     </AnimatePresence>
                 </div>
             </div>
         </header>
     )
 }

 export default Header
