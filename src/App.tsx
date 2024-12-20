import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/header/Navbar';
import MoblieNavbar from './components/header/MoblieNavbar';
import UploadBanner from './ui/UploadBanner'; // Import the UploadBanner component
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [isUploadBannerVisible, setIsUploadBannerVisible] = useState<boolean>(false); // State to manage the visibility of UploadBanner

    const toggleSidebar = (): void => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const showUploadBanner = (): void => {
        setIsUploadBannerVisible(true);
    };

    const hideUploadBanner = (): void => {
        setIsUploadBannerVisible(false);
    };

    return (
        <div className="w-full h-screen flex flex-col">
            {/* Fixed Navbar for Desktop */}
            <Navbar toggleSidebar={toggleSidebar} showUploadBanner={showUploadBanner} />

            {/* Mobile Navbar (Hidden on Large Screens) */}
            <div className="lg:hidden">
                <MoblieNavbar />
            </div>

            <div className="flex flex-1">
                {/* Sidebar (Adjust position based on screen size) */}
                <Sidebar isSidebarOpen={isSidebarOpen} />

                {/* Main Content Area */}
                <div
                    className={`flex-1 overflow-auto px-6 pt-[70px] lg:pt-4 transition-all duration-300 ${
                        isSidebarOpen ? 'lg:ml-0' : 'lg:ml-[200px]'
                    }`}
                >
                    <Outlet />
                </div>
            </div>

            {/* Conditionally Render the UploadBanner */}
            {isUploadBannerVisible && <UploadBanner onClose={hideUploadBanner} />}
        </div>
    );
};

export default App;


// import React, { useState } from 'react';

// import Sidebar from './components/sidebar/Sidebar';
// import Navbar from './components/header/Navbar';
// import MoblieNavbar from './components/header/MoblieNavbar';
// import UploadBanner from './ui/UploadBanner'; // Import the UploadBanner component
// import { Outlet } from 'react-router-dom';

// function App() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [isUploadBannerVisible, setIsUploadBannerVisible] = useState(false); // State to manage the visibility of UploadBanner

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     const showUploadBanner = () => {
//         setIsUploadBannerVisible(true);
//     };

//     const hideUploadBanner = () => {
//         setIsUploadBannerVisible(false);
//     };

//     return (
//         <div className="w-full h-screen flex flex-col">
//             {/* Fixed Navbar for Desktop */}
//             <Navbar toggleSidebar={toggleSidebar} showUploadBanner={showUploadBanner} />

//             {/* Mobile Navbar (Hidden on Large Screens) */}
//             <div className="lg:hidden">
//                 <MoblieNavbar />
//             </div>

//             <div className="flex flex-1">
//                 {/* Sidebar (Adjust position based on screen size) */}
//                 <Sidebar isSidebarOpen={isSidebarOpen} />

//                 {/* Main Content Area */}
//                 <div
//                     className={`flex-1 overflow-auto px-6 pt-[70px] lg:pt-4 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-0' : 'lg:ml-[200px]'
//                         }`}
//                 >
//                     <Outlet />
//                 </div>
//             </div>

//             {/* Conditionally Render the UploadBanner */}
//             {isUploadBannerVisible && <UploadBanner onClose={hideUploadBanner} />}
//         </div>
//     );
// }

// export default App;
