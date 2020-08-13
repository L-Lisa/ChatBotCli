import React from "react"


export const LanSumma = ({ husLan, setHusLan }) => {
    return (
        <label className="hus-lan">

            <input placeholder="SEK"
                type="number"
                required
                value={husLan}
                id={husLan}
                onChange={e => setHusLan(e.target.value)}
            />
        </label>
    )
}