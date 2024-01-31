import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; 
import { useParams } from 'react-router-dom';

// const List = () => {
//   const rows = [
//     {
//       id: 1143155,
//       product: "Acer Nitro 5",
//       customer: "John Smith",
//       date: "1 March",
//       amount: 785,
//       method: "Cash on Delivery",
//       status: "Approved",
//     },
   
//   ];
const List = () => {
  const [rows, setRows] = useState([]);
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "transactions"));
        const transactionData = [];
        querySnapshot.forEach((doc) => {
          const transaction = { id: doc.id, ...doc.data() };
          if (transaction.userId === userId) { // Assuming each transaction has a 'userId' field
            transactionData.push(transaction);
          }
        });
        setRows(transactionData);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
  
    if (userId) {
      fetchTransactions();
    }
  }, [userId]);
  
  

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
  {rows.map((row) => (
    <TableRow key={row.id}>
      <TableCell className="tableCell">{row.id}</TableCell>
      <TableCell className="tableCell">{row.BreadType}</TableCell>
      <TableCell className="tableCell">{/* Customer name is not visible in your screenshot */}</TableCell>
      <TableCell className="tableCell">{row.timestamp?.toDate().toLocaleDateString()}</TableCell>
      <TableCell className="tableCell">{row.purchaseQuantity}</TableCell>
      <TableCell className="tableCell">{/* Payment Method is not visible in your screenshot */}</TableCell>
      <TableCell className="tableCell">{row.Status}</TableCell>
    </TableRow>
  ))}
</TableBody>

      </Table>
    </TableContainer>
  );
};

export default List;