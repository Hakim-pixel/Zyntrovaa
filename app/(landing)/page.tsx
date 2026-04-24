import React from 'react'
import Hero from './_components/hero'
import Members from './_components/members'
import Gallery from './_components/gallery'
import MusicPlayer from './_components/music_player'
import Header from './_components/header'

const LandingPage = () => {
    return (
        <div className='min-h-[200vh] pt-20'>
            <Header />
            <div className='max-con max-sm:px-5'>
                <Hero />
                <Members />
                <Gallery />
                <MusicPlayer />
            </div>
        </div>
    )
}

export default LandingPage
