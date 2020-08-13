import React from "react"


export const VillaVarde = ({ villavarde, setVillaVarde }) => {
    return (
        <label className="villavarde">

            <input placeholder="SEK"
                type="number"
                value={villavarde}
                id={villavarde}
                onChange={e => setVillaVarde(e.target.value)}
                required
            />
        </label>
    )
} 