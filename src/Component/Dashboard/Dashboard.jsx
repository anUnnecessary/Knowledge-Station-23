import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

    const marksArray = [
        { id: 1,
        name: "Assignment 1",
        marks: 57 
        },
        { id: 2,
        name: "Assignment 2",
        marks: 35
        },
        { id: 3,
        name: "Assignment 3",
        marks: 55
        },
        { id: 4,
        name: "Assignment 4",
        marks: 37
        },
        { id: 5,
        name: "Assignment 5",
        marks: 26
        },
        { id: 1,
        name: "Assignment 6",
        marks: 25
        },
        { id: 7,
        name: "Assignment 7",
        marks: 57 
        },
        { id: 8,
        name: "Assignment 8",
        marks: 34 
        }
    ]
    return (
        <div>
            <LineChart
            width={500}
            height={300}
            data={marksArray}
            >
               <Line dataKey="name"></Line>
            </LineChart>
        </div>
    );
};

export default Dashboard;