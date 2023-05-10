import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xe13582D38d43b6B2290eC14b9A56e0Ba9f15DfC2'
);

export default instance;