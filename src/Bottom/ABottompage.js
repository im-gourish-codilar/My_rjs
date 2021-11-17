import React, { PureComponent } from 'react'
import AfterGrid from './aftergrid'
import Columncontent from './columncontent'
import Desc from './desc'
import Information from './information'
import Foot from './foot'

export default class Bottompage extends PureComponent {
    render() {
        return (

            <>
            <AfterGrid/>
            <Desc/>
            <Columncontent/>
            <Information/>
            <Foot/>
            </>

        )
    }
}
