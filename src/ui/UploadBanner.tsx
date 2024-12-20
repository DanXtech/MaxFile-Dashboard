
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface UploadBannerProps {
    onClose: () => void;
}

const UploadBanner: React.FC<UploadBannerProps> = ({ onClose }) => {
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            // handle file upload logic here
            console.log('Selected file:', file);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white w-[700px] border border-gray-200 rounded-md shadow-lg p-6 relative">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-1 text-gray-500 hover:text-gray-700"
                >
                    <AiOutlineClose size={20} />
                </button>

                <div>
                    {/* File Input */}
                    <input type="text" className="block w-full p-2 border mb-4" onChange={handleFileUpload} />
                    <input type="text" className="block w-full p-2 border mb-4" onChange={handleFileUpload} />
                    <input type="text" className="block w-full p-2 border mb-4" onChange={handleFileUpload} />

                    {/* Upload Button */}
                    <button className="px-4 py-2 bg-blue-500 text-white w-full rounded-md">
                        Upload
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UploadBanner;

// import React from 'react';
// import { AiOutlineClose } from 'react-icons/ai';

// interface UploadBannerProps {
//     onClose: () => void;
// }

// const UploadBanner: React.FC<UploadBannerProps> = ({ onClose }) => {
//     const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const file = event.target.files ? event.target.files[0] : null;
//         if (file) {
//             // handle file upload logic here
//             console.log('Selected file:', file);
//         }
//     };

//     return (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//             <div className="bg-white w-[700px] border border-gray-200  rounded-md shadow-lg p-6  relative">
//                 {/* Close button */}
//                 <button
//                     onClick={onClose}
//                     className="absolute top-2 right-1 text-gray-500 hover:text-gray-700"
//                 >
//                     <AiOutlineClose size={20} />
//                 </button>

//                 <div>
//                     {/* File Input */}
//                     <input type="text" className="block w-full p-2 border mb-4" onChange={handleFileUpload} />
//                     <input type="text" className="block w-full p-2 border mb-4" onChange={handleFileUpload} />
//                     <input type="text" className="block w-full p-2 border mb-4" onChange={handleFileUpload} />

//                     {/* Upload Button */}
//                     <button className="px-4 py-2 bg-blue-500 text-white w-full rounded-md">
//                         Upload
//                     </button>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default UploadBanner;
