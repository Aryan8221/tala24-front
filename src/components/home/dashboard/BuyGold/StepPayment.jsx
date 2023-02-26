import React from 'react'
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {FormLabel, TextField} from "@mui/material";

function StepPayment(props) {
    // const [value, setValue] = React.useState('cash');
    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };
    return (
        <>
            <h2 className="text-white text-xl font-medium mb-6">
                پرداخت
            </h2>
            <div className="px-4 flex md:flex-row flex-col justify-between md:space-x-6 space-x-reverse">
                <div className="border border-sky-50 rounded-md border-solid p-3 md:w-1/2">
                    <FormControl>
                        <FormLabel className='mb-3' id="demo-radio-buttons-group-label">انتخاب روش پرداخت:</FormLabel>
                        <RadioGroup
                            // aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={props.value}
                            onChange={props.handleChange}
                            className='mr-3'
                        >
                            <FormControlLabel value="cash" control={<Radio/>} label="پرداخت اینترنتی"/>
                            <FormControlLabel value="delivery" control={<Radio/>} label="پرداخت در محل(با کارت بانکی)"/>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="flex flex-col space-y-3 border border-sky-50 rounded-md border-solid p-3 md:w-1/2 text-sm mt-4 md:mt-0">
                    <div className='mb-2 text-md text-white'>اطلاعات تکمیلی:</div>
                    <div className="flex flex-row justify-between">
                        <div>قیمت طلا</div>
                        <div>{props.valuePrice.numberformat} ریال</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>هزینه ارسال</div>
                        <div>{props.valuePrice.numberformat} ریال</div>
                    </div>
                    <div className="border border-sky-50 border-solid my-2"></div>
                    <div className="flex flex-row justify-between">
                        <div>قابل پرداخت</div>
                        <div>{props.valuePrice.numberformat} ریال</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default StepPayment