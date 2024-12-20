
import { useState } from 'react';

const Home = () => {
    const data = [
        { Name: 'Damilare Anjorin', Workflow: '3', Stage: '+5', Updated: 'Sep 12' },
        { Name: 'John Doe', Workflow: '3', Stage: '9', Updated: 'not active' },
        { Name: 'Jane Smith', Workflow: '3', Stage: '7', Updated: 'Sep 10' },
        { Name: 'Chris Evans', Workflow: '3', Stage: '2', Updated: 'Sep 8' },
        { Name: 'Tony Stark', Workflow: '3', Stage: '1', Updated: 'Sep 5' },
        { Name: 'Steve Rogers', Workflow: '3', Stage: '5', Updated: 'Sep 4' },
        { Name: 'Natasha Romanoff', Workflow: '3', Stage: '6', Updated: 'Sep 3' },
        { Name: 'Bruce Banner', Workflow: '3', Stage: '8', Updated: 'Sep 2' },
        { Name: 'Thor Odinson', Workflow: '3', Stage: '4', Updated: 'Sep 1' },
        { Name: 'Clint Barton', Workflow: '3', Stage: '3', Updated: 'Aug 30' },
        { Name: 'Peter Parker', Workflow: '3', Stage: '9', Updated: 'Aug 28' },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    // Calculate the current items to display
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="pt-5 lg:pt-20 lg:pb-5 px-5 lg:pl-16 w-full ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
                <div className="w-full viewTable">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Workflow</th>
                                <th>Stage</th>
                                <th>Updated at</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? 'bg-[#ececf1]' : 'bg-white'}`}>
                                    <td>{item.Name}</td>
                                    <td>{item.Workflow}</td>
                                    <td>{item.Stage}</td>
                                    <td>{item.Updated}</td>
                                    <td className="text-blue-500 cursor-pointer">view</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination controls */}
                    <div className='flex items-center justify-end'>
                        <div className="flex items-center mt-2">
                            <button
                                className={`px-3 py-2 bg-gray-200 text-sm ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>

                            {[...Array(totalPages)].map((_, index) => (
                                <button key={index + 1}
                                    onClick={() => goToPage(index + 1)}
                                    className={`px-2 py-1 lg:px-2 lg:py-2 text-sm ${currentPage === index + 1 ? "bg-indigo-700 text-white" : 'border-2 text-black'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                className={`px-3 py-2 bg-gray-200 text-sm ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full viewTable">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr>
                                <th>Name</th>

                                <th>Updated at</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? 'bg-[#ececf1]' : 'bg-white'}`}>
                                    <td>{item.Name}</td>

                                    <td>{item.Updated}</td>
                                    <td className="text-blue-500 cursor-pointer">view</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination controls */}
                    <div className='flex items-center justify-end'>
                        <div className="flex items-center mt-2">
                            <button
                                className={`px-3 py-2 bg-gray-200 text-sm ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>

                            {[...Array(totalPages)].map((_, index) => (
                                <button key={index + 1}
                                    onClick={() => goToPage(index + 1)}
                                    className={`px-2 py-1 lg:px-2 lg:py-2 text-sm ${currentPage === index + 1 ? "bg-indigo-700 text-white" : 'border-2 text-black'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                className={`px-3 py-2 bg-gray-200 text-sm ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full viewTable">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr>
                                <th>Name</th>

                                <th>Updated at</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? 'bg-[#ececf1]' : 'bg-white'}`}>
                                    <td>{item.Name}</td>

                                    <td>{item.Updated}</td>
                                    <td className="text-blue-500 cursor-pointer">view</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination controls */}
                    <div className='flex items-center justify-end'>
                        <div className="flex items-center mt-2">
                            <button
                                className={`px-3 py-2 bg-gray-200 text-sm ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>

                            {[...Array(totalPages)].map((_, index) => (
                                <button key={index + 1}
                                    onClick={() => goToPage(index + 1)}
                                    className={`px-2 py-1 lg:px-2 lg:py-2 text-sm ${currentPage === index + 1 ? "bg-indigo-700 text-white" : 'border-2 text-black'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                className={`px-3 py-2 bg-gray-200 text-sm ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full viewTable">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr>
                                <th>Name</th>

                                <th>Updated at</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? 'bg-[#ececf1]' : 'bg-white'}`}>
                                    <td>{item.Name}</td>

                                    <td>{item.Updated}</td>
                                    <td className="text-blue-500 cursor-pointer">view</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>



                    {/* Pagination controls */}
                    <div className='flex items-center justify-end'>
                        <div className="flex items-center mt-2">
                            <button
                                className={`px-3 py-2 bg-gray-200 text-sm ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>

                            {[...Array(totalPages)].map((_, index) => (
                                <button key={index + 1}
                                    onClick={() => goToPage(index + 1)}
                                    className={`px-2 py-1 lg:px-2 lg:py-2 text-sm ${currentPage === index + 1 ? "bg-indigo-700 text-white" : 'border-2 text-black'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                className={`px-3 py-2 bg-gray-200 text-sm ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Home;
