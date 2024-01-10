import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  TableSortLabel,
  TextField,
  TablePagination,
  Typography,
  Button,
  MenuItem,
} from '@mui/material';

const data = [
  { name: 'high potential', email: 'ladmin@gmail.com', mobile_no: '9087675654', call_date: '2023-5-12', time_slot: '12:00 PM to 12:15 PM', created: '2023-5-12' },
  { name: 'Jane Smith', email: 'admin@gmail.com', call_date: '2023-5-12', mobile_no: '9087675654', created: '2023-5-12' },
  { name: 'Bob Johnson', email: 'admin@gmail.com', call_date: '2023-5-12', mobile_no: '9087675654', created: '2023-5-12' },
  { name: 'John Doe', email: 'admin@gmail.com', call_date: '2023-5-12', mobile_no: '9087675654', created: '2023-5-12' },
  { name: 'Jane Smith', email: 'admin@gmail.com', call_date: '2023-5-12', mobile_no: '9087675654', created: '2023-5-12' },
  { name: 'Bob Johnson', email: 'admin@gmail.com', call_date: '2023-5-12', mobile_no: '9087675654', created: '2023-5-12' },
  // Add more data as needed
];

const columns = [
  { id: 'name', label: 'Name' },
  { id: 'email', label: 'Email' },
  { id: 'mobile_no', label: 'Mobile No' },
  { id: 'call_date', label: 'Call Date' },
  { id: 'time_slot', label: 'Time Slot' },
  { id: 'created', label: 'Created' },
  { id: 'action', label: 'Action' },
];

const ConsultationMisses = () => {
  const [pemail, setPemail] = useState(0);
  const [rowsPerPemail, setRowsPerPemail] = useState(5);
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState('');

  const handleChangePemail = (_, newPemail) => {
    setPemail(newPemail);
  };

  const handleChangeRowsPerPemail = (event) => {
    setRowsPerPemail(parseInt(event.target.value, 10));
    setPemail(0);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n, index) => index);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_, index) => {
    const selectedIndex = selected.indexOf(index);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, index);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (index) => selected.indexOf(index) !== -1;

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleUpdateStatus = () => {
    // Implement the logic to update the status here
    console.log('Updating status:', status, 'with comment:', comment);
  };

  return (
    <Paper style={{ margin: '0px', padding: '15px', position: 'relative' }}>
      <Typography
        variant="h5"
        component="div"
        style={{
          position: 'absolute',
          fontSize: '20px',
          top: '10px',
          right: '10px',
          marginBottom: '10px',
          padding: '10px',
          color: '#259f70',
        }}
      >
        Consultation Misses Lead
      </Typography>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '5px', padding: '0px' }}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < data.length}
                  checked={selected.length === data.length}
                  onChange={handleSelectAllClick}
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  <TableSortLabel>
                    <b>{column.label}</b>
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter((row) =>
                Object.values(row)
                  .join(' ')
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .slice(pemail * rowsPerPemail, pemail * rowsPerPemail + rowsPerPemail)
              .map((row, index) => {
                const isItemSelected = isSelected(index);

                return (
                  <TableRow
                    key={index}
                    selected={isItemSelected}
                    onClick={(event) => handleClick(event, index)}
                  >
                    <TableCell>
                      <Checkbox checked={isItemSelected} />
                    </TableCell>
                    {Object.values(row).map((value, columnIndex) => (
                      <TableCell key={columnIndex}>
                        {columnIndex === columns.length - 1 && typeof value === 'string'
                          ? new Date(value).toLocaleDateString()
                          : value}
                      </TableCell>
                    ))}
                    {/* Action column with Update Status button, text box, and dropdown */}
                    <TableCell>
                      <TextField
                        label="Comment"
                        value={comment}
                        onChange={handleCommentChange}
                        size="small"
                        variant="outlined"
                      />
                      <br />
                      <TextField
                        select
                        label="Status"
                        value={status}
                        onChange={handleStatusChange}
                        size="small"
                        variant="outlined"
                        style={{ marginTop: '8px' }}
                      >
                        <MenuItem value="done">Done</MenuItem>
                        <MenuItem value="pending">Pending</MenuItem>
                      </TextField>
                      <br />
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={handleUpdateStatus}
                        style={{ marginTop: '8px' }}
                      >
                        Update Status
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPemail}
        page={pemail}
        onPageChange={handleChangePemail}
        onRowsPerPageChange={handleChangeRowsPerPemail}
        style={{ marginTop: '16px' }}
      />
    </Paper>
  );
};

export default ConsultationMisses;
