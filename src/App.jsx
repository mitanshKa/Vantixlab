import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={{padding: "40px", fontFamily: "sans-serif"}}>
      <motion.h1 
        initial={{opacity:0, y:20}} 
        animate={{opacity:1, y:0}}
      >
        🚀 VantixLabs Live Website
      </motion.h1>
      <p>Your deployment is working perfectly!</p>
    </div>
  );
}
