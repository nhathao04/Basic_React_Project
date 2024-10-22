
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from '../../config/firebaseConfig'; // Điều chỉnh đường dẫn nếu cần
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const navigate = useNavigate();

//   const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         console.log("Đăng nhập thành công:", result.user);
//         navigate('/dashboard'); // Chuyển hướng đến trang dashboard sau khi đăng nhập
//       }).catch((error) => {
//         console.error("Lỗi đăng nhập:", error);
//       });
//   }

//   return (
//     <div>
//       <h2>Đăng nhập</h2>
//       <button onClick={signInWithGoogle}>Đăng nhập bằng Google</button>
//     </div>
//   );
// }

// export default Login;