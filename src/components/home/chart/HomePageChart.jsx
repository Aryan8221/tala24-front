import {Box} from "@mui/material";
import {TabContext, TabList} from "@mui/lab";
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';
import {useState} from "react";
import Chart24 from "./chart24";
import '../../../style/chart.css';
import Chart16_ from "./chart16_";
import Chart8 from "./chart8";

const HomePageChart = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className={'chart text-white mx-5'}>
                <TabContext value={value} >
                    <Box sx={{ width: '100%' }} >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="white"
                            sx={{
                                "& button": {borderRadius: 2},
                                // "& button:active": { backgroundColor: '#d0a94d'},
                                "& button.Mui-selected": { backgroundColor: '#d0a94d', color: 'black'},
                                "& span.MuiTabs-indicator": { display: 'none'},
                                "& button.MuiButtonBase-root": { border: '1px solid white', marginX: '5px'},
                                // "& button:focus": { backgroundColor: '#d0a94d'},
                            }}
                            TabIndicatorProps={{style: {border:'0px'}}}
                            aria-label="secondary tabs example"
                        >
                            <Tab value="1" label="طلای ۲۴ عیار" />
                            <Tab value="2" label="طلای ۱۶ عیار" />
                            <Tab value="3" label="طلای ۸ عیار" />
                        </Tabs>
                        <TabPanel value="1">
                            <Chart24 />
                        </TabPanel>
                        <TabPanel value="2">
                            <Chart16_ />
                        </TabPanel>
                        <TabPanel value="3">
                            <Chart8 />
                        </TabPanel>
                    </Box>
                </TabContext>
            </div>
        </>
    )
}

export default HomePageChart;