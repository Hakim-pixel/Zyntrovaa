'use client'
import { MEMBERS, CLASS_MEMBERS } from '@/constants/member'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Members = () => {
    function handleClickInstagram(instagram: string) {
        window.open(`https://www.instagram.com/${instagram.replace('@', '')}`, '_blank');
    }

    return (
    <div id='foto-angkatan' className='pt-24'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className='font-dmserif text-brown-700 text-5xl md:text-6xl text-center mb-6 mt-20'>
                Angkatan 2026
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className='flex flex-wrap justify-center gap-3 mb-12 px-4'>
                {['RPL', 'TKJ', 'MM', 'OTKP', 'AKL'].map((major) => (
                    <button
                        key={major}
                        onClick={() => {
                            const el = document.getElementById(`kelas-${major.toLowerCase()}`)
                            if (el) {
                                const headerEl = document.querySelector('header')
                                const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 0
                                const targetY = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8
                                window.scrollTo({ top: targetY, behavior: 'smooth' })
                            }
                        }}
                        className='px-6 py-2 bg-brown-700 text-white rounded-full font-semibold hover:bg-brown-800 transition-colors text-sm md:text-base'>
                        {major}
                    </button>
                ))}
            </motion.div>

            <div className='grid grid-cols-4 gap-3 max-md:grid-cols-3 max-sm:grid-cols-2'>
                {MEMBERS.map((member, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        key={index}
                        className='item-member'>
                        <Image
                            src={member.images || '/images/sample-image.png'}
                            width={671}
                            height={809}
                            alt={`Member ${index + 1}`}
                        />

                        <div className='text-center mt-3'>
                            <p className='text-brown-700 italic'>
                                &quot;{member.quote}&quot;
                            </p>
                            <p onClick={() => handleClickInstagram(member.instagram)} className='text-brown-700 font-bold cursor-pointer'>
                                {member.instagram}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Class Sections */}
            <div className='mt-20 space-y-20'>
                {['RPL', 'TKJ', 'MM', 'OTKP', 'AKL'].map((major) => (
                    <div key={major} id={`kelas-${major.toLowerCase()}`} className='pt-10'>
                        <h3 className='font-dmserif text-brown-700 text-4xl text-center mb-8'>
                            Kelas {major}
                        </h3>
                        {CLASS_MEMBERS[major] && CLASS_MEMBERS[major].length > 0 ? (
                            <div className='grid grid-cols-4 gap-3 max-md:grid-cols-3 max-sm:grid-cols-2'>
                                {CLASS_MEMBERS[major].map((member, idx) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        key={idx}
                                        className='item-member'>
                                        <Image
                                            src={member.images || '/images/sample-image.png'}
                                            width={671}
                                            height={809}
                                            alt={`${member.name} - Kelas ${major}`}
                                        />

                                        <div className='text-center mt-3'>
                                            <p className='text-brown-700 italic'>
                                                &quot;{member.quote}&quot;
                                            </p>
                                            <p onClick={() => handleClickInstagram(member.instagram)} className='text-brown-700 font-bold cursor-pointer'>
                                                {member.instagram}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className='text-center text-brown-700/60 italic'>
                                Foto kelas {major} akan ditampilkan di sini.
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Members
