import { BiSolidDashboard } from "react-icons/bi";
import { LiaBlogSolid } from "react-icons/lia";
import { FaUsers } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";




const items = [
    {
        id: 1,
        title: "Dashboard",
        title_ar: "لوحة التحكم",
        href: "/dashboard",
        icon: <BiSolidDashboard className='icon' />,
    },
    {
        id: 2,
        title: "blogs",
        title_ar: "المدونات",
        href: "/dashboard-blogs",
        icon: <LiaBlogSolid className='icon' />,
    },
    {
        id: 3,
        title: "Add Blog",
        title_ar: "اضافة مدونة",
        href: "/add-blog",
        icon: <FiEdit className='icon' />,
    },
    {
        id: 4,
        title: "users",
        title_ar: "المستخدمين",
        href: "/users",
        icon: <FaUsers className='icon' />,
    },
]
export default items;