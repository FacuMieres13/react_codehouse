import "./Counter.css";
import { Button } from "@mui/material";

export const Counter = ({ restar, contador, sumar, onAdd }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#c2a584",
          color: "#622f0b",
          border: "1px solid #622f0b",
          fontSize: "16px",
          fontFamily: "Exo 2",
          "&:hover": {
            backgroundColor: "#622f0b",
            color: "#ffe8d2",
          },
        }}
        onClick={restar}
      >
        -
      </Button>
      <h2 style={{ fontFamily: 'Exo 2', color: "#622f0b" }}> {contador} </h2>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#c2a584",
          color: "#622f0b",
          border: "1px solid #622f0b",
          fontSize: "16px",
          fontFamily: "Exo 2",
          "&:hover": {
            backgroundColor: "#622f0b",
            color: "#ffe8d2",
          },
        }}
        onClick={sumar}
      >
        +
      </Button>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#c2a584",
          color: "#622f0b",
          border: "1px solid #622f0b",
          fontSize: "16px",
          fontFamily: "Exo 2",
          "&:hover": {
            backgroundColor: "#622f0b",
            color: "#ffe8d2",
          },
        }}
        onClick={() => onAdd(contador)}
      >
        Add to cart
      </Button>
    </div>
  );
};
