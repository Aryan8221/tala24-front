import React, {useState, Fragment} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {prefixer} from 'stylis'
import {CacheProvider, ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material/styles";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import {TextField} from "@mui/material";

// Create RTL MUI
const theme = createTheme({
    direction: 'rtl',
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props) {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

export default function AddAdmin() {
    const [admin, setAdmin] = useState([
        {
            firstName: 'برای میلاد',
            lastName: '69000000',
            phoneNumber: '50000000',
            password: '1401/05/06',
            id: '1'
        },
        {
            firstName: 'برای میلاد',
            lastName: '69000000',
            phoneNumber: '50000000',
            password: '1401/05/06',
            id: '2'
        },
        {
            firstName: 'برای میلاد',
            lastName: '69000000',
            phoneNumber: '50000000',
            password: '1401/05/06',
            id: '3'
        },
        {
            firstName: 'برای میلاد',
            lastName: '69000000',
            phoneNumber: '50000000',
            password: '1401/05/06',
            id: '4'
        },
        {
            firstName: 'برای میلاد',
            lastName: '69000000',
            phoneNumber: '50000000',
            password: '1401/05/06',
            id: '5'
        },
        {
            firstName: 'برای میلاد',
            lastName: '69000000',
            phoneNumber: '50000000',
            password: '1401/05/06',
            id: '6'
        },
        {
            firstName: 'برای میلاد',
            lastName: '69000000',
            phoneNumber: '50000000',
            password: '1401/05/06',
            id: '7'
        },
        {
            firstName: 'برای میلاد',
            lastName: '69000000',
            phoneNumber: '50000000',
            password: '1401/05/06',
            id: '8'
        }

    ]);

    const [addAdmin, setAddAdmin] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        password: ''
    });

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    /*const handleRemoveProject = e => {
            const projectId = e.target.getAttribute("id")
            setUser(user.filter(item => item.id !== projectId))


            setOpen(false);
        }*/
    function openModal() {
        setIsOpen(true)
    }

    const onChangeInput = (e) => {
        setAddAdmin({
            ...addAdmin,
            [e.target.name]: e.target.value
        })
    }

    function handleAddAdmin() {
        setAdmin([...admin, addAdmin])
        setIsOpen(false)
    }

    const handleDeleteAdmin = e => {
        const AdminId = e.target.id
        setAdmin(admin.filter(item => item.id !== AdminId))
    }


    return (
        <>
            <div className="bg-[#141414] mx-8 mt-8 p-4 rounded-lg overflow-scroll">
                <div className="flex flex-col space-y-4 md:flex-row items-center justify-between">
                    <div className="text-white text-lg font-medium">ادمین ها</div>
                    <button
                        type="button"
                        onClick={openModal}
                        className="rounded-md flex flex-row items-center bg-[#DFAF3D] text-black px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                        ادمین جدید
                    </button>

                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25"/>
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel
                                            className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg text-center font-medium leading-6 text-gray-900"
                                            >
                                                اضافه کردن ادمین
                                            </Dialog.Title>
                                            <div className="mt-6">
                                                <CacheProvider value={cacheRtl}>
                                                    <ThemeProvider theme={theme}>
                                                        <div dir="rtl">
                                                            <div className="flex flex-col space-y-4">
                                                                <TextField
                                                                    name="firstName"
                                                                    label="نام"
                                                                    value={addAdmin.firstName}
                                                                    onChange={onChangeInput}
                                                                />
                                                                <TextField
                                                                    name="lastName"
                                                                    label="نام خانوادگی"
                                                                    value={addAdmin.lastName}
                                                                    onChange={onChangeInput}
                                                                />
                                                                <TextField
                                                                    name="phoneNumber"
                                                                    label="شماره موبایل"
                                                                    value={addAdmin.phoneNumber}
                                                                    onChange={onChangeInput}
                                                                />
                                                                <TextField
                                                                    name="password"
                                                                    label="رمز عبور"
                                                                    value={addAdmin.password}
                                                                    onChange={onChangeInput}
                                                                />
                                                            </div>
                                                        </div>
                                                    </ThemeProvider>
                                                </CacheProvider>
                                            </div>

                                            <div className="mt-4">
                                                <div className="flex flex-row justify-evenly">
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-lime-400 px-4 py-2 text-sm font-medium text-gary-700 hover:bg-lime-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        onClick={handleAddAdmin}
                                                    >
                                                        ثبت
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-gary-700 hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        onClick={closeModal}
                                                    >
                                                        بستن
                                                    </button>
                                                </div>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
                <table className='mt-8 text-white break-normal'>
                    <thead>
                    <tr>
                        <th className={'p-4'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"/>
                            </svg>
                        </th>
                        <th className={'p-4'}>نام</th>
                        <th className={'p-4'}>نام خانوادگی</th>
                        <th className={'p-4'}>شماره موبایل</th>
                        <th className={'p-4'}>رمز عبور</th>
                        <th className={'p-4'}>عملیات</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        admin.map((u, i) => (
                            <tr>
                                <td className={'p-4'}>{i + 1}</td>
                                <td className={'p-4'}>{u.firstName}</td>
                                <td className={'p-4'}>{u.lastName}</td>
                                <td className={'p-4'}>{u.phoneNumber}</td>
                                <td className={'p-4'}>{u.password}</td>
                                <td className={'p-4'}>
                                    <button
                                        className='px-2 py-1 text-sm rounded border-[1px] border-gray-300 border-solid hover:border-red-600 hover:bg-red-600 transition'
                                        id={u.id}
                                        onClick={handleDeleteAdmin}
                                    >
                                        حذف
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}