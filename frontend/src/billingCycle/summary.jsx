import React, { Component } from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({credit, debt}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Summary</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank'
                    value={`R$ ${credit}`} text='Total Credits' />
                <ValueBox cols='12 4' color='red' icon='credit-card'
                    value={`R$ ${debt}`} text='Total Debits' />
                <ValueBox cols='12 4' color='blue' icon='money'
                    value={`R$ ${credit - debt}`} text='Final Value' />
            </Row>
        </fieldset>
    </Grid>
)