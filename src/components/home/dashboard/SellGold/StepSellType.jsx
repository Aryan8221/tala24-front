import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {InputAdornment, TextField} from "@mui/material";
import PropTypes from 'prop-types';
import {NumericFormat} from 'react-number-format';


const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
    props,
    ref,
) {
    const {onChange, ...other} = props;

    return (
        <NumericFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                        target: {
                            name: props.name,
                            value: values.value,
                        },
                    }
                );
            }}
            thousandSeparator
            valueIsNumericString
            // className={}
            prefix="ريال"
        />
    );
});

NumericFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};


function StepSellType() {
    const [value, setValue] = React.useState('price');
    const [valuePrice, setValuePrice] = React.useState({
        numberformat: '1320',
    });

    const handleChangePrice = (event) => {
        setValuePrice({
            ...valuePrice,
            [event.target.name]: event.target.value,
        });
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <h2 className="text-sky-100 text-xl font-medium mb-6">
                فروش طلا
            </h2>
            <div className="px-4 flex md:flex-row flex-col items-center">
                <FormControl className="md:w-1/2">
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="price" control={<Radio/>} label="بر اساس مبلغ"/>
                        <FormControlLabel value="weight" control={<Radio/>} label="بر اساس وزن طلا"/>
                    </RadioGroup>
                </FormControl>
                <div className="md:w-1/2 mt-4 md:mt-0">
                    {
                        value === 'price'
                            ? (
                                <TextField
                                    label="مبلغ پرداختی"
                                    value={valuePrice.numberformat}
                                    onChange={handleChangePrice}
                                    name="numberformat"
                                    id="formatted-numberformat-input"
                                    InputProps={{
                                        inputComponent: NumericFormatCustom,
                                    }}
                                />
                            )
                            : (
                                <TextField
                                    label="وزن طلا"
                                    id="outlined-start-adornment"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">گرم</InputAdornment>,
                                    }}
                                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                                />
                            )
                    }
                </div>
            </div>

        </>

    )
}

export default StepSellType