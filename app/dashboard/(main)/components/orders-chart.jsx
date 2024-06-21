'use client';
import React, { useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { getOrders } from '../../orders/actions/get-orders';

const OrdersChart = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchAndProcessOrders = async () => {
            const orders = await getOrders();

            // Filter confirmed orders
            const confirmedOrders = orders.filter(
                (order) => order.status === 'confirmed'
            );

            // Group orders by date and calculate the sum of product prices
            const groupedOrders = confirmedOrders.reduce((acc, order) => {
                const date = order.created_at.split('T')[0]; // Extract date part
                if (!acc[date]) {
                    acc[date] = { date, productSum: 0 };
                }

                // Calculate the sum of product prices
                const productSum = JSON.parse(order.productes).reduce(
                    (sum, product) => sum + product.productPrice,
                    0
                );
                acc[date].productSum += productSum;

                return acc;
            }, {});

            // Get the latest 7 dates
            const allDates = Array.from({ length: 7 }, (_, i) => {
                const date = new Date();
                date.setDate(date.getDate() - i);
                return date.toISOString().split('T')[0];
            }).reverse();

            // Fill in missing dates with productSum 0
            const data = allDates.map((date) => ({
                date,
                productSum: groupedOrders[date]
                    ? groupedOrders[date].productSum
                    : 0,
            }));

            setChartData(data);
        };

        fetchAndProcessOrders();
    }, []);

    return (
        <ResponsiveContainer
            width='100%'
            height={550}
        >
            <BarChart data={chartData}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='date' />

                <Tooltip />
                <Legend />
                <Bar
                    dataKey='productSum'
                    fill='#45c172'
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default OrdersChart;
