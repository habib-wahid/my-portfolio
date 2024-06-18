
import {resources} from "../resource";
import {Stack} from "./DetailsInterface"

export const generalDetails = [
    {
        iconSrc : "/images/phone.png",
        placeHolder: "Phone",
        value: "+8801626794207"
    },
    {
        iconSrc : "/images/email.png",
        placeHolder: "Email",
        value: "habib11wahid@gmail.com"
    },
    {
        iconSrc : "/images/location.png",
        placeHolder: "Location",
        value: "Dhaka, Bangladesh"
    }
]

export const MenuImages = [
    {id: 1, src: "/images/Home.png", activeSrc: "/images/HomeActive.png"},
    {id: 2, src: "/images/Resume.png", activeSrc: "/images/ResumeActive.png"},
    {id: 3, src: "/images/Work.png", activeSrc: "/images/WorkActive.png"},
    {id: 4, src: "/images/Contact.png", activeSrc: "/images/ContactActive.png"}
]

export const stacks: Stack[] = [
    { id: 1, color: "#FFEBD1", src: "/images/front-end.png", title: "Front-End Engineering", details: resources.en.translation.frontEndDetails},
    { id: 2, color: "#F2F7FC", src: "/images/back-end.svg", title: "Back-End Engineering", details: resources.en.translation.backEndDetails},
    { id: 3, color: "#F2F7FC", src: "/images/mysql-ar21.svg", title: "Database Engineering", details: resources.en.translation.databaseDetails},
    { id: 4, color: "#FFEBD1", src: "/images/aws-icon.svg", title: "DevOps Engineering", details: resources.en.translation.devOpsDetails},
    { id: 5, color: "#FFEBD1", src: "/images/java.svg", title: "Language Expertise", details: resources.en.translation.languageDetails},
    { id: 6, color: "#F2F7FC", src: "/images/mentorship.png", title: "Mentorship", details: resources.en.translation.mentorshipDetails},
]