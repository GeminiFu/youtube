import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Routes } from 'react-router-dom'

import styles from './index.css'

import Nav from './components/Nav'
import SetKey from './views/SetKey'
import Search from './views/Search'
import Result from './views/Result'
import useYoutubeAPI from './hooks/useYoutubeAPI'

const Youtube = function () {
    const {
        setKey,
        q,
        setQ,
        searchByQ,
    } = useYoutubeAPI()

    return (
        <HashRouter >
            <div className={styles.wrapper}>
                <SetKey setKey={setKey} />
                <Nav />
                <Routes>
                    <Route path='/search' element={<Search setQ={setQ} />} />
                    <Route path='/result' element={<Result q={q} setQ={setQ} searchByQ={searchByQ} />} />
                </Routes>
            </div>
        </HashRouter>
    )
}

ReactDOM.render(
    <Youtube />
    , document.getElementById('root'))