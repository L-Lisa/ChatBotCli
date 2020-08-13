import React, { useState } from 'react'
import { InvestSumma } from "../chat-bot/InvestSumma"
import { LanSumma } from "../chat-bot/LanSumma"
import { RantaSumma } from "../chat-bot/RantaSumma"
import { Total } from "../chat-bot/Total"
import { VillaVarde } from "../chat-bot/VillaVarde"
import { Kampanj } from "../chat-bot/Kampanj"
import { Kalkyl } from "../chat-bot/Kalkyl"
import { Card } from "../chat-bot/Card"
import styles from './App.css';
import { Styled } from 'direflow-component';
import { Sammanfattning } from './Sammanfattning'


export const FormBot = () => {
    const [section, setSection] = useState("start")
    const summa = ["100000", "200000", "300000", "400000"]
    const [valdSumma, setValdSumma] = useState("")
    const [husLan, setHusLan] = useState("")
    const [ranta, setRanta] = useState("")
    const [villavarde, setVillaVarde] = useState("")
    const [kampanjval, setKampanjval] = useState("")
    const [korttids, setKorttids] = useState("")
    const [visaSammanfattning, setVisaSammanfattnig] = useState("")
    const [rantebesparing, setRantebesparing] = useState("")
    const [passiv, setPassiv] = useState("")
    const [formData, setFormData] = useState("");

    /*   const handleSubmit = event => {
          event.preventDefault();
          setVisaSammanfattnig(true);
      };
   */
    const handleSubmit = event => {
        event.preventDefault();
        setVisaSammanfattnig(true)
        const formData = new FormData()
        formData.append('husLan', husLan)
        formData.append('villavarde', villavarde)
        formData.append('ranta', ranta)
        formData.append('kampanjval', kampanjval)
        console.log(formData)
        const API = "http://httpbin.org/anything"
        fetch(API, {
            method: 'POST', body: formData
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
            })
            .then(() => {
                setHusLan("")
                setRanta("")
                setVillaVarde("")
            })
    }

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
        <Styled styles={styles}>
            <div className="wrapper">
                <Card />
                <form onSubmit={handleSubmit} >
                    {section === "start" && (
                        <section className="section-div">
                            <p>Har du en villatomt?</p>
                            <div className="buttons-div">
                                <button className="ja-knapp" type="submit" onClick={e => setSection("harTomt")}>Ja</button>
                                <button className="nej-knapp" type="submit" onClick={e => setSection("ingenTomt")}>Nej</button>
                            </div>
                        </section>
                    )}
                    {section === "ingenTomt" && (
                        <div className="section-div">
                            <p>Du behöver vara ägare av en tomt i Stockholm för att kunna bygga med oss</p>
                        </div>
                    )}
                    {section === "harTomt" && (
                        <div className="section-div">
                            <p>
                                Fantastiskt! Då kan du tjäna 40.000kr per år!
                            </p>
                            <div>
                                <p>Kan du tänka dig korttidsuthyrning för att tjäna från 10000 kr extra per år?
                                </p>
                                <div className="buttons-div">
                                    <button className="ja-knapp" onClick={() => {
                                        setSection("mainform");
                                        setKorttids(10000)
                                    }}>Ja</button>
                                    <button className="nej-knapp" onClick={() => {
                                        setSection("mainform");
                                        setKorttids(0)
                                    }}>Nej</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {section === "mainform" && (
                        <>
                            {!visaSammanfattning ? (
                                <div className="section-div">
                                    <fieldset>
                                        <p className="form-p">Hur mycket är din villa värderad till idag?</p>
                                        <VillaVarde villavarde={villavarde} setVillaVarde={setVillaVarde} />

                                        <p className="form-p">Hur mycket uppgår ditt huslån till idag?</p>
                                        <LanSumma husLan={husLan} setHusLan={setHusLan} />
                                        <p className="form-p">Okej! Vilken räntesats har du idag ungefär?</p>
                                        <RantaSumma ranta={ranta} setRanta={setRanta} />
                                        <p className="form-p">Vill du ta del av Attefallsförmedlarens kampanjränta och förbättra dina månadskostnader?</p>
                                        <Kampanj kampanjval={kampanjval} setKampanjval={setKampanjval} />
                                    </fieldset>
                                    <div>

                                        <button onClick={() => setRantebesparing(RantebesparingFunc(), setPassiv(PassivInFunc()))}>Skapa kalkyl</button>
                                        {/*  {rantebesparing && <p>Räntebesparing: {rantebesparing}kr</p>} */}
                                        {/*  {husLan !== "" && ranta !== "" && passiv && <p>Möjlig månatlig passiv inkomst:{passiv}kr</p>} */}
                                    </div>
                                </div>
                            ) : (
                                    <>
                                        {husLan !== " " && rantebesparing !== "" && passiv && <Sammanfattning rantebesparing={rantebesparing} passiv={passiv} kampanjval={kampanjval} />}
                                    </>
                                )}
                        </>
                    )}

                </form>
                {/* {section === "samanfatta" && (
                <article className="sammanfatta">
                    <Total ranta={ranta} husLan={husLan} />
                </article>
            )} */}
            </div>
        </Styled>
    )
}

