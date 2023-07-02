import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface ITableProps {
  columns: GridColDef[];
  rows: {}[];
}

const Table = ({ columns, rows }: ITableProps) => {
  return (
    <Paper elevation={2}>
      <Box sx={{ height: 400, width: "100%", marginTop: 5 }}>
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
          disableRowSelectionOnClick
        />
      </Box>
    </Paper>
  );
};

export default Table;
