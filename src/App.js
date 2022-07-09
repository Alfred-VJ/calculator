import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Boton from './Botones/Boton';



function App() {
  const [igual] = useState("=")
  const [suma] = useState("+")
  const [resta] = useState("-")
  const [multiplicar] = useState("x")
  const [dividir] = useState("/")
  const [porcentaje] = useState("%")
  const [punto] = useState(".")
  const [cero,] = useState("0")
  const [uno,] = useState("1")
  const [dos,] = useState("2")
  const [tres,] = useState("3")
  const [cuatro,] = useState("4")
  const [cinco,] = useState("5")
  const [seis,] = useState("6")
  const [siete,] = useState("7")
  const [ocho,] = useState("8")
  const [nueve,] = useState("9")
  const [resultado, setResultado] = useState("0")
  const [C] = useState("C");
  const [CC] = useState("CC");
  const [numero, setNumero] = useState(0)
  const [tipoOperacion, setTipoOperacion] = useState("")


  const p = (n) => {
    if (n === "C" || n === "CC") setResultado("0")
    else if (n === "+") {
      setNumero(Number(resultado));
      setResultado("0")
      setTipoOperacion(n)
    }
    else if (n === "-") {
      setNumero(Number(resultado));
      setResultado("0")
      setTipoOperacion(n)
    }
    else if (n === "x") {
      setNumero(Number(resultado));
      setResultado("0")
      setTipoOperacion(n)
    }
    else if (n === "/") {
      setNumero(Number(resultado));
      setResultado("0")
      setTipoOperacion(n)
    }
    else if (n === "%") {
      setNumero(Number(resultado));
      setResultado("0")
      setTipoOperacion(n)
    }
    else if (n === "=") {
      if (numero && tipoOperacion !== "") {
        switch (tipoOperacion) {
          case "+":
            let sum = numero + Number(resultado);
            setResultado(String(sum));
            break;
          case "-":
            let rest = numero - Number(resultado);
            setResultado(String(rest));
            break;
          case "/":
            let divi = numero / Number(resultado);
            setResultado(String(divi));
            break;
          case "x":
            let multip = numero * Number(resultado);
            setResultado(String(multip));
            break;
          case "%":
            let porcen = (numero * Number(resultado)) / 100;
            setResultado(String(porcen));
            break;
        }
      }
    }
    else {
      let result = resultado + n
      if (result.length < 18) {
        if (result[0] === "0" && result[1] !== ".") setResultado(result.slice(1))
        else setResultado(result)
      }
    }
  }

  return (
    <div>
      <h1>Calculadora por Alfred</h1>
      <div className="App">
        <div className='pantalla'><p>{resultado}</p></div>
        <div>
          <div className='contBotones'>
            <div className='botones'>
              <Boton click={p} value={C} />
              <Boton click={p} value={CC} />
              <Boton click={p} value={porcentaje} />
              <Boton click={p} value={dividir} />
            </div>
            <div className='botones'>
              <Boton click={p} value={siete} />
              <Boton click={p} value={ocho} />
              <Boton click={p} value={nueve} />
              <Boton click={p} value={multiplicar} />
            </div>
            <div className='botones'>
              <Boton click={p} value={cuatro} />
              <Boton click={p} value={cinco} />
              <Boton click={p} value={seis} />
              <Boton click={p} value={resta} />
            </div>
            <div className='botones'>
              <Boton click={p} value={uno} />
              <Boton click={p} value={dos} />
              <Boton click={p} value={tres} />
              <Boton click={p} value={suma} />
            </div>
            <div className='botones'>
              <Boton click={p} value={cero} />
              <Boton click={p} value={punto} />
              <Boton click={p} value={igual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;