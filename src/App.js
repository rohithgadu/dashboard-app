import './App.css';
import DataTable from "./components/DataTable";
import BarChart from "./components/BarChart";
import {useState} from "react";
import {createContext} from "react";

export const AppContext = createContext();

function App() {

    const columns = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },
    ];

    const rows = [
        {id: 1, firstName: 'Jon', age: 35},
        {id: 2, firstName: 'Cersei', age: 42},
        {id: 3, firstName: 'Jaime', age: 45},
        {id: 4, firstName: 'Arya', age: 16},
        {id: 5, firstName: 'Daenerys', age: 56},
        {id: 6, firstName: 'Rob', age: 40},
        {id: 7, firstName: 'Ferrara', age: 44},
        {id: 8, firstName: 'Rossini', age: 36},
        {id: 9, firstName: 'Harvey', age: 65},
        {id: 10, firstName: 'Sansa', age: 22}
    ];

    const initialXValues = rows.map((row) => row.age)
    const initialYValues = rows.map((row) => row.firstName)

    const [xValues, setXValues] = useState(initialXValues)
    const [yValues, setYValues] = useState(initialYValues)


    return (
        <div className="App">
            <h1>
                <img src="https://www.kaiburr.com/wp-content/uploads/2018/08/kaiburrLogoText.png" alt=""
                     className="cp-logo" width={450}/>
            </h1>
            <AppContext.Provider value={{xValues, setXValues, yValues, setYValues, columns, rows}}>
                <div className="split left">
                    <div className="centered">
                        <DataTable/>
                    </div>
                </div>
                <div className="split right">
                    <div className="centered">
                        <BarChart/>
                    </div>
                </div>
            </AppContext.Provider>
        </div>
    )
}


export default App;
