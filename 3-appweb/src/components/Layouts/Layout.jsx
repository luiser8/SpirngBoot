import { Fragment, useContext } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
    MenuIcon,
    LogoutIcon,
    ChartPieIcon,
    CogIcon,
    RefreshIcon,
    ViewGridAddIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link } from "@reach/router";
import { Context } from '../../context/Context';
import Routes from '../../utils/Routes';

const Layout = () => {
    const { logout, checkUser } = useContext(Context);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Fragment>
            {(checkUser().userId) !== null ?
                <Fragment>
                    <Popover className="relative bg-gray-50">
                        {({ open }) => (
                            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                                <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
                                    <div className="flex justify-start lg:w-0 lg:flex-1">
                                        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                                            <span class="ml-3 text-xl">App Web Users</span>
                                        </Link>

                                    </div>
                                    <div className="-mr-2 -my-2 md:hidden">
                                        <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Open menu</span>
                                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                                        <Popover className="relative">
                                            {({ open }) => (
                                                <>
                                                    <Popover.Button
                                                        className={classNames(
                                                            open ? 'text-gray-900' : 'text-gray-500',
                                                            'group bg-gray-50 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2'
                                                        )}
                                                    >
                                                        <span>{checkUser().name}</span>
                                                        <ChevronDownIcon
                                                            className={classNames(
                                                                open ? 'text-gray-600' : 'text-gray-400',
                                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </Popover.Button>

                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel
                                                            static
                                                            className="absolute z-10 -ml-4 mt-3 transform px-2 w-60 max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-2/3"
                                                        >
                                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                                <div className="relative grid gap-6 bg-gray-50 px-4 py-4 sm:gap-8 sm:p-8">

                                                                    <Link
                                                                        to={``}
                                                                        className="-m-4 p-2 flex items-start rounded-lg hover:bg-gray-50"
                                                                        onClick={async () => logout(0, null)}
                                                                    >
                                                                        <LogoutIcon className="flex-shrink-0 h-6 w-6" aria-hidden="true" />
                                                                        <p className="pl-2 text-base font-semibold">Cerrar sesion</p>
                                                                    </Link>

                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>

                                    </Popover.Group>

                                </div>
                            </div>
                        )}
                    </Popover>
                </Fragment>
                :
                <Fragment></Fragment>
            }
            <Routes />
        </Fragment>
    )
}

export default Layout;