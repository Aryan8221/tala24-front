import React, {useState, Fragment} from 'react'
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {InputAdornment, TextField} from "@mui/material";
import {Combobox, Transition} from '@headlessui/react'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid'

function StepReceiveType(props) {
    // const [value, setValue] = React.useState('cash');
    const [address, setAddress] = useState([
        {id: 1, name: 'آدرس 1'},
        {id: 2, name: 'آدرس 2'},
        {id: 3, name: 'آدرس 3'},
        {id: 4, name: 'آدرس 4'},
        {id: 5, name: 'آدرس 5'},
        {id: 6, name: 'آدرس 6'},
    ])
    const [selected, setSelected] = useState(address[0])
    const [query, setQuery] = useState('')
    const [isInputNewAddress, setIsInputNewAddress] = useState(false)
    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };
    const handleShowNewAddress = () => {
        console.log(isInputNewAddress)
        setIsInputNewAddress(() => !isInputNewAddress)
    }
    const filteredPeople =
        query === ''
            ? address
            : address.filter((person) =>
                address.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    return (
        <>
            <h2 className="text-white text-xl font-medium mb-6">
                نوع دریافت
            </h2>
            <div className="px-4 flex md:flex-row flex-col justify-between items-center">
                <FormControl className='md:w-1/4'>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={props.value}
                        onChange={(event) => {
                            props.handleChange(event.target.value)
                        }}
                    >
                        <FormControlLabel value="cash" control={<Radio/>} label="نگه داری در صندوق"/>
                        <FormControlLabel value="delivery" control={<Radio/>} label="تحویل درب منزل"/>
                    </RadioGroup>
                </FormControl>
                <div className="md:w-2/4">
                    {
                        props.value === 'cash'
                            ? (
                                null
                            )
                            : (
                                <div className="flex flex-col space-y-4">
                                    <Combobox value={selected} onChange={setSelected}>
                                        <div className="relative mt-1">
                                            <div
                                                className="relative w-full cursor-default overflow-hidden text-white rounded border-2 border-[#dfaf3d] border-solid text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
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
                                        isInputNewAddress !== true
                                            ? (
                                                <button
                                                    className='flex flex-row justify-center border-2 border-[#dfaf3d] border-solid rounded p-4 text-xs'
                                                    onClick={handleShowNewAddress}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                         strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                    </svg>
                                                    افزودن آدرس جدید
                                                </button>
                                            )
                                            : (null)
                                    }

                                    {
                                        isInputNewAddress === true
                                            ? (
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    label="آدرس"
                                                    multiline
                                                    rows={2}
                                                    style={{color: '#000 !important'}}
                                                    className='text-sky-50 w-full'
                                                />
                                            )
                                            : (null)
                                    }

                                </div>
                            )
                    }
                </div>
            </div>

        </>
    )
}

export default StepReceiveType