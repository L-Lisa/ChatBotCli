import React, { useState } from 'react'
import { Kalkyl } from "./Kalkyl"


export const Sammanfattning = ({ rantebesparing, kampanjval, passiv, husLan, ranta }) => {

    return (
        <div className="sammanfattnings-box">
            <section className="sammanfattning-section"> <p className="sammanfattnings-box-p">Räntebesparing: </p><p>{rantebesparing}kr</p></section>


            <section className="sammanfattning-section">
                {kampanjval === "Ja" &&
                    <>
                        <p className="sammanfattnings-box-p">Möjlig månatlig passiv inkomst:</p><p>{passiv}kr</p>
                    </>}
            </section>
        </div>
    )
}