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
  Typography,
  Icon
} from '@mui/material';
import AddDetailsModal from './AddDetailsModal';
import { Chat as ChatIcon } from '@mui/icons-material'; 
const data = [
  { name: 'high potential', email: 'ladmin@gmail.com',program_details:'Revenue',payment_link:'https/test/link',expiring_date:'2023-4-23',mobile_no: '9087675654', created: '2023-5-12' },
  { name: 'Jane Smith', email: 'admin@gmail.com',program_details:'basic stack',payment_link:'https/test/link',expiring_date:'2023-4-23',mobile_no: '9087675654', created: '2023-5-12'},
  { name: 'Bob Johnson', email: 'admin@gmail.com',program_details:'slim smart 30',payment_link:'https/test/link',expiring_date:'2023-4-23',mobile_no: '9087675654', created: '2023-5-12' },
  { name: 'John Doe', email: 'admin@gmail.com',program_details:'Revenue',payment_link:'https/test/link',expiring_date:'2023-4-23',mobile_no: '9087675654', created: '2023-5-12'},
  { name: 'Jane Smith', email: 'admin@gmail.com', program_details:'Revenue',payment_link:'https/test/link',expiring_date:'2023-4-23',mobile_no: '9087675654', created: '2023-5-12'},
  { name: 'Bob Johnson', email: 'admin@gmail.com', program_details:'Revenue',payment_link:'https/test/link',expiring_date:'2023-4-23',mobile_no: '9087675654', created: '2023-5-12'},
  // Add more data as needed
];

const columns = [
  { id: 'name', label: 'Lead Details' },
  { id: 'program_details', label: 'Program Details' },
  { id: 'payment_link', label: 'Payment Link' },
  { id: 'expiring_date', label: 'Expiring Date' },
  { id: 'created', label: 'Created' },
  { id: 'action', label: 'Action' },
];

const LinksExpiring = () => {
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
       Links Expiring Leads
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
                        { column.id === 'action' ? (
                           <Button variant="contained" color="primary" >
                           <Icon>
                             <ChatIcon />
                           </Icon>
                           
                         </Button>
                        ) : column.id === 'name' ? (
                          <div>
                            <b>Name:</b> {row.name}
                            <br />
                            <b>Email:</b> {row.email}
                            <br />
                            <b>Mobile No :</b> {row.mobile_no}
                            <br />
                          </div>
                        ) :  (
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

export default LinksExpiring;
