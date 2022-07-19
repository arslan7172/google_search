import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useStateContext } from '../context/ResultContextProvider'
import Loading from './Loading'
const Results = () => {
    const { getResults, results, searchTerm, loading } = useStateContext()
    const location = useLocation()
    useEffect(() => {
        if (searchTerm) {
            if (location.pathname === '/search') {
                getResults(`/search/q=${searchTerm}&num=2`)
            } else if (location.pathname === '/images') {
                getResults(`/image/q=${searchTerm}&num=2`)
            }else if (location.pathname === '/videos') {
                getResults(`/video/q=${searchTerm}&num=4`)
            } else if (location.pathname === 'news') {
                getResults(`/news/q=${searchTerm}&num=4`)
                console.log(results);
            }
        }
    }, [searchTerm, location.pathname])
    if (loading) return <Loading />
    switch (location.pathname) {
        case '/search':

            return (
                <div className="sm:px-56 flex flex-wrap justify-between space-y-6 sm:px-56">
                    {results?.map(({ link, title }, index) => (
                        <div key={index} className="md:w-2/5 w-full">
                            <a href={link} target="_blank" rel="noreferrer">
                                <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
                            </a>
                        </div>
                    ))}
                </div>
            )
        case '/news':

            return (
                <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6 sm:px-56">
                    {results?.map(({ id, links, source, title }) => (
                        <div key={id} className="md:w-2/5 w-full ">
                            <a href={links?.[0].href} target="_blank" rel="noreferrer " className="hover:underline ">
                                <p className="text-lg dark:text-blue-300 text-blue-700">{title}</p>
                            </a>
                            <div className="flex gap-4">
                                <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-300"> {source?.href}</a>
                            </div>
                        </div>
                    ))}
                </div>
            )
        case '/images':

            return (
                <div className='flex flex-wrap justify-center items-center' >
                    {
                        results?.map(({ image, link: { href, title } }, index) => (
                            <a className='sm:p-3 p-5' href={href} key={index} target="_blank" rel="noreferrer">
                                <img src={image?.src} alt={title} loading='lazy'></img>
                                <p className='w-36 break-words text-sm mt-2'>
                                    {title}
                                </p>
                            </a>
                        ))
                    }
                </div>
            )
        case '/videos':

            return (
                <div className='flex flex-wrap' >
                    { 
                        results?.map((video, index) => (
                            video.link.includes('https://www.youtube.com') ? 
                            <div key={index} className='p-2'>
                                <ReactPlayer url={video.link} controls width='355px' height='200px' />
                                <p>{video.title}</p>
                            </div>  
                            : null
                        ))
                    }
                </div>
            )

        default:
            return 'Error';
    }
}

export default Results
//'/search/q=JavaScript+Mastery&num=3'