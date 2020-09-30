'use strict'
// Packages
import { Component } from 'react'
import Router from 'next/router'
import Progress from 'nprogress'

let progress
const stopProgress = () => {
    clearTimeout(progress)
    Progress.done()
}

Router.onRouteChangeStart = () => {
    progress = setTimeout(Progress.start, 200)
}

Router.onRouteChangeComplete = stopProgress
Router.onRouteChangeError = stopProgress

class Page extends Component {
    constructor() {
        super()

        this.handleKeypress = this.handleKeypress.bind(this)
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeypress, true)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeypress, true)
    }

    handleKeypress(event) {
        if (event.keyCode === 27) {
            return Router.push({
                pathname: '/home',
                query: { tab: 'Today' }
            })
        } 
        if ((event.altKey || event.metaKey) && event.keyCode === 78) {
            return Router.push('/add')
        }

        if ((event.altKey || event.metaKey) && event.keyCode === 49) {
            return Router.push({
                pathname: '/home',
                query: { tab: 'Today' }
            })
        }

        if ((event.altKey || event.metaKey) && event.keyCode === 50) {
            return Router.push({
                pathname: '/home',
                query: { tab: 'Backlog' }
            })
        }

        if ((event.altKey || event.metaKey) && event.keyCode === 51) {
            return Router.push({
                pathname: '/home',
                query: { tab: 'Done' }
            })
        }
    }

    render() {
        const { children } = this.props 
        return (
            <main>
                {children}
                {/* Drop location for text,files and images*/}
            </main>
        )
    }
}

export default Page