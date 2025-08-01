import { useEffect, useRef, useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCalendar, faClock, faUser, faCompass, faMagnifyingGlass, faCamera } from '@fortawesome/free-solid-svg-icons'
import ImagenesTerr from "./imagenesterr.jsx";

const Programa = () => {
    const [horaActual, setHoraActual] = useState('');
    const [numeroFechaActual, setNumeroFechaActual] = useState(null);
    const [predicacionHoy, setPredicacionHoy] = useState(null);


    const [cargando, setCargando] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const tablaRef = useRef(null);
    const inputRef = useRef(null);

    const [imagenterr, setImagenesterr] = useState(null);
    const imagenDelTerr = {
      "T:17 VILLA EL SOL.": "/requi-programa-pred/img/17.png",
      "T:46 LAS ROSAS PARTE B.": "/requi-programa-pred/img/46.png",
      "T:37 LA CRUZ PARTE A." : "/requi-programa-pred/img/37.png",
      "T:30 EL ESFUERZO PARTE B." : "/requi-programa-pred/img/30.png",
      "T:58 SAN RAFAEL" : "/requi-programa-pred/img/58.png",
      "T:3 EL VATICANO PARTE B." : "/requi-programa-pred/img/3.png",
      "T:14 CHUMACO." : "/requi-programa-pred/img/14.png",
      "T:49 LECAROS." : "/requi-programa-pred/img/49.png",
      "T:51 VILLA EL ABRA." : "/requi-programa-pred/img/51.png",
      "T:35 LOS PERALES PARTE B." : "/requi-programa-pred/img/35.png",
      "T:57 BELLAVISTA" : "/requi-programa-pred/img/57.png",
      "T:22 CENTRO C (SHELL)." : "/requi-programa-pred/img/22.png",
      "T:11 LOS CRISTALES" : "/requi-programa-pred/img/11.png",

    };
    //horaaaaaaaa
    useEffect(() =>{
      const obtenerHora = () => {
        const fecha = new Date();
        const hora = fecha.toLocaleDateString("es-CL", {timeZone: "America/Santiago", hour : "2-digit", minute: "2-digit", hour12: false});
        setHoraActual(hora);

        const dia = fecha.getDate();
        setNumeroFechaActual(dia);

        const hoy = programa.filter(item => item.fecha === dia);
        setPredicacionHoy(hoy);

        setCargando(false);
      };

      obtenerHora();
      const intervalo = setInterval(obtenerHora, 60000);
      return () => clearInterval(intervalo);
    }, [])





    const handleClickTerritorio = (territorioTexto) => {
      const ruta = imagenDelTerr[territorioTexto];
      if (ruta) {
        setImagenesterr(ruta);
      } else {
        console.warn ("No hay una imagen asignada para este territorio")
      }
    };



    useEffect(() => {
        const handleScroll = () => {
          const table = document.getElementById("tabla-scrollable");
          if (table) {
            const offset = table.scrollTop;
            setScrolled(offset > 0); //reconocer cuando baja la tablaaaa
          }
        };

      const table = document.getElementById("tabla-scrollable");
      if (table) {
        table.addEventListener("scroll", handleScroll);
      }

      return () => {
        if (table) {
          table.removeEventListener("scroll", handleScroll);
        }
      };
    }, []);



const programa = [
  { dia: "Viernes", fecha: 1, hora: "10:00", lugar: "SALÓN DEL REINO", territorio: "T:17 VILLA EL SOL.", encargado: "IGNACIO J." },
  
  { dia: "Sábado", fecha: 2, hora: "10:00", lugar: "GRUPO 1: F. VERGARA R.", territorio: "T:46 LAS ROSAS PARTE B.", encargado: "BENJAMIN V." },
  { dia: "Sábado", fecha: 2, hora: "10:00", lugar: "GRUPO 2: F. MENDEZ O.", territorio: "T:37 LA CRUZ PARTE A.", encargado: "CHRISTIAN M." },
  { dia: "Sábado", fecha: 2, hora: "10:00", lugar: "GRUPO 3: F. BEYZAGA T.", territorio: "T:30 EL ESFUERZO PARTE B.", encargado: "PATRICIO B." },
  { dia: "Sábado", fecha: 2, hora: "10:00", lugar: "GRUPO 4: F. NORAMBUENA A.", territorio: "T:58 SAN RAFAEL", encargado: "JOAQUIN N." },
  { dia: "Sábado", fecha: 2, hora: "10:00", lugar: "GRUPO 5: F. LOYOLA", territorio: "T:3 EL VATICANO PARTE B.", encargado: "IGNACIO J." },
  { dia: "Sábado", fecha: 2, hora: "10:00", lugar: "GRUPO 6: F. ORELLANA", territorio: "T:14 CHUMACO.", encargado: "NESTOR O." },
  
  { dia: "Domingo", fecha: 3, hora: "10:00", lugar: "GRUPO 1: F. NORAMBUENA V.", territorio: "T:49 LECAROS.", encargado: "EDUARDO V." },
  { dia: "Domingo", fecha: 3, hora: "10:00", lugar: "GRUPO 2: F. MENDEZ O.", territorio: "T:51 VILLA EL ABRA.", encargado: "MARCELO V." },
  { dia: "Domingo", fecha: 3, hora: "10:00", lugar: "GRUPO 3: F. BEYZAGA T.", territorio: "T:35 LOS PERALES PARTE B.", encargado: "GONZALO D." },
  { dia: "Domingo", fecha: 3, hora: "10:00", lugar: "GRUPO 4: H. FILOMENA", territorio: "T:57 BELLAVISTA", encargado: "BASTIAN A." },
  { dia: "Domingo", fecha: 3, hora: "10:00", lugar: "GRUPO 5: F. RODRIGUEZ", territorio: "T:22 CENTRO C (SHELL).", encargado: "DIEGO R." },
  { dia: "Domingo", fecha: 3, hora: "10:00", lugar: "GRUPO 6: F. ORTIZ", territorio: "T:11 LOS CRISTALES", encargado: "CAMILO O." },
  
  { dia: "Lunes", fecha: 4, hora: "10:00", lugar: "SALÓN DEL REINO", territorio: "T:3 EL VATICANO PARTE A.", encargado: "MARCELO J." },
  { dia: "Lunes", fecha: 4, hora: "16:00", lugar: "SALÓN DEL REINO", territorio: "T:16 PARAGUAY H.", encargado: "VICKY J." },
  { dia: "Lunes", fecha: 4, hora: "18:00", lugar: "SALÓN DEL REINO", territorio: "T:16 PARAGUAY", encargado: "MATIAS V." },
  { dia: "Lunes", fecha: 4, hora: "20:00", lugar: "F. DAZA", territorio: "CARTAS PRESENCIAL.", encargado: "GONZALO D." },

  { dia: "Martes", fecha: 5, hora: "10:00", lugar: "F. BEYZAGA T.", territorio: "T:31 EL ESFUERZO PARTE C.", encargado: "PATRICIO B." },
  { dia: "Martes", fecha: 5, hora: "16:00", lugar: "SALÓN DEL REINO", territorio: "T:24 CENTRO A.", encargado: "PATRICIO B." },
  { dia: "Martes", fecha: 5, hora: "18:00", lugar: "H. SILVIA", territorio: "T:20 LOS BOSQUES PARTE B.", encargado: "MATIAS J." },
  { dia: "Martes", fecha: 5, hora: "20:00", lugar: "F. NORAMBUENA A.", territorio: "CARTAS PRESENCIAL.", encargado: "JOAQUIN N." },
  
  { dia: "Miércoles", fecha: 6, hora: "10:00", lugar: "F. VERGARA R.", territorio: "T:44 CAMINO EL ABRA", encargado: "IGNACIO J." },
  { dia: "Miércoles", fecha: 6, hora: "16:00", lugar: "SALÓN DEL REINO", territorio: "T:23 CENTRO B (COMERCIO)", encargado: "H. ANGELICA M." },
  { dia: "Miércoles", fecha: 6, hora: "18:00", lugar: "SALÓN DEL REINO", territorio: "T:13 GIRASOLES / CHUMAQUITO", encargado: "MATIAS V." },
  
  { dia: "Miércoles", fecha: 6, hora: "20:00", lugar: "F. MENDEZ O.", territorio: "CARTAS PRESENCIAL.", encargado: "CHRISTIAN M." },
  
  { dia: "Jueves", fecha: 7, hora: "10:00", lugar: "SALÓN DEL REINO", territorio: "T:10 BUEN SAMARITANO PARTE C.", encargado: "IGNACIO J." },
  
  { dia: "Viernes", fecha: 8, hora: "10:00", lugar: "F. JORQUERA D.", territorio: "T:56 LOS CASTAÑOS", encargado: "MARCELO J." },
  
  { dia: "Sábado", fecha: 9, hora: "10:00", lugar: "GRUPO 1: F. VERGARA P.", territorio: "T:40 VILLA EL ABRA PARTE C.", encargado: "JOAQUIN V." },
  { dia: "Sábado", fecha: 9, hora: "10:00", lugar: "GRUPO 2: F. MENDEZ O.", territorio: "T:52 PADRE HURTADO / JUAN B.", encargado: "CAMILO V." },
  { dia: "Sábado", fecha: 9, hora: "10:00", lugar: "GRUPO 3: H. ZURISADAY J.", territorio: "T:47 VILLA EL ABRA PARTE A.", encargado: "GONZALO D." },
  { dia: "Sábado", fecha: 9, hora: "10:00", lugar: "GRUPO 4: SALÓN DEL REINO", territorio: "T:26 VILLA JARDIN", encargado: "BASTIAN A." },
  { dia: "Sábado", fecha: 9, hora: "10:00", lugar: "GRUPO 5: F. LOYOLA", territorio: "T:8 SANTA LUCILA", encargado: "IGNACIO J." },
  { dia: "Sábado", fecha: 9, hora: "10:00", lugar: "GRUPO 6: SALÓN DEL REINO", territorio: "T:19 LOS BOSQUES PARTE A.", encargado: "MATIAS J." },
  
  { dia: "Domingo", fecha: 10, hora: "10:00", lugar: "SALÓN DEL REINO: RURAL", territorio: "T:59 - T:60 - T:61", encargado: "CAMILO O." },
  
  { dia: "Lunes", fecha: 11, hora: "10:00", lugar: "SALÓN DEL REINO", territorio: "T:9 BUEN SAMARITANO PARTE B.", encargado: "MARCELO J." },
  { dia: "Lunes", fecha: 11, hora: "16:00", lugar: "SALÓN DEL REINO", territorio: "T:15 VALLE CENTRAL H.", encargado: "VICKY J." },
  { dia: "Lunes", fecha: 11, hora: "18:00", lugar: "F. VERGARA R.", territorio: "T:15 VALLE CENTRAL", encargado: "MATIAS V." },
  { dia: "Lunes", fecha: 11, hora: "20:00", lugar: "F. DAZA", territorio: "CARTAS PRESENCIAL.", encargado: "GONZALO D." },
  
  { dia: "Martes", fecha: 12, hora: "10:00", lugar: "F. JORQUERA D.", territorio: "T:55 SANTA AMALIA PARTE B.", encargado: "IGNACIO J." },
  { dia: "Martes", fecha: 12, hora: "16:00", lugar: "H. SILVIA", territorio: "T:21 LOS BOSQUES PARTE C", encargado: "PATRICIO B." },
  { dia: "Martes", fecha: 12, hora: "18:00", lugar: "H. SILVIA", territorio: "T:21 LOS BOSQUES PARTE C", encargado: "MATIAS J." },
  { dia: "Martes", fecha: 12, hora: "20:00", lugar: "F. NORAMBUENA A.", territorio: "CARTAS PRESENCIAL.", encargado: "JOAQUIN N." },
  
  { dia: "Miércoles", fecha: 13, hora: "10:00", lugar: "SALÓN DEL REINO", territorio: "T:53 LOS HERMOGENES", encargado: "MARCELO J." },
  { dia: "Miércoles", fecha: 13, hora: "16:00", lugar: "F. MENDEZ O.", territorio: "T:28 VILLA BONZO", encargado: "H. MARCELA V." },
  { dia: "Miércoles", fecha: 13, hora: "18:00", lugar: "F. MENDEZ O.", territorio: "T:28 VILLA BONZO", encargado: "MATIAS V." },
  { dia: "Miércoles", fecha: 13, hora: "20:00", lugar: "F. NORAMBUENA V.", territorio: "CARTAS PRESENCIAL.", encargado: "MATIAS V." },
  
  { dia: "Jueves", fecha: 14, hora: "10:00", lugar: "SALÓN DEL REINO", territorio: "T:12 SAN IGNACIO", encargado: "MARCELO J." },
  
  { dia: "Viernes", fecha: 15, hora: "10:00", lugar: "SALÓN DEL REINO: ARREGLO.", territorio: "T:4 - T:5", encargado: "CAMILO O." },
];

    const [buscar, setBuscar] = useState("");

    return (
        <div style ={estilos.contenedor}>
          <div
          style = {{
          top: 0,
          zIndex: 1000,
          backgroundColor: "#34495e",
          color: "#fff",
          padding: "10px 20px",
          textAlign: "center",
          borderBottom: "1px solid #333",
          fontSize: "18px",
          fontWeight: "bold",
        }}>
        Predicación - Requínoa, Chile | Fecha actual: {horaActual}
          </div>

          <div style={estilos.cuadrado}>
            <h1 style={estilos.titulo}>Programa de Predicación</h1>
            <h1 style={estilos.subtitulo}>Agosto 1 - 15</h1>
            {cargando ? (
                <p style={{ textAlign: "center",fontFamily: "'Poppins', sans-serif" }}>Cargando...</p>
            ) : (
                <p style={{ textAlign: "center",fontFamily: "'Poppins', sans-serif" }}>Fecha actual en Requínoa: {horaActual}</p>
            )}
          </div>

        <div style={{ overflowX: "auto" }}> 
        {predicacionHoy && predicacionHoy.length > 0 ? (
          <div style={estilos.hoy}>

            <h2 style={{ marginBottom: "0.5rem", fontSize: "20px" }}>Predicación asignada para hoy {numeroFechaActual} de Agosto</h2>
            <table style={estilos.tablahoy}>
              <thead>
                <tr>
                  <th style={estilos.thHoy}>
                    <FontAwesomeIcon icon={faClock} /> Hora
                  </th>
                  <th style={estilos.thHoy}>
                    <FontAwesomeIcon icon={faCalendar} /> Día </th>
                  <th style={estilos.thHoy}>
                    <FontAwesomeIcon icon={faHouse} /> Lugar de Reunión</th>
                  <th style={estilos.thHoy}>
                    <FontAwesomeIcon icon={faCompass} /> Territorio
                  </th>
                  <th style={estilos.thHoy}>
                    <FontAwesomeIcon icon={faUser} /> Encargado
                  </th>
                </tr>
              </thead>
              <tbody>
                {predicacionHoy.map((item, i) => (
                  <tr key={i}>
                    <td style={estilos.tdHoy}>{item.hora}</td>
                    <td style={estilos.tdHoy}>{item.dia}</td>
                    <td style={estilos.tdHoy}>{item.lugar}</td>
                    <td style={estilos.tdHoy}>

                      {imagenDelTerr[item.territorio] ? (
                      <button
                          onClick={() => {
                            handleClickTerritorio(item.territorio)
                          }}
                          style={{
                            cursor: "pointer",
                            color: "#444",
                            background: "#e8f8f5",
                            borderRadius: "15px",
                            border: "4px solid #1abc9c",
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: "bold",
                            
                            

                      
                          }}
                        >
                          <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon> 
                          {item.territorio}</button>
                      ) : ( 
                        item.territorio
                      )}
                        </td>
                    <td style={estilos.tdHoy}>{item.encargado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        ) : (
            <p style={{ color: "#aaa", fontStyle: "italic", textAlign: "center" }}>
              No hay predicación programada para hoy.
            </p>
          )}
        </div> 


      <div style={{ 
        position: "sticky", 
        top:scrolled ? "calc(100% - 60px)" : 0, 
        zIndex: 10, 
        background: "rgba(255, 255, 255, 0)", 
        padding: "10px",
        transition: "top 0.3s ease",
        display:"flex",
        justifyContent:scrolled ? "flex-end" : "center",}}>




        <div style={{
          width: scrolled ? "40px" : "250px",
          transition: "all 0.3s ease",
          overflow: "hidden",
          display:"flex",
          borderRadius: "20px",
          border: "1px solid #ccc",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          backgroundColor: scrolled ? "#ecf0f1" : "transparent",


          }}
          onClick={() => {
            if (scrolled) {
              tablaRef.current.scrollTo({
                top: 0,
                behavior: "smooth"
              });
              setTimeout(() => {
                setScrolled(false);
                inputRef.current.focus();
              }, 2000);
            }
          }}>

          <FontAwesomeIcon icon={faMagnifyingGlass} style={{

          marginLeft: scrolled ? 0 : "10px",
          marginRight: scrolled ? 0 : "10px",
          color: "#34495e",
          flexShrink: 0,
          transition: "margin 0.3s ease",
          width: scrolled ? "40px" : 0,
          justifyContent: scrolled ? "center" : "flex-start",
          display: "flex",
           
        }} />


          <input
            ref={inputRef}
            type="text"
            placeholder= {scrolled ? "" : "Buscar"}
            value={buscar}
            onChange={(e) => setBuscar(e.target.value)}
                style={{
                flexGrow: 1,
                border: "none",
                outline: "none",
                padding: "10px 10px",
                fontSize: "16px",
                borderRadius: "0 20px 20px 0",
                backgroundColor: "transparent",
                transition: "opacity 0.3s ease, width 0.3s ease",
                opacity: scrolled ? 0 : 1,
                width: scrolled ? 0 : "auto",

      }}
              />
            </div>
          </div>  


        <div 
        ref= {tablaRef}
        id="tabla-scrollable" style={{ maxHeight: "550px", overflowY: "auto",
          position: "relative", marginTop: scrolled ? "-70px" : "10px",
          transition: "margin-top 0.3s ease"
         }}>
        <table style={estilos.tabla}>
          <thead>
            <tr>
              <th style={estilos.th}>Fecha</th>
              <th style={estilos.th}>Día</th>
              <th style={estilos.th}>Hora</th>
              <th style={estilos.th}>Lugar de Reunión</th>
              <th style={estilos.th}>Territorio</th>
              <th style={estilos.th}>Encargado</th>
            </tr>
          </thead>
          <tbody>
          {programa
          .filter((item) =>{
            const texto = buscar.toLowerCase();
            return (
              item.fecha.toString().includes(texto) ||
              item.dia.toLowerCase().includes(texto) ||
              item.hora.toLowerCase().includes(texto) ||
              item.lugar.toLowerCase().includes(texto) ||
              item.territorio.toLowerCase().includes(texto) ||
              item.encargado.toLowerCase().includes(texto)
            );
          })
          .map((item, index) => (
              <tr key={index}>
                <td style={estilos.td}>{item.fecha} de Ago</td>
                <td style={estilos.td}>{item.dia}</td>
                <td style={estilos.td}>{item.hora}</td>
                <td style={estilos.td}>{item.lugar}</td>
                <td style={estilos.td}>
                  {imagenDelTerr[item.territorio] ? (
                  <button
                  onClick={() => {
                    handleClickTerritorio(item.territorio)
                  }}
                  style={{
                    cursor: "pointer",
                    color: "#444",
                    background: "#f0f0f0",
                    borderRadius: "20px",
                    border: "4px solid #ccc",

                   }}
                >
                  <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon> 
                  {item.territorio}
                  </button>
                  ) : (
                    item.territorio
                  )}
                </td>
                <td style={estilos.td}>{item.encargado}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {imagenterr && (
          <ImagenesTerr
            src={imagenterr}
            onClose={() => setImagenesterr(null)}
          />
        )}
      </div>
    </div>
  );
};

const estilos = {

  cuadrado: {
  marginTop: "20px",
  border: "1px solid #ccc",        // Línea delgada y clara
  borderRadius: "5px",            // Bordes redondeados suaves
  padding: "20px",
  marginBottom: "30px",
  textAlign: "center",
  maxWidth: "600px",
  marginInline: "auto",            // Centra el bloque en la pantalla
},
  contenedor: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#fdfefe",
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  titulo: {
    marginTop: "1rem",
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#34495e",
    marginBottom: "0.3rem",
    fontWeight: 600,
  },
  subtitulo: {
    textAlign: "center",
    fontSize: "1.5rem",
    color: "#7f8c8d",
    marginTop: 0,
    fontWeight: 300,
  },


  hoy: {
    overflowX: "auto",
    background: "#e8f8f5",
    borderLeft: "5px solid #1abc9c",
    padding: "1rem",
    marginBottom: "1.5rem",
    borderRadius: "8px",
    fontWeight: "bold",
    maxWidth: "1000px",
    margin: "2rem auto",
  },

  tablahoy: {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "'Poppins', sans-serif",
  },

    thHoy: {
    backgroundColor: "#1abc9c",
    color: "#fff",
    fontWeight: "600",
    padding: "0.75rem 1rem",
    textAlign: "left",
    borderRadius: "8px 8px 0 0",
    whiteSpace: "nowrap",
  },

  tdHoy: {
    padding: "0.75rem 1rem",
    borderBottom: "1px solid #ddd",
    whiteSpace: "nowrap",
  },


  tabla: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    fontFamily: "'Poppins', sans-serif",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.05)",
    overflow: "hidden",
    overflowX: "auto",
  },
  th: {
    position: "sticky",
    zIndex: 1,
    top: 0,
    backgroundColor: "#e1e1e1ff",
    background: "#ecf0f1",
    fontWeight: "bold",
    padding: "0.75rem 1rem",
    textAlign: "left",
    borderBottom: "1px solid #eee",
    whiteSpace: "nowrap",
  },

  td: {
    padding: "0.75rem 1rem",
    textAlign: "left",
    borderBottom: "1px solid #eee",
    whiteSpace: "nowrap",
  },
};


export default Programa;