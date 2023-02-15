import { reactive } from "vue"

export const store = reactive ({
    jumbo: [
        {
            secondaryTitle: "CINEMA STUDIO",
            mainTitle: "ACTION AND INSPIRE PEOPLE",
        },
        {
            secondaryTitle: "TV SHOW STUDIO",
            mainTitle: "ADVENTURES EVERYDAY",
        },
        {
            secondaryTitle: "DOCUMENTARY STUDIO",
            mainTitle: "THE BEAUTY OF OUR PLANET",
        },
        {
            secondaryTitle: "MUSIC VIDEO STUDIO",
            mainTitle: "MUSIC IN MOTION",
        }
    ],
    testimonials: [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facere autem enim qui. Sunt fuga, eveniet nostrum deleniti ea quidem, nisi molestiae architecto similique unde voluptatibus impedit, ducimus quae molestias voluptas ut repellendus. Voluptatum eum sunt repellendus reprehenderit aperiam ex?",
            pic: "/cinema/img/assets/01.jpg",
            name: "JOHN DOE",
            job: "Designer"
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facere autem enim qui.",
            pic: "/cinema/img/assets/02.jpg",
            name: "MARY JAMES",
            job: "Photographer"
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veniam nulla, adipisci, laudantium sapiente illo magni quo, commodi quaerat pariatur voluptatum alias libero exercitationem eligendi!",
            pic: "/cinema/img/assets/03.jpg",
            name: "CHRIS COLEMAN",
            job: "Videomaker"
        }
    ]
})