import React from 'react'

function ModalComplete() {
    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden w-full h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative rounded-lg shadow">

                    <div className="flex items-center justify-center p-4 md:p-5 rounded-t">
                        <h3 className="flex text-center text-xl font-semibold text-black">
                            Task Title
                        </h3>


                    </div>

                    <div className="p-8">
                        <input type="checkbox" /> Complete
                    </div>

                    <div className="flex items-center justify-center p-4 md:p-5  rounded-b gap-8">

                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Delete
                        </button>
                        <button type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Save
                        </button>

                    </div>
                </div>
            </div>
        </div>


        // <div classNameName="overflow-y-auto overflow-x-hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 justify-center items-center w-full h-auto max-h-full">


        //     <div classNameName="relative p-4 w-full max-w-2xl max-h-full">

        //         <div classNameName="relative bg-white rounded-lg shadow">

        //             <div classNameName="flex items-center justify-center p-4 md:p-5 border-b rounded-t">
        //                 <h3 classNameName="text-xl font-semibold text-gray-900 text-center">
        //                     Task Title
        //                 </h3>
        //                 <button type="button" classNameName="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
        //                     <svg classNameName="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        //                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        //                     </svg>
        //                     <span classNameName="sr-only">Close modal</span>
        //                 </button>
        //             </div>

        //             <div classNameName="p-4 md:p-5 space-y-4">
        //                 <input type="checkbox" /> Complete
        //             </div>

        //             <div classNameName="flex items-center justify-center p-4 md:p-5 border-t border-gray-200 rounded-b gap-8">
        //                 <button data-modal-hide="static-modal" type="button" classNameName="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete
        //                 </button>
        //                 <button data-modal-hide="popup-modal" type="button" classNameName="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
        //                     Save
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>


    )
}

export default ModalComplete
