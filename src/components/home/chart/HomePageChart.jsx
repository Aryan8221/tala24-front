import {Box} from "@mui/material";
import {TabContext, TabList} from "@mui/lab";
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';
import {useEffect, useState} from "react";
import Chart24 from "./chart24";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

import '../../../style/chart.css';

const HomePageChart = () => {

    return (
        <>
            <div className={'chart text-white mx-5'}>
                <Chart24 />
            </div>
        </>
    )
}

export default HomePageChart;