import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const NewEstate = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const [numberOfRooms, setNumberOfRooms] = useState('');
const [similarRoomsAvailable, setSimilarRoomsAvailable] = useState('');
const [Name, setName] = useState('');
const [Price, setPrice] = useState('');
const [description, setDescription] = useState('');
const [quantity, setquantity] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, `estates/${name}`); // Change the folder to 'estates'

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db ,"Estate"), {
        Name,
        Price,
        description,
        quantity,
        timeStamp: serverTimestamp(),
      });  
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
              <div className="formInput">
    <label>Name</label>
    <input 
      type="text" 
      placeholder="text"
      value={Name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>
    <label>price</label>
    <input 
      type="number" 
      placeholder="rooms "
      value={Price}
      onChange={(e) => setPrice(Number(e.target.value))}
    />
  </div>
  <div className="formInput">
    <label>description</label>
    <input 
      type="text" 
      placeholder="similar"
      value={description}
      onChange={(e) => setDescription((e.target.value))}
    />
  </div>
  <div className="formInput">
    <label>quantity</label>
    <input 
      type="number" 
      placeholder="similar"
      value={quantity}
      onChange={(e) => setquantity(Number(e.target.value))}
    />
  </div>
 
 
 
             
              <button disabled={per !== null && per < 100} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEstate;