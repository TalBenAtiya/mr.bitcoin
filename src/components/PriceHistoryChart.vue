<template>
    <LineChartGenerator :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
        :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width"
        :height="height" />
</template>
  
<script>
import { Line as LineChartGenerator } from 'vue-chartjs'

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
} from 'chart.js'
import { bitcoinService } from '../services/bitcoin.service'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
)

export default {
    name: 'LineChart',
    components: {
        LineChartGenerator
    },
    props: {
        chartId: {
            type: String,
            default: 'line-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => { }
        },
        plugins: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Bitcoin USD Rate',
                        pointBackgroundColor: "orange",
                        pointBorderColor: "orange",
                        backgroundColor: "orange",
                        borderColor: "darkgray",
                        data: [],
                        borderWidth: 1,
                        tension: 0.5,
                        fill: true,
                        pointHoverBackgroundColor: "greenyellow",
                        pointHoverBorderColor: "greenyellow",
                    },

                ],
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    filler: {
                        propagate: true
                    }
                }
            }
        }
    },
    async created() {
        const priceHistory = await bitcoinService.getMarketPriceHistory()
        this.chartData.datasets[0].data = priceHistory.map((data) => data.y)
        this.chartData.labels = priceHistory.map((data) => {
            return new Intl.DateTimeFormat(['ban', 'id']).format((data.x + '000'))
        })
    }
}
</script>

<style lang="scss">

</style>