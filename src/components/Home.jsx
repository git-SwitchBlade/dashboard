import "./home.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Featured = () => {
    return(
        <div className="featured">
            <div className="featureditems">
                <span className="featuredtitle">1 Month</span>
                <div className="featuredprob">
                    <span className="prob">86%</span>
                </div>
                <span className="featuredsub">1 month time period</span>
            </div>
            <div className="featureditems">
                <span className="featuredtitle">3 Month</span>
                <div className="featuredprob">
                    <span className="prob">99%</span>
                </div>
                <span className="featuredsub">3 month time period</span>
            </div>
            <div className="featureditems">
                <span className="featuredtitle">6 Month</span>
                <div className="featuredprob">
                    <span className="prob">45%</span>
                </div>
                <span className="featuredsub">6 month time period</span>
            </div>
        </div>
    )
}

const Chart = () => {
    const data = [
        {
          name: 'Page A',
          "Active User": 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          "Active User": 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          "Active User": 2000,
          pv: 9800,
          amt: 2290,
        }
      ];
    return(
        <div className="chart">
           <h3 className="charttitle">
            Analytics
            </h3> 
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
                    <Tooltip />
                </LineChart>

            </ResponsiveContainer>
        </div>
    )
}


function Home() {
  return (
    <div className='home'>
      <Featured />
      <Chart />
    </div>
  )
}

export default Home
