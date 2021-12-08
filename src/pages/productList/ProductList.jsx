import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import './productList.css';

const ProductList = () => {
   const [data, setData] = useState(productRows);

   const handleDelete = (id) => {
      const newData = data.filter((item) => item.id !== id);
      setData(newData);
   };

   const columns = [
      { field: 'id', headerName: 'ID', width: 100 },
      {
         field: 'product',
         headerName: 'Product',
         width: 200,
         renderCell: (params) => {
            return (
               <div className="productListItem">
                  <img className="productListImg" src={params.row.img} alt="" />
                  {params.row.name}
               </div>
            );
         },
      },
      {
         field: 'stock',
         headerName: 'Stock',
         width: 200,
         editable: true,
      },
      {
         field: 'status',
         headerName: 'Status',
         width: 120,
      },
      {
         field: 'price',
         headerName: 'Price',
         width: 160,
      },
      {
         field: 'action',
         headerName: 'Action',
         width: 150,
         renderCell: (params) => {
            return (
               <React.Fragment>
                  <Link to={'/product/' + params.row.id}>
                     <button className="productListEdit">Edit</button>
                  </Link>
                  <DeleteOutline
                     className="productListDelete"
                     onClick={() => handleDelete(params.row.id)}
                  />
               </React.Fragment>
            );
         },
      },
   ];

   return (
      <div className="productList">
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

export default ProductList;
