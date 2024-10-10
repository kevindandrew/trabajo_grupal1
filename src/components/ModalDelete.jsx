import React from 'react'

function ModalDelete() {
    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden w-full h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative rounded-lg shadow">

                    <div className="flex items-center justify-center p-4 md:p-5 rounded-t">
                        <h3 className="flex text-center text-xl font-semibold text-black">
                            Seguro que desea Eliminar<br/>esta tarea?
                        </h3>


                    </div>

                    <div className="flex items-center justify-center p-4 md:p-5  rounded-b gap-8">

                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Cancelar
                        </button>
                        <button type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Aceptar
                        </button>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModalDelete
