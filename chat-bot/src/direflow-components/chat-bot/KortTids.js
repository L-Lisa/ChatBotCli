import React from "react"


export const KortTids = ({ korttids, setKorttids }) => {
    return (
        <div>
            <label className="radio-val">
                <input required
                    className="radio-input"
                    type="number"
                    value="10000"
                    id="Ja"
                    onChange={e => setKorttids(e.target.value)}
                    checked={kampanjval === "Ja"} />
            </label>
            <label className="radio-val">
                <input required
                    className="radio-input"
                    type="number"
                    value="0"
                    id="Nej"
                    onChange={e => setKampanjval(e.target.value)}
                    checked={kampanjval === "Nej"} />
            </label>

        </div>
    )
}