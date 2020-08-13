import React from "react"


export const Kampanj = ({ kampanjval, setKampanjval }) => {
    return (
        <div className="radio-box">
            <label className="radio-val">

                <input required
                    className="radio-input"
                    type="radio"
                    value="Ja"
                    id="Ja"
                    onChange={e => setKampanjval(e.target.value)}
                    checked={kampanjval === "Ja"} />
                <h4 className="radio-label">Ja</h4>
            </label>
            <label className="radio-val">

                <input required
                    className="radio-input"
                    type="radio"
                    value="Nej"
                    id="Nej"
                    onChange={e => setKampanjval(e.target.value)}
                    checked={kampanjval === "Nej"} />
                <h4 className="radio-label">Nej</h4>
            </label>

        </div>
    )
}