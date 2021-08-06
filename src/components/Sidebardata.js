import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as SiIcons from "react-icons/si"

export const SidebarData = [
    //contains all sidebar items
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text' //class name, can name this whatever you want
    },
    {
        title: 'Experience',
        path: '/experience',
        icon: <IoIcons.IoIosDesktop />,
        cName: 'nav-text' //class name, can name this whatever you want
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiIcons.AiFillGithub />,
        cName: 'nav-text' //class name, can name this whatever you want
    },
    {
        title: 'About',
        path: '/about',
        icon: <SiIcons.SiAboutDotMe />,
        cName: 'nav-text' //class name, can name this whatever you want
    },
]