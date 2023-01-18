import React from 'react'
import PhotoGet from './exemploEndPoints/PhotoGet'
import PhotoPost from './exemploEndPoints/PhotoPost'
import TokenPost from './exemploEndPoints/TokenPost'
import UserPost from './exemploEndPoints/UserPost'

const Api = () => {
    return (
        <>
            <h2>User Post:</h2>
            <UserPost />

            <h2>Token Post:</h2>
            <TokenPost/>

            <h2>Photo Post:</h2>
            <PhotoPost/>


            <h2>Photo Get:</h2>
            <PhotoGet/>
        </>
    )
}

export default Api