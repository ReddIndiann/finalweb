export const userColumns = [

  { field: "user", headerName: "ID", width: 70 },
  {
    field: "id",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },

  {
    field: "Name",
    headerName: "Name",
    width: 100,
  },
  {
    field: "description",
    headerName: "description",
    width: 100,
  },
  {
    field: "Price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "quantity",
    headerName: "quantity",
    width: 100,
  },
  {
    field: "Status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
    return (  
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
