import { Line } from 'react-chartjs-2';
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var midata = {
    labels: meses,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Beneficios',
            data: beneficios,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(5, 150, 105)',
            backgroundColor: 'rgba(16, 185, 129, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(16, 185, 129)',
            pointBackgroundColor: '#ecfdf5',
        },
        
    ],
};

var misoptions = {
    scales : {
        y : {
            min : 0
        },
        x: {
            ticks: { color: 'rgb(0)'}
        }
    }
};

export default function LinesChart() {
    return <Line data={midata} options={misoptions}/>
}