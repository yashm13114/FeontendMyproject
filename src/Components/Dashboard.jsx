// import React, { useContext, useEffect, useState } from 'react';
// import { UserContext } from '../App';
// import { Card } from 'antd';
// import moment from 'moment';
// import Analytics from './Analytics';
// import ReactApexChart from 'react-apexcharts';
// import { ToastContainer, toast } from 'react-toastify';
// const Dashboard = ({ thisYearExpense }) => {
//   const { state, dispatch } = useContext(UserContext);
//   const [todayExpense, setTodayExpense] = useState(0);
//   const [last7DaysExpense, setLast7DaysExpense] = useState(0);
//   const [last30DaysExpense, setLast30DaysExpense] = useState(0);
//   const [currentYearExpense, setCurrentYearExpense] = useState(0);
//   const [allTransactions, setallTransactions] = useState([])
//   const [income, setIncome] = useState(0);
//   const [selectedGraph, setSelectedGraph] = useState('line');
//   // Fetch expenses for today, last 7 days, last 30 days, and this year
//   const fetchExpenses = async () => {
//     try {
//       const today = moment().format('YYYY-MM-DD');
//       const last7Days = moment().subtract(7, 'days').format('YYYY-MM-DD');
//       const last30Days = moment().subtract(30, 'days').format('YYYY-MM-DD');
//       const thisYearStart = moment().startOf('year').format('YYYY-MM-DD');

//       const response = await fetch('http://localhost:5000/get-transaction');

//       if (response.ok) {
//         const data = await response.json();

//         const todayExpenses = data.filter(expense => moment(expense.date).isSame(today, 'day') && expense.type === 'Expense');
//         const last7DaysExpenses = data.filter(expense => moment(expense.date).isAfter(last7Days) && expense.type === 'Expense');
//         const last30DaysExpenses = data.filter(expense => moment(expense.date).isAfter(last30Days) && expense.type === 'Expense');
//         const thisYearExpenses = data.filter(expense => moment(expense.date).isAfter(thisYearStart) && expense.type === 'Expense');

//         setTodayExpense(todayExpenses.reduce((total, expense) => total + expense.amount, 0));
//         setLast7DaysExpense(last7DaysExpenses.reduce((total, expense) => total + expense.amount, 0));
//         setLast30DaysExpense(last30DaysExpenses.reduce((total, expense) => total + expense.amount, 0));
//         setCurrentYearExpense(thisYearExpenses.reduce((total, expense) => total + expense.amount, 0));
//       } else {
//         console.error('Failed to fetch expenses');
//       }
//     } catch (error) {
//       console.error('Error fetching expenses:', error);
//     }
//   };

//   const getAllTransactions = async () => {
//     try {
//       const user = JSON.parse(localStorage.getItem('user'))
//       const res = await fetch('http://localhost:5000/get-transaction', {
//         method: 'GET',
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json"
//         }
//       }, { userid: user._id })
//       const data = await res.json();
//       console.log(data)
//       setallTransactions(data)


//       if (res.status === 200) {
//         console.log("successful")

//       } else {
//         const error = new Error(res.error);
//         throw error;
//       }
//     } catch (err) {
//       console.log("err " + err)
//     }
//   }

//   useEffect(() => {
//     getAllTransactions();
//     fetchExpenses();
//   }, []); // Fetch expenses on component mount
//   const filteredIncomeData = allTransactions
//     .filter(transaction => moment(transaction.date).isAfter(currentYearExpense) && transaction.type === 'Income')
//     .reduce((total, transaction) => total + transaction.amount, 0);

//   const chartOptions = {
//     labels: ['Expenses', 'Income'],
//     colors: ['#f60d0d', '#16c152'], // Colors for Expenses and Income
//   };
//   const lineChartOptions = {
//     labels: allTransactions.map(transaction => moment(transaction.date).format('MMM DD')),
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       width: 3,
//     },
//     markers: {
//       size: 5,
//     },
//     xaxis: {
//       type: 'category',
//     },
//   };


//   const isExpenseHigh = currentYearExpense > filteredIncomeData;

//   const chartData = isExpenseHigh ? [currentYearExpense, 0] : [currentYearExpense, filteredIncomeData];

//   const lineChartData = allTransactions.map(transaction => ({
//     date: moment(transaction.date).format('MMM DD'),
//     expense: transaction.type === 'Expense' ? transaction.amount : 0,
//     income: transaction.type === 'Income' ? transaction.amount : 0,
//   }));
//   const handleGraphChange = (graphType) => {
//     setSelectedGraph(graphType);
//   };

//   const expenseSpend = () => {
//     toast.warn("Control your expenses.", {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "colored"
//     })
//   }
  

//   const renderGraph = () => {
//     switch (selectedGraph) {
//       case 'bar':
//         if (isExpenseHigh) {
//           expenseSpend(); // Call the function when expense is high
//         }
//         return (
//           <ReactApexChart options={chartOptions} series={chartData} type='pie' height={350} />
//         );
//       case 'line':
//       default:
//         return (
//           <ReactApexChart options={lineChartOptions} series={[{ name: 'Expense', data: lineChartData.map(item => item.expense) }, { name: 'Income', data: lineChartData.map(item => item.income) }]} type='line' height={350} />
//         );
//     }
//   };
//   return (
//     <>
//       <div className='container mx-auto p-10'>
//         <div className='lg:pl-72 lg:pr-72 pl-0 pr-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
//           <Card title="Today's Expense" className='bg-gray-100 hover:bg-gray-200 rounded-md' bordered={false}>
//             <p className='text-lg font-semibold mb-2'>Total: ₹{todayExpense}</p>
//           </Card>
//           <Card title='Last 7 days Expense' className='bg-gray-100 hover:bg-gray-200 rounded-md' bordered={false}>
//             <p className='text-lg font-semibold mb-2'>Total: ₹{last7DaysExpense}</p>
//           </Card>
//         </div>

//         <div className='lg:pl-72 lg:pr-72 pl-0 pr-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4'>
//           <Card title='Last 30 days Expense' className='bg-gray-100 hover:bg-gray-200 rounded-md' bordered={false}>
//             <p className='text-lg font-semibold mb-2'>Total: ₹{last30DaysExpense}</p>
//           </Card>
//           <Card title='This Year Expense' className='bg-gray-100 hover:bg-gray-200 rounded-md' bordered={false}>
//             <p className='text-lg font-semibold mb-2'>Total: ₹{currentYearExpense}</p>
//           </Card>
//         </div>
//         <div className='container lg:pl-52 lg:pr-44 pl-0 pr-0 mt-14'>
//           <div className=' '>

//             <div className=' '>
//               {/* Graph Options */}
//               <div className='flex justify-center mb-4'>
//                 <button className={`mr-2 ${selectedGraph === 'line' ? 'bg-black text-white rounded-md p-1' : 'bg-gray-300 rounded-md p-1'}`} onClick={() => handleGraphChange('line')}>Line Graph</button>
//                 <button className={`ml-2 ${selectedGraph === 'bar' ? 'bg-black text-white rounded-md p-1' : 'bg-gray-300 rounded-md p-1'}`} onClick={() => handleGraphChange('bar')}>Pie Graph</button>
//               </div>

//               {/* Render Selected Graph */}
//               {renderGraph()}
//             </div>
//           </div>

//         </div>




//         <div className=' mt-14 grid justify-center'>
//           {isExpenseHigh && (
//             <p className='text-red-600 font-semibold text-center mb-7'>
//               Warning: Your expenses are higher than your income. Please control your expenses.
      
//             </p>

//           )}
//           <Analytics allTransactions={allTransactions} />
//         </div>
//       </div>





//     </>
//   );
// };

// export default Dashboard;

import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'antd';
import moment from 'moment';
import { useSpring, animated } from 'react-spring';
import Analytics from './Analytics';
import ReactApexChart from 'react-apexcharts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = ({ thisYearExpense }) => {
  const [todayExpense, setTodayExpense] = useState(0);
  const [last7DaysExpense, setLast7DaysExpense] = useState(0);
  const [last30DaysExpense, setLast30DaysExpense] = useState(0);
  const [currentYearExpense, setCurrentYearExpense] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);
  const [selectedGraph, setSelectedGraph] = useState('line');

  const animatedProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // Fetch expenses for today, last 7 days, last 30 days, and this year
  const fetchExpenses = async () => {
    try {
      const today = moment().format('YYYY-MM-DD');
      const last7Days = moment().subtract(7, 'days').format('YYYY-MM-DD');
      const last30Days = moment().subtract(30, 'days').format('YYYY-MM-DD');
      const thisYearStart = moment().startOf('year').format('YYYY-MM-DD');

      const response = await fetch('https://server-yash.onrender.com/get-transaction');

      if (response.ok) {
        const data = await response.json();

        const todayExpenses = data.filter(expense => moment(expense.date).isSame(today, 'day') && expense.type === 'Expense');
        const last7DaysExpenses = data.filter(expense => moment(expense.date).isAfter(last7Days) && expense.type === 'Expense');
        const last30DaysExpenses = data.filter(expense => moment(expense.date).isAfter(last30Days) && expense.type === 'Expense');
        const thisYearExpenses = data.filter(expense => moment(expense.date).isAfter(thisYearStart) && expense.type === 'Expense');

        setTodayExpense(todayExpenses.reduce((total, expense) => total + expense.amount, 0));
        setLast7DaysExpense(last7DaysExpenses.reduce((total, expense) => total + expense.amount, 0));
        setLast30DaysExpense(last30DaysExpenses.reduce((total, expense) => total + expense.amount, 0));
        setCurrentYearExpense(thisYearExpenses.reduce((total, expense) => total + expense.amount, 0));
      } else {
        console.error('Failed to fetch expenses');
      }
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const getAllTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      const res = await fetch('https://server-yash.onrender.com/get-transaction', {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }, { userid: user._id })
      const data = await res.json();
      console.log(data)
      setAllTransactions(data)

      if (res.status === 200) {
        console.log("successful")
      } else {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log("err " + err)
    }
  }

  useEffect(() => {
    getAllTransactions();
    fetchExpenses();
  }, []); // Fetch expenses on component mount

  const filteredIncomeData = allTransactions
    .filter(transaction => moment(transaction.date).isAfter(currentYearExpense) && transaction.type === 'Income')
    .reduce((total, transaction) => total + transaction.amount, 0);

  const chartOptions = {
    labels: ['Expenses', 'Income'],
    colors: ['#f60d0d', '#16c152'], // Colors for Expenses and Income
  };

  const lineChartOptions = {
    labels: allTransactions.map(transaction => moment(transaction.date).format('MMM DD')),
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
    },
    markers: {
      size: 5,
    },
    xaxis: {
      type: 'category',
    },
  };

  const isExpenseHigh = currentYearExpense > filteredIncomeData;

  const chartData = isExpenseHigh ? [currentYearExpense, 0] : [currentYearExpense, filteredIncomeData];

  const lineChartData = allTransactions.map(transaction => ({
    date: moment(transaction.date).format('MMM DD'),
    expense: transaction.type === 'Expense' ? transaction.amount : 0,
    income: transaction.type === 'Income' ? transaction.amount : 0,
  }));

  const handleGraphChange = (graphType) => {
    setSelectedGraph(graphType);
  };

  const expenseSpend = () => {
    toast.warn("Control your expenses.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    })
  }

  const renderGraph = () => {
    switch (selectedGraph) {
      case 'bar':
        if (isExpenseHigh) {
          expenseSpend(); // Call the function when the expense is high
        }
        return (
          <ReactApexChart options={chartOptions} series={chartData} type='pie' height={350} />
        );
      case 'line':
      default:
        return (
          <ReactApexChart options={lineChartOptions} series={[{ name: 'Expense', data: lineChartData.map(item => item.expense) }, { name: 'Income', data: lineChartData.map(item => item.income) }]} type='line' height={350} />
        );
    }
  };

  return (
    <animated.div style={animatedProps}>
      <div className='container mx-auto p-10'>
        <div className='lg:pl-72 lg:pr-72 pl-0 pr-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          <Card title="Today's Expense" className='bg-gray-100 hover:scale-105 hover:ease-in hover:bg-gray-200 rounded-md' bordered={false}>
            <p className='text-lg font-semibold mb-2'>Total: ₹{todayExpense}</p>
          </Card>
          <Card title='Last 7 days Expense' className='bg-gray-100 hover:scale-105 hover:ease-in hover:bg-gray-200  rounded-md' bordered={false}>
            <p className='text-lg font-semibold mb-2'>Total: ₹{last7DaysExpense}</p>
          </Card>
        </div>

        <div className='lg:pl-72 lg:pr-72 pl-0 pr-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4'>
          <Card title='Last 30 days Expense' className='bg-gray-100 hover:scale-105 hover:ease-in hover:bg-gray-200 rounded-md' bordered={false}>
            <p className='text-lg font-semibold mb-2'>Total: ₹{last30DaysExpense}</p>
          </Card>
          <Card title='This Year Expense' className='bg-gray-100 hover:scale-105 hover:ease-in hover:bg-gray-200 rounded-md' bordered={false}>
            <p className='text-lg font-semibold mb-2'>Total: ₹{currentYearExpense}</p>
          </Card>
        </div>
        <div className='container lg:pl-52 lg:pr-44 pl-0 pr-0 mt-14'>
          <div className=' '>
            <div className=' '>
              {/* Graph Options */}
              <div className='flex justify-center mb-4'>
                <button className={`mr-2 ${selectedGraph === 'line' ? 'bg-black text-white rounded-md p-1 pl-2 pr-2' : 'bg-gray-300 rounded-md p-1 pl-2 pr-2'}`} onClick={() => handleGraphChange('line')}>Line Graph</button>
                <button className={`ml-2 ${selectedGraph === 'bar' ? 'bg-black text-white rounded-md p-1 pl-2 pr-2' : 'bg-gray-300 rounded-md p-1 pl-2 pr-2'}`} onClick={() => handleGraphChange('bar')}>Pie Graph</button>
              </div>

              {/* Render Selected Graph */}
              {renderGraph()}
            </div>
          </div>
        </div>

        <div className=' mt-14 grid justify-center'>
          {isExpenseHigh && (
            <p className='text-red-600 font-semibold text-center mb-7'>
              Warning: Your expenses are higher than your income. Please control your expenses.
            </p>
          )}
          <Analytics allTransactions={allTransactions} />
        </div>
      </div>
    </animated.div>
  );
};

export default Dashboard;
