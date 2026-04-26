import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", margin: 0 }}>

      {/* Navbar */}
      <div style={{
        position: "sticky",
        top: 0,
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.8)",
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 20px",
        fontSize: "14px",
        borderBottom: "1px solid #eee"
      }}>
        <strong>VantixLabs</strong>
        <div style={{ display: "flex", gap: "15px" }}>
          <span>Home</span>
          <span>Products</span>
          <span>Contact</span>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{
        textAlign: "center",
        padding: "80px 20px"
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontSize: "clamp(32px, 6vw, 64px)",
            fontWeight: "600",
            marginBottom: "20px"
          }}
        >
          Think Different.
        </motion.h1>

        <p style={{
          fontSize: "clamp(16px, 3vw, 22px)",
          color: "#555",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          VantixLabs is building the future of AI and gaming experiences.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button style={{
            padding: "12px 24px",
            borderRadius: "999px",
            border: "none",
            background: "#000",
            color: "#fff",
            marginRight: "10px",
            cursor: "pointer"
          }}>
            Learn more
          </button>

          <button style={{
            padding: "12px 24px",
            borderRadius: "999px",
            border: "1px solid #000",
            background: "transparent",
            cursor: "pointer"
          }}>
            Buy
          </button>
        </div>
      </div>

      {/* Feature Section */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "20px",
        padding: "20px"
      }}>
        
        {[
          {
            title: "AI Powered",
            desc: "Smarter systems for better gameplay."
          },
          {
            title: "Global Reach",
            desc: "Connect players worldwide."
          },
          {
            title: "Next Gen",
            desc: "Experience the future today."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            style={{
              background: "#f5f5f7",
              padding: "30px",
              borderRadius: "20px",
              textAlign: "center"
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>
            <p style={{ color: "#666" }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Big Image Section */}
      <div style={{
        marginTop: "40px",
        padding: "40px 20px",
        textAlign: "center"
      }}>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420"
          style={{
            width: "100%",
            maxWidth: "900px",
            borderRadius: "20px"
          }}
        />
      </div>

      {/* Footer */}
      <div style={{
        textAlign: "center",
        padding: "30px",
        fontSize: "12px",
        color: "#777"
      }}>
        © 2026 VantixLabs. All rights reserved.
      </div>

    </div>
  );
}
