import {AiOutlineHome} from 'react-icons/ai';
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { MdOndemandVideo } from "react-icons/md";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';


const items = [
    {
        id: 1,
        title: "Home",
        title_ar: "الرائيسية",
        href: "/",
        icon: <AiOutlineHome className='icon' />,
    },
    {
        id: 2,
        title: "Blogs",
        title_ar: "المدونات",
        href: "/blogs",
        icon: <LiaBlogSolid className='icon' />,
    },
    // {
    //     id: 3,
    //     title: "Learn",
    //     title_ar: "اتعلم",
    //     href: "/learn",
    //     icon: <LocalLibraryIcon className='icon' />,
    // },
    {
        id: 4,
        title: "Videos",
        title_ar: "الفديوهات",
        href: "/videos",
        icon: <MdOndemandVideo className='icon' />,
    },
    {
        id: 5,
        title: "Contact us",
        title_ar: "اتصل بنا",
        href: "/contact",
        icon: <MdOutlineConnectWithoutContact className='icon' />,
    },
]
export default items;