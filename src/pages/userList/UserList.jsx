import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import './userList.css';

const UserList = () => {
   const [data, setData] = useState(userRows);

   const handleDelete = (id) => {
      const newData = data.filter((item) => item.id !== id);
      setData(newData);
   };

   const columns = [
      { field: 'id', headerName: 'ID', width: 100 },
      {
         field: 'user',
         headerName: 'User',
         width: 200,
         renderCell: (params) => {
            return (
               <div className="userListUser">
                  <img className="userListImg" src={params.row.avatar} alt="" />
                  {params.row.username}
               </div>
            );
         },
      },
      {
         field: 'email',
         headerName: 'Email',
         width: 200,
         editable: true,
      },
      {
         field: 'status',
         headerName: 'Status',
         width: 120,
      },
      {
         field: 'transaction',
         headerName: 'Transaction Vol',
         width: 160,
      },
      {
         field: 'action',
         headerName: 'Action',
         width: 150,
         renderCell: (params) => {
            return (
               <React.Fragment>
                  <Link to={'/user/' + params.row.id}>
                     <button className="userListEdit">Edit</button>
                  </Link>
                  <DeleteOutline
                     className="userListDelete"
                     onClick={() => handleDelete(params.row.id)}
                  />
               </React.Fragment>
            );
         },
      },
   ];

   return (
      <div className="userList">
         <DataGrid
            rows={data}
            columns={columns}
            pageSize={10}
            checkboxSelection
            disableSelectionOnClick
         />
      </div>
   );
};

export default UserList;
