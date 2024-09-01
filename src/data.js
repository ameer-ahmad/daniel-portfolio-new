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
        title: "Poster for design exhibition / Pluriversal Typography in Local and Global Contexts",
        desc: [
            "Hangul forms are sculpted through casting a spotlight on wall at varying angles",
            "gold + white RISO print",
        ],
        image: hongikPoster,
        bg: "white",
    },
    {
        id: 1,
        title: "Double-sided poster / How can materiality/craft be applied to create type that challenges the ubiquitous nature of ditial design?",
        desc: [
            "printed on thin vellum",
            "typeset manually on circuit board with dry transfer type then canned and reprinted",
        ],
        image: circuitPosters,
        bg: "white",
    },
    {
        id: 2,
        title: "Final Design Thesis book, with works, descriptions, and essays / Analog to Digital, Design Thesis",
        desc: [
            "cover is silver corrugated paper",
            "typeset using letraset + fixatives",
            "chain-stitch binding"
        ],
        image: thesisBookCovers,
        bg: "black",
    },
    {
        id: 3,
        title: "Project essay spreads / Analog to Digital, Design Thesis",
        desc: [
            "purple RISO on light gray 60 lb text paper",
        ],
        image: analogToDigital1,
         bg: "black",
    },
    {
        id: 4,
        title: "Project content spreads / Analog to Digital, Design Thesis",
        desc: [
            "turquoise RISO on cream 60 lb text paper",
            "section spread numbers created with nails + circuitry + shadows"
        ],
        image: analogToDigital2,
         bg: "black",
    },
    {
        id: 5,
        title: "Project finals spreads / Analog to Digital, Design Thesis",
        desc: [
            "inkjet on husky cool white 60 lb text paper",
            "final thesis project images in full colour"
        ],
        image: analogToDigital3,
         bg: "black",
    },
    {
        id: 6,
        title: "Experimental long-format scroll poster / Analog to Digital, Design Thesis",
        desc: [
            "part of a larger typographic series of works created using found materials",
            "printed on rice paper roll"
        ],
        image: chinesePoster,
         bg: "black",
    },
    {
        id: 7,
        title: "Various experiments with Digital Materiality / Analog to Digital, Design Thesis",
        desc: [
            "Blender 3D",
        ],
        image: threeDType,
         bg: "white",
    },
    {
        id: 8,
        title: "A blueprint to physical making / Reconfigurable Typography A-Z",
        desc: [
            "taxonomizes physical typographic creation processes & techniques",
            "cover can be bound & unbound to create any letter using a segmented typeface setup"
        ],
        image: reconfigType,
         bg: "white",
    },
    {
        id: 9,
        title: "Single-page website for season ticket holders / 2024 Texas Rangers Ticket Renewal",
        desc: [
            "project designed with & led by John Dermody",
        ],
        video: rangersVideo,
        bg: "black",
    },
    {
        id: 10,
        title: "Type speciment for ongoing work-in-process display typeface / Exran Sans",
        desc: [
            "tapered & angled terminals",
        ],
        image: typeSpecimen,
        bg: "black",
    },
    {
        id: 11,
        title: "Experimental poster / 40th Science Olympiad at Michigan State University",
        desc: [
            "letterforms created through analog texture experimentations with liquids and ice",
        ],
        image: SOPoster,
        bg: "black",
    },
];

export default data;