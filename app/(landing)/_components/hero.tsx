'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className='hero'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className='font-dmserif text-brown-700 text-5xl md:text-6xl text-center mb-10 uppercase'>
                BRINGAS
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}>
                <Image
                    className='w-full rounded-xl aspect-[21/9] max-sm:aspect-video object-cover'
                    src='/images/bringas.jpeg'
                    width={2000}
                    height={1000}
                    alt=''
                />
            </motion.div>

            {/* Kata' Abangkuh */}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className='text-center mt-4'>
                <p className='text-brown-700 italic text-sm md:text-base'>
                    "First time healing with bringas." 
                </p>
            </motion.div>
        </div>
    )
}

export default Hero
