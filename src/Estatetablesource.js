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
    field: "numberOfRooms",
    headerName: "Number of rooms",
    width: 100,
  },
  {
    field: "similarRoomsAvailable",
    headerName: "Availables ",
    width: 100,
  },
  {
    field: "Price",
    headerName: "Price",
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
