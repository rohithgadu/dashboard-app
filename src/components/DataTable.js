import * as React from 'react';
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {AppContext} from "../App";
import {useContext, useState} from "react";


const DataTable = () => {

    const {setXValues, setYValues, columns, rows} = useContext(AppContext)

    const rowIds = rows.map((row) => row.id)
    const [rowSelectionModel, setRowSelectionModel] = useState(rowIds)

    const onRowsSelectionHandler = (ids) => {
        const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
        setXValues(selectedRowsData.map((selectedRow) => selectedRow.age))
        setYValues(selectedRowsData.map((selectedRow) => selectedRow.firstName))
    };

    return (
        <Box sx={{height: 400, width: 500}}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                onRowSelectionModelChange={(ids) => {
                    setRowSelectionModel(ids)
                    onRowsSelectionHandler(ids)
                }
                }
                rowSelectionModel={rowSelectionModel}
            />
        </Box>
    );
}

export default DataTable