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
  Button,
  ListItemText,
  Chip,
  Typography,
} from '@mui/material';
import AddDetailsModal from './AddDetailsModal';

const data = [
  { name: 'high potential', email: 'ladmin@gmail.com', age:'20',gender:'male',health_issue:'smoking,drinking,alcohol',HS_taken:'1 days ago',health_category:'obese',medical_issue:'low immunity',body_type:'normal',mobile_no: '9087675654', created: '2023-5-12', source: 'web' },
  { name: 'Jane Smith', email: 'admin@gmail.com', age:'20',gender:'femmale',health_issue:'smoking,drinking,alcohol',HS_taken:'1 days ago',health_category:'obese',medical_issue:'low immunity',body_type:'normal',mobile_no: '9087675654', created: '2023-5-12', source: 'app' },
  { name: 'Bob Johnson', email: 'admin@gmail.com',age:'20', gender:'male',health_issue:'smoking,drinking,alcohol',HS_taken:'1 days ago',health_category:'obese',medical_issue:'low immunity',body_type:'normal',mobile_no: '9087675654', created: '2023-5-12', source: 'web' },
  { name: 'John Doe', email: 'admin@gmail.com',age:'20' ,gender:'femmale',health_issue:'smoking,drinking,alcohol',HS_taken:'1 days ago',health_category:'obese',medical_issue:'low immunity',body_type:'normal',mobile_no: '9087675654', created: '2023-5-12', source: 'app' },
  { name: 'Jane Smith', email: 'admin@gmail.com', age:'20',gender:'femmale',health_issue:'smoking,drinking,alcohol',HS_taken:'1 days ago',health_category:'obese',medical_issue:'low immunity',body_type:'normal',mobile_no: '9087675654', created: '2023-5-12', source: 'web' },
  { name: 'Bob Johnson', email: 'admin@gmail.com', age:'20',gender:'male',health_issue:'smoking,drinking,alcohol',HS_taken:'1 days ago',health_category:'obese',medical_issue:'low immunity',body_type:'normal',mobile_no: '9087675654', created: '2023-5-12', source: 'app' },
  // Add more data as needed
];

const columns = [
  { id: 'name', label: 'Lead Details' },
  { id: 'health_issue', label: 'Health Issue & BMI' },
  { id: 'mobile_no', label: 'Mobile No' },
  { id: 'created', label: 'Created' },
  { id: 'source', label: 'Source' },
  { id: 'action', label: 'Action' },
];

const PrimeSegment = () => {
  const [pemail, setPemail] = useState(0);
  const [rowsPerPemail, setRowsPerPemail] = useState(5);
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);
  const [openModal, setOpenModal] = useState(false);

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
    setSelectedRow(data[index]);
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

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRow(null);
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
       Prime Segment Lead
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
                    {columns.map((column) => (
                      <TableCell key={column.id}>
                        {column.id === 'source' ? (
                          <ListItemText
                            primary={
                              <Chip size="medium" label={row[column.id]}  />
                            }
                          />
                        ) : column.id === 'action' ? (
                          <Button variant="contained" color="primary" onClick={handleOpenModal}>
                            Add Details
                          </Button>
                        ) : column.id === 'name' ? (
                          <div>
                            <b>Name:</b> {row.name}
                            <br />
                            <b>Email:</b> {row.email}
                            <br />
                            <b>Age:</b> {row.age}
                            <br />
                            <b>Gender:</b> {row.gender}
                            <br />
                          </div>
                        ) : column.id === 'health_issue' ? (
                          <div>
                            <b>HS Taken:</b> {row.HS_taken}
                            <br />
                            <b>Health Issue:</b> {row.health_issue}
                            <br />
                            <b>Body Type:</b> {row.body_type}
                            <br />
                            <b>Health Category:</b> {row.health_category}
                            <br />
                            <b>Medical Issue:</b> {row.medical_issue}
                            <br />
                          </div>
                        ) : (
                          row[column.id]
                        )}
                      </TableCell>
                    ))}
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
      {selectedRow && (
        <AddDetailsModal
          open={openModal}
          handleClose={handleCloseModal}
          rowData={selectedRow}
        />
      )}
    </Paper>
  );
};

export default PrimeSegment;
