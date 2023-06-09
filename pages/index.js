import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import factory from '../ethereum/factory'
import Layout from '../components/layout'
import { Link } from '../routes'

class CampaignIndex extends Component {
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call()
        
        return { campaigns }
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                    <a> View Campaigns</a>
                    </Link>
                ),
                fluid: true
            }
        })

        return <Card.Group items={items} />
    }
    render() {
        return (
            <Layout>
            <div> 
                <link async rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css" />
                <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>
                <h3> Open Campaigns</h3>

                <Link route="/campaigns/new">
                <a className='item'>
                <Button content="Create Campaign" 
                    icon="add circle"
                    primary
                    floated='right' />
                </a>
                </Link>
                { this.renderCampaigns() }

            </div>

            </Layout>
        )
    }
}

export default CampaignIndex