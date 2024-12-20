import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { IoChevronDown, IoChevronUp, IoChevronDownOutline } from 'react-icons/io5';
import Switch from '@mui/material/Switch';

interface NavbarProps {
    toggleSidebar: () => void;
    showUploadBanner: () => void;  // Prop to trigger the upload banner
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, showUploadBanner }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: string) => {
        setSelected(option);
        setIsOpen(false); // Close the dropdown after selection
    };

    const options = ['Grapes', 'Mango', 'Strawberry'];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="fixed top-0 z-50 p-4 bg-white w-full shadow-md hidden lg:block">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="w-[200px] flex items-center justify-center">
                    <h1 className="text-3xl text-[#A7A7F3]">
                        Max<span className="text-orange-500">Files</span>
                    </h1>
                </div>

                {/* Right-hand Side Options */}
                <div className="flex items-center space-x-4">
                    {/* Sidebar Toggle */}
                    <AiOutlineMenu onClick={toggleSidebar} className="cursor-pointer" />

                    {/* Dropdown Button */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            className="px-4 py-2 bg-[#A7A7F3] text-white rounded-md flex items-center"
                            onClick={toggleDropdown}
                            aria-haspopup="true"
                            aria-expanded={isOpen}
                        >
                            {selected ? selected : 'Initiate Workflow'}
                            {isOpen ? <IoChevronUp className="ml-2" /> : <IoChevronDown className="ml-2" />}
                        </button>

                        {isOpen && (
                            <div className="absolute mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-48">
                                <div className="p-1">
                                    <input
                                        type="text"
                                        placeholder="Search workflow"
                                        className="w-full p-2 border-b outline-none border"
                                        autoFocus
                                    />
                                </div>

                                <ul>
                                    {options.map((option, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleSelect(option)}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            role="menuitem"
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Document Search */}
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Search for documents"
                            className="px-4 py-2 w-[350px] text-sm text-gray-600 border mr-2 rounded-md"
                        />
                        <button className="px-4 py-[6px] text-black bg-[#A7A7F3] rounded-md flex items-center">
                            <AiOutlineSearch className="mr-2" /> Search
                        </button>
                    </div>

                    {/* Upload Button */}
                    <button
                        className="px-2 py-[6px] text-black bg-[#A7A7F3] rounded-md focus:outline-none"
                        onClick={showUploadBanner}  // Trigger the UploadBanner
                    >
                        Upload File
                    </button>

                    {/* User Toggle Switch */}
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">User</span>
                        <Switch sx={{ transform: 'scale(0.8)' }} />
                        <span className="text-sm font-medium">Admin</span>
                    </div>
                </div>

                {/* User Profile */}
                <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700">Damilola Obasola</span>
                    <IoChevronDownOutline className="ml-2" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

// import React, { useState } from 'react';
// import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
// import { IoChevronDown, IoChevronUp, IoChevronDownOutline } from 'react-icons/io5';
// import Switch from '@mui/material/Switch';

// interface NavbarProps {
//     toggleSidebar: () => void;
//     showUploadBanner: () => void;  // Prop to trigger the upload banner
// }

// const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, showUploadBanner }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [selected, setSelected] = useState<string | null>(null);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleSelect = (option: string) => {
//         setSelected(option);
//         setIsOpen(false); // Close the dropdown after selection
//     };

//     const options = ['Grapes', 'Mango', 'Strawberry'];

//     return (
//         <div className="fixed top-0 z-50 p-4 bg-white w-full shadow-md hidden lg:block">
//             <div className="flex items-center justify-between">
//                 {/* Logo */}
//                 <div className="w-[200px] flex items-center justify-center">
//                     <h1 className="text-3xl text-[#A7A7F3]">
//                         Max<span className="text-orange-500">Files</span>
//                     </h1>
//                 </div>

//                 {/* Right-hand Side Options */}
//                 <div className="flex items-center space-x-4">
//                     {/* Sidebar Toggle */}
//                     <AiOutlineMenu onClick={toggleSidebar} className="cursor-pointer" />

//                     {/* Dropdown Button */}
//                     <div className="relative">
//                         <button
//                             className="px-4 py-2 bg-[#A7A7F3] text-white rounded-md flex items-center"
//                             onClick={toggleDropdown}
//                         >
//                             {selected ? selected : 'Initiate Workflow'}
//                             {isOpen ? <IoChevronUp className="ml-2" /> : <IoChevronDown className="ml-2" />}
//                         </button>

//                         {isOpen && (
//                             <div className="absolute mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-48">
//                                 <div className="p-1">
//                                     <input
//                                         type="text"
//                                         placeholder="Search workflow"
//                                         className="w-full p-2 border-b outline-none border"
//                                     />
//                                 </div>

//                                 <ul>
//                                     {options.map((option, index) => (
//                                         <li
//                                             key={index}
//                                             onClick={() => handleSelect(option)}
//                                             className="px-4 py-2 cursor-pointer hover:bg-gray-100"
//                                         >
//                                             {option}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}
//                     </div>

//                     {/* Document Search */}
//                     <div className="relative flex items-center">
//                         <input
//                             type="text"
//                             placeholder="Search for documents"
//                             className="px-4 py-2 w-[350px] text-sm text-gray-600 border mr-2"
//                         />
//                         <button className="px-4 py-[6px] text-black bg-[#A7A7F3] flex items-center">
//                             <AiOutlineSearch className="mr-2" /> Search
//                         </button>
//                     </div>

//                     {/* Upload Button */}
//                     <button
//                         className="px-2 py-[6px] text-black bg-[#A7A7F3] rounded-md focus:outline-none"
//                         onClick={showUploadBanner}  // Trigger the UploadBanner
//                     >
//                         Upload File
//                     </button>

//                     {/* User Toggle Switch */}
//                     <div className="flex items-center space-x-2">
//                         <span className="text-sm font-medium">User</span>
//                         <Switch sx={{ transform: 'scale(0.8)' }} />
//                         <span className="text-sm font-medium">Admin</span>
//                     </div>
//                 </div>

//                 {/* User Profile */}
//                 <div className="flex items-center">
//                     <span className="text-sm font-medium text-gray-700">Damilola Obasola</span>
//                     <IoChevronDownOutline />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

