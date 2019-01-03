import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Sá">
        <Member name="Rafael" />
        <Member name="Eric" />
    </Family>
, document.getElementById('app'))