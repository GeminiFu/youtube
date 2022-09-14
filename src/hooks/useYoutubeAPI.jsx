import axios from 'axios'
import React, { useState } from 'react'

const useYoutubeAPI = () => {
    const [q, setQ] = useState('')
    const [key, setKey] = useState('')

    // console.log('')
    // console.log(`!!!!!      請刪除key${key}       !!!!!!`)
    // console.log('')

    function searchByQ(q) {
        axios.get('https://www.googleapis.com/youtube/v3/search',
            {
                params: {
                    q: q,
                    // part: 'snippet,contentDetails',// 必填，把需要的資訊列出來
                    // maxResults: 5,// 預設為五筆資料，可以設定1~50
                    key: key
                }
            }).then(res => {
                console.log(res.data.items)
            }).catch(e => console.log(e))
    }

    return {
        setKey,
        q,
        setQ,
        searchByQ,
    }
}

export default useYoutubeAPI