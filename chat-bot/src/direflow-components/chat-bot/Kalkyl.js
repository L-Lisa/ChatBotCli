/* import React, { useState } from 'react'



export const Kalkyl = ({ rantebesparing, setRantebesparing, passiv, setPassiv, ranta, husLan, kampanjval, korttids }) => {

    var husLanNr = parseFloat(husLan)
    var rantaNr = parseFloat(ranta)


    const RantebesparingFunc = () => {
        return (

            (((husLanNr + 800000) * 0.01) - ((husLanNr * rantaNr) / 12)).toFixed(2)
        )
    }
    const PassivInFunc = () => {
        return (
            ((korttids + 40000) / 12).toFixed(2)
        )
    }
    return (
        <div>

            <button onClick={() => setRantebesparing(RantebesparingFunc(), setPassiv(PassivInFunc()))}>Skapa kalkyl</button>
            {rantebesparing && kampanjval === "Ja" && <p>Räntebesparing: {rantebesparing}kr</p>}
            {husLan !== "" && ranta !== "" && passiv && <p>Möjlig månatlig passiv inkomst:{passiv}kr</p>}
        </div>
    )
} */