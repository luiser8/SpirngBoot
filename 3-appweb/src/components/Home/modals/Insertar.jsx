import { Fragment, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Transition } from '@headlessui/react';

const Insertar = ({ openInsert, confirm }) => {
    const [open, setOpen] = useState(true);
    const cancelButtonRef = useRef(null);
    const [rol, setRol] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const activeInsertar = (open) => {
        openInsert(open); setOpen(open);
    }
    const okInsertar = async () => {
        confirm({ 'rol': rol, 'name': name, 'email': email, 'password': password}); setOpen(open);
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                static
                className="fixed z-10 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                open={open}
                onClose={() => activeInsertar(false)}
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Crear Usuario 
                                        </Dialog.Title>
                                       
                                        <form className="mt-4 space-y-6">
                                            <div className="shadow overflow-hidden sm:rounded-md">
                                                <div className="px-4 py-2 bg-white ">
                                                    <div className="grid grid-cols-10 gap-4">
                                                        <div className="col-span-5">
                                                            <label htmlFor="rol" className="block text-sm font-medium text-gray-700">Rol</label>
                                                            <select
                                                                id="rol"
                                                                name="rol"
                                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                onChange={async (event) => setRol(event.target.value)}
                                                            >
                                                                <option value={0}>Seleciona Rol</option>
                                                                    <option value={1}>1</option>
                                                                    <option value={2}>2</option>
                                                                    <option value={3}>3</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-span-5">
                                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                                                            <input id="name" name="name" onChange={async (ev) => setName(ev.target.value)} type="text" required className="mt-1 block w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Nombre" />
                                                        </div>
                                                        <div className="col-span-5">
                                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                                            <input id="email" name="email" onChange={async (ev) => setEmail(ev.target.value)} type="email" required className="mt-1 block w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Email" />
                                                        </div>
                                                        <div className="col-span-5">
                                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                                                            <input id="password" name="password" onChange={async (ev) => setPassword(ev.target.value)} type="password" required className="mt-1 block w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Contraseña" />
                                                        </div>
                                                    </div>
                                                </div>   
                                            </div>
                                        </form>
                                    </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    disabled={rol !== '' && name !== 0 && email !== '' && password !== '' ? false : true}
                                    className={`${rol !== '' && name !== 0 && email !== '' && password !== '' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-200 hover:bg-green-200'} w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2  text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm`}
                                    onClick={() => okInsertar(true)}
                                >
                                    Guardar
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => activeInsertar(false)}
                                    ref={cancelButtonRef}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

Insertar.propTypes = {
    openInsert : PropTypes.func,
    confirm : PropTypes.func,
}

export default Insertar;