import mural from "../thumbnails/Murals.svg";
import campaign from "../thumbnails/AndCampaign.svg";
import utility from "../thumbnails/Utility Box.svg";

const teams = [
  {
    title: 'Encinitas Mural Tour',
    team: true,
    tools: ['Wordpress'],
    image: mural,
    description: [
      'An extension of the Visit Encinitas website, the Mural Tour section was a student built system for mapping and interacting with local artwork in the Encinitas area.'
    ],
    liveLink: ''
  },
  {
    title: '& Campaign',
    team: true,
    tools: ['HTML', 'CSS', 'Javascript'],
    image: campaign,
    description: [
      'Developed by MAT students to support MAT student success, the And Campaign shares the history of the MAT program at MiraCosta College. It also gives users the opportunity to donate to the MAT program.',
      ''
    ],
    liveLink: 'https://and-campaign.com/'
  },
  {
    title: 'MiraCosta Gallery Website',
    team: true,
    tools: ['Wordpress'],
    image: utility,
    description: [
      'The Miracosta are gallery, formerly known as '
    ],
    liveLink: ''
  }
];

export default teams;