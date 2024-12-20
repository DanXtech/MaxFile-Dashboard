import React, { useEffect, useState } from 'react';
import { Home, Calendar, Users, FileText, Bell, MessageSquare, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SidebarProps {
    isSidebarOpen: boolean;
}

interface NavItem {
    icon: LucideIcon;
    label: string;
    path: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
    const [, setIsCollapsed] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsCollapsed(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navItems: NavItem[] = [
        { icon: Home, label: 'Dashboard', path: '/' },
        { icon: Calendar, label: 'Document Collection', path: '/event' },
        { icon: Users, label: 'Favorite Files', path: '/speakers' },
        { icon: FileText, label: 'Assigned to Me', path: '/reports' },
        { icon: Bell, label: 'Checked Out', path: '/notifications' },
        { icon: MessageSquare, label: 'UnIndexed Files', path: '/messages' },
    ];

    return (
        <div className="hidden lg:block">
            <aside
                className={`bg-[#333547] h-full flex flex-col shadow-lg transition-all duration-300 fixed left-0 ${isSidebarOpen ? 'w-0' : 'w-64'}`}
            >
                <h1 className="text-3xl flex items-center justify-center py-5">Maxfiles</h1>
                <nav className="flex-1 overflow-y-auto pt-[16px]">
                    <ul className="px-2 space-y-1">
                        {navItems.map((item, index) => (
                            <li key={index} className="flex items-center p-2 text-white hover:bg-[#1d1f2b] rounded">
                                <Link to={item.path} className="flex items-center justify-between w-full">
                                    <div className="flex gap-2">
                                        <item.icon className="w-5 h-5" />
                                        <span>{item.label}</span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;
