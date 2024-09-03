import hongikPoster from './images/hongik-poster.jpg'
import circuitPosters from './images/circuit-posters.jpg'
import thesisBookCovers from './images/thesis-book-covers.jpg'
import analogToDigital1 from './images/analog-to-digital-1.jpg'
import analogToDigital2 from './images/analog-to-digital-2.jpg'
import analogToDigital3 from './images/analog-to-digital-3.jpg'
import chinesePoster from './images/chineseposter.jpg'
import threeDType from './images/3d-type.jpg'
import reconfigType from './images/reconfig-type.jpg'
import typeSpecimen from './images/typespecimen.jpg'
import SOPoster from './images/so-poster.jpg'
import rangersVideo from './images/rangers-video.mp4'


const data = [
    {
        id: 0,
        title: "Exhibition poster",
        desc: "Pluriversal Typography in Local and Global Contexts",
        image: hongikPoster,
        bg: "white",
    },
    {
        id: 1,
        title: "Double-sided poster",
        desc: "How can materiality/craft be applied to create type that challenges the ubiquitous nature of digital design?",
        image: circuitPosters,
        bg: "white",
    },
    {
        id: 2,
        title: "Thesis book with works and essays",
        desc: "Analog to Digital, Design Thesis",
        image: thesisBookCovers,
        bg: "black",
    },
    {
        id: 3,
        title: "Thesis book essay spreads",
        desc: "Analog to Digital, Design Thesis",
        image: analogToDigital1,
         bg: "black",
    },
    {
        id: 4,
        title: "Thesis book content spreads",
        desc: "Analog to Digital, Design Thesis",
        image: analogToDigital2,
         bg: "black",
    },
    {
        id: 5,
        title: "Thesis book finals spreads",
        desc: "Analog to Digital, Design Thesis",
        image: analogToDigital3,
         bg: "black",
    },
    {
        id: 6,
        title: "Experimental long-format scroll poster",
        desc: "Analog to Digital, Design Thesis",
        image: chinesePoster,
         bg: "black",
    },
    {
        id: 7,
        title: "Experiments with Digital Materiality",
        desc: "Analog to Digital, Design Thesis",
        image: threeDType,
         bg: "white",
    },
    {
        id: 8,
        title: "A blueprint to physical making",
        desc: "Reconfigurable Typography A-Z",
        image: reconfigType,
         bg: "white",
    },
    {
        id: 9,
        title: "Single-page website for season ticket holders, project led by John Dermody",
        desc: "2024 Texas Rangers Ticket Renewal",
        video: rangersVideo,
        bg: "black",
    },
    {
        id: 10,
        title: "Type specimen for ongoing work-in-process display typeface",
        desc: "Exran Sans",
        image: typeSpecimen,
        bg: "black",
    },
    {
        id: 11,
        title: "Experimental poster",
        desc: "40th Science Olympiad at Michigan State University",
        image: SOPoster,
        bg: "black",
    },
];

export default data;