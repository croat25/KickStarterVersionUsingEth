import React, { Component } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'
import Layout from '../../components/layout'
import FormLayout from '../../components/formlayout'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'

class CampaignNew extends Component {
    state = {
        minimumContribution: ''
    }

    onSubmit = async (event) => {
        event.preventDefault()

        const accounts = await web3.eth.getAccounts()

        //needs semi colon if doesnt have a variable
        await factory
            .methods
            .createCampaign(this.state.minimumContribution)
            .send({
                from: accounts[0]
            });
    }
    render() {
        return (
            <Layout>
                <h1>Create New Campaign!</h1>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Field>
                            <label>Mnimum Contributions</label>
                            <Input 
                                label="wei" 
                                labelPosition='right'
                                value={ this.state.minimumContribution }
                                onChange={event => this.setState({ minimumContribution: event.target.value })}
                            />
                        </Form.Field>

                        <Button primary> Create!</Button>
                    </Form>
            </Layout>
        ) 
    }
}

export default CampaignNew