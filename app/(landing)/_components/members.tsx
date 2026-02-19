'use client'
import { MEMBERS } from '@/constants/member'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Members = () => {
    function handleClickInstagram(instagram: string) {
        window.open(`https://www.instagram.com/${instagram.replace('@', '')}`, '_blank');
    }

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className='font-dmserif text-brown-700 text-5xl md:text-6xl text-center mb-10 mt-20'>
                Members
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
        </div>
    )
}

export default Members
