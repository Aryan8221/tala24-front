import React, {useState, Fragment} from 'react'
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {InputAdornment, TextField} from "@mui/material";
import {Combobox, Transition} from '@headlessui/react'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid'

function StepSelectCard() {
    const [value, setValue] = React.useState('cash');
    const [ShabaNumber, setShabaNumber] = useState([
        {id: 1, name: 'شبا 1'},
        {id: 2, name: 'شبا 2'},
        {id: 3, name: 'شبا 3'},
        {id: 4, name: 'شبا 4'},
        {id: 5, name: 'شبا 5'},
        {id: 6, name: 'شبا 6'},
    ])
    const [selected, setSelected] = useState(ShabaNumber[0])
    const [query, setQuery] = useState('')
    const [isInputNewShabaNumber, setIsInputNewShabaNumber] = useState(false)
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleShowNewShabaNumber = () => {
        console.log(isInputNewShabaNumber)
        setIsInputNewShabaNumber(() => !isInputNewShabaNumber)
    }
    const filteredPeople =
        query === ''
            ? ShabaNumber
            : ShabaNumber.filter((person) =>
                ShabaNumber.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )
    return (
        <>
            <h2 className="text-white text-xl font-medium mb-6">
                انتخاب شماره شبا
            </h2>
            <div className="px-4 flex md:flex-row flex-col justify-between">
                <div className="flex flex-col space-y-4 md:w-1/2 md:ml-4">
                    <Combobox value={selected} onChange={setSelected}>
                        <div className="relative mt-1">
                            <div
                                className="relative w-full cursor-default overflow-hidden text-white rounded border-2 border-sky-50 border-solid text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                <Combobox.Input
                                    className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 focus:ring-0 bg-[#141414] text-white border-2 border-[#dfaf3d] border-solid"
                                    displayValue={(person) => person.name}
                                    onChange={(event) => setQuery(event.target.value)}
                                />
                                <Combobox.Button
                                    className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </Combobox.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                afterLeave={() => setQuery('')}
                            >
                                <Combobox.Options
                                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {filteredPeople.length === 0 && query !== '' ? (
                                        <div
                                            className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                            Nothing found.
                                        </div>
                                    ) : (
                                        filteredPeople.map((person) => (
                                            <Combobox.Option
                                                key={person.id}
                                                className={({active}) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                        active ? 'bg-[#dfaf3d] text-white' : 'text-gray-900'
                                                    }`
                                                }
                                                value={person}
                                            >
                                                {({selected, active}) => (
                                                    <>
                        <span
                            className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {person.name}
                        </span>
                                                        {selected ? (
                                                            <span
                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                                    active ? 'text-white' : 'text-teal-600'
                                                                }`}
                                                            >
                            <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                          </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Combobox.Option>
                                        ))
                                    )}
                                </Combobox.Options>
                            </Transition>
                        </div>
                    </Combobox>
                    {
                        isInputNewShabaNumber !== true
                            ? (
                                <button
                                    className='flex flex-row justify-center border-2 border-sky-50 border-solid rounded p-4 text-xs'
                                    onClick={handleShowNewShabaNumber}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    اضافه کردن شماره شبا
                                </button>
                            )
                            : (null)
                    }

                    {
                        isInputNewShabaNumber === true
                            ? (
                                <TextField
                                    id="outlined-multiline-static"
                                    label="شماره شبا"
                                    multiline
                                    rows={2}
                                    className='text-sky-50 w-full'
                                />
                            )
                            : (null)
                    }
                </div>
                <div className="flex flex-col space-y-3 border border-sky-50 rounded-md border-solid p-3 md:w-1/2 text-sm mt-4 md:mt-0">
                    <div className='mb-2 text-md text-white'>اطلاعات تکمیلی:</div>
                    <div className="flex flex-row justify-between">
                        <div>قیمت طلا</div>
                        <div>257588125 ریال</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>هزینه ارسال</div>
                        <div>257588125 ریال</div>
                    </div>
                    <div className="border border-sky-50 border-solid my-2"></div>
                    <div className="flex flex-row justify-between">
                        <div>قابل پرداخت</div>
                        <div>257588125 ریال</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default StepSelectCard