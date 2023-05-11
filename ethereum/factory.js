import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xa496b820640670d73E0Ec75994B01f9725981f1A'
)

export default instance