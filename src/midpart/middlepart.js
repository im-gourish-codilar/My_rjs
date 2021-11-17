import React, { Component } from 'react'
import Wellcome from './wellcome'
import Greybox from './greybox'
import NewsPopularVideos from './h_link'
import Grid from './grid'

export default class Middle extends Component {
    render() {
        return (
           
            <>
                <Wellcome/>
                <Greybox/>
                <NewsPopularVideos/>
                <Grid/>
            </>
        )
    }
}
