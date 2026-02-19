'use client'
import React from 'react'
//@ts-ignore
import ImageGallery from 'react-image-gallery'
import { motion } from 'framer-motion'

const Gallery = () => {
    const images = Array.from({ length: 6 }, (_, index) => ({
        original: `/images/gallery/${index + 1}.jpeg`,
        thumbnail: `/images/gallery/${index + 1}.jpeg`
    }));

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className='font-dmserif text-brown-700 text-5xl md:text-6xl text-center mb-10 mt-20'>
                Our Memories
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className=''>
                <ImageGallery items={images} />
            </motion.div>
        </div>
    )
}

export default Gallery
