"use client";

import { useState } from "react";

import { createContext, useContext } from "react";

const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{
      range, setRange, resetRange }}>
        {children}
    </ReservationContext.Provider>
  );
}
// make our own custom hook to consume this context
function useReservation() {
  const context = useContext(ReservationContext);
  if(context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { ReservationProvider, useReservation };