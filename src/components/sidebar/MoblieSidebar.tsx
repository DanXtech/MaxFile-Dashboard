import { X } from 'lucide-react';
import React from 'react';
import { Home, Calendar, Users, FileText, Bell, MessageSquare, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MoblieSidebarProps {
    toggleSidebar: () => void;
    isSidebarOpen: boolean;
}

interface NavItem {
    icon: LucideIcon;
    label: string;
    path: string;
}

const MoblieSidebar: React.FC<MoblieSidebarProps> = ({ toggleSidebar, isSidebarOpen }) => {

    const navItems: NavItem[] = [
        { icon: Home, label: 'Dashboard', path: '/' },
        { icon: Calendar, label: 'Document Collection', path: '/event' },
        { icon: Users, label: 'Favorite Files', path: '/speakers' },
        { icon: FileText, label: 'Assigned to Me', path: '/reports' },
        { icon: Bell, label: 'Checked Out', path: '/notifications' },
        { icon: MessageSquare, label: 'UnIndexed Files', path: '/messages' },
    ];

    return (
        <div
            className={`fixed top-0 left-0 h-full w-full bg-gray-800 text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} // Sliding animation
        >
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl">
                        Max<span className="text-orange-500">Files</span>
                    </h1>
                    <button onClick={toggleSidebar} className="text-white"><X /></button>
                </div>
                <div className="mt-4">
                    <ul className="px-2 space-y-1">
                        {navItems.map((item, index) => (
                            <li key={index} className="flex items-center p-2 text-white hover:bg-gray-100 hover:text-black rounded">
                                {/* Close sidebar when a link is clicked */}
                                <Link to={item.path} className="flex items-center justify-between w-full" onClick={toggleSidebar}>
                                    <div className="flex items-center gap-2">
                                        <item.icon />
                                        <span>{item.label}</span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MoblieSidebar;


// import { X } from 'lucide-react';
// import React from 'react';
// import { Home, Calendar, Users, FileText, Bell, MessageSquare } from 'lucide-react';
// import { Link } from 'react-router-dom';

// interface MoblieSidebarProps {
//     toggleSidebar: () => void;
//     isSidebarOpen: boolean;
// }

// const MoblieSidebar: React.FC<MoblieSidebarProps> = ({ toggleSidebar, isSidebarOpen }) => {

//     const navItems = [
//         { icon: Home, label: 'Dashboard', path: '/' },
//         { icon: Calendar, label: 'Document Collection', path: '/event' },
//         { icon: Users, label: 'Favorite Files', path: '/speakers' },
//         { icon: FileText, label: 'Assigned to Me', path: '/reports' },
//         { icon: Bell, label: 'Checked Out', path: '/notifications' },
//         { icon: MessageSquare, label: 'UnIndexed Files', path: '/messages' },
//     ];

//     return (
//         <div
//             className={`fixed top-0 left-0 h-full w-full bg-gray-800 text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
//             ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} // Sliding animation
//         >
//             <div className="p-4">
//                 <div className='flex items-center justify-between'>
//                     <h1 className='text-2xl'>
//                         Max<span className="text-orange-500">Files</span>
//                     </h1>
//                     <button onClick={toggleSidebar} className="text-white"><X /></button>
//                 </div>
//                 <div className="mt-4">
//                     <ul className="px-2 space-y-1">
//                         {navItems.map((item, index) => (
//                             <li key={index} className="flex items-center p-2 text-white hover:bg-gray-100 hover:text-black rounded">
//                                 {/* Close sidebar when a link is clicked */}
//                                 <Link to={item.path} className="flex items-center justify-between w-full" onClick={toggleSidebar}>
//                                     <div className="flex items-center gap-2">
//                                         <item.icon />
//                                         <span>{item.label}</span>
//                                     </div>
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MoblieSidebar;
