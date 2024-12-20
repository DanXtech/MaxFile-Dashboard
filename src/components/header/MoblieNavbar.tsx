import { useState } from 'react';
import MobileSidebar from '../sidebar/MoblieSidebar'; // Corrected component name
import { AiOutlineMenu } from 'react-icons/ai';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const MobileNavbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className='fixed top-0 z-50 p-4 bg-white w-full shadow-md block lg:hidden'>
                <div className='flex items-center justify-between'>
                    <h1 className="text-3xl text-[#A7A7F3]">
                        Max<span className="text-orange-500">Files</span>
                    </h1>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2 border border-gray-300 rounded-md px-2 py-1'>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="outline-none text-sm"
                            />
                            <SearchOutlinedIcon className="w-6 h-6 cursor-pointer" />
                        </div>
                        <AiOutlineMenu onClick={toggleSidebar} className='w-6 h-6 cursor-pointer' />
                    </div>
                </div>
            </div>

            {isSidebarOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={toggleSidebar}
                    ></div>
                    <MobileSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                </>
            )}
        </>
    );
};

export default MobileNavbar;
