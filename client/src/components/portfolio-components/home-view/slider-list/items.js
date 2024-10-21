import { FaBloggerB } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { MdOutlineVideoSettings } from "react-icons/md";



const items = [
    {
        id: 1,
        title: "Blogs",
        title_ar: "مدونات",
        icon: <FaBloggerB className='icon' />,
    },
    {
        id: 2,
        title: "Education Videos",
        title_ar: "فديوهات تعليمية",
        icon: <MdOutlineVideoSettings className='icon' />,
    },
    {
        id: 3,
        title: "Consultations",
        title_ar: "استشارات",
        icon: <MdOutlineContactSupport className='icon' />,
    },
]
export default items;