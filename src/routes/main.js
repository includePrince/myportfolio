import React from 'react'
const Home = React.lazy(
    () => import('./../pages/Home/home'),
)
const Blog = React.lazy(
    () => import('./../pages/Blog/blog'),
)
const Projects = React.lazy(
    () => import('./../pages/Projects/projects'),
)
const Contact = React.lazy(
    () => import('./../pages/Contact/contact'),
)

// const Preloader = React.lazy(
//     () => import('./../components/preloader'),
// )

var mainRoutes = [
    { path: '/', name: 'Homepage', component: <Home /> },
    { path: '/blog', name: 'Blog', component: <Blog /> },
    { path: '/projects', name: 'Projects', component: <Projects /> },
    { path: '/contact', name: 'Contact', component: <Contact /> },
    // { path: '/preloader', name: 'Preloader', component: <Preloader /> },
]

export default mainRoutes