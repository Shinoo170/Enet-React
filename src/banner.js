import React from 'react'

function randInt(min, max){
    let x = (max-min) + 1
    return min + Math.floor(Math.random() * x)
}

export default function Banner() {
    const r = randInt(1,3)
    let banner = ''
    let url = ''

    switch(r){
        case 1 :
            banner = './banner/phoenix next.png'
            url = 'https://www.phoenixnext.com/'
            break
        case 2 :
            banner = './banner/luckpim.png'
            url = 'https://www.luckpim.com/'
            break
        case 3 :
            banner = './banner/naiin.png'
            url = 'https://www.naiin.com/'
            break
        default : break
    }
    const bannerClick = () => {
        window.open(url)
    }
    return (
        <div style={{margin: '20px', textAlign: 'center'}}>
            <img src={banner} onClick={bannerClick} style={{cursor: 'pointer'}} alt="banner"/>
        </div>
    )
}

