export const userColumns = [
  {
    field: "profilePicture",
    headerName: "Profile Picture",
    width: 120,
    renderCell: (params) => {
      return (
        <img
          src={params.value}
          alt="Profile"
          style={{ width: 50, height: 50, borderRadius: "50%" }}
        />
      );
    },
  },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
      
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
    {
    field: "role",
    headerName: "Role",
    width: 100,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
