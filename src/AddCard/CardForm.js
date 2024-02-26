import React from "react";

function CardForm({ formData, setFormData }) {
  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }
  
  return (
        <form>
            <div className="form-group">
                <label htmlFor="front">Front</label>
                <textarea name="front" required className="form-control" placeholder="Front side of card" onChange={changeHandler} value={formData.front}/>
            </div>
            <div className="form-group">
                <label htmlFor="back">Back</label>
                <textarea name="back" required className="form-control" placeholder="Back side of card" onChange={changeHandler} value={formData.back}/>
            </div>
        </form>
    )
}

export default CardForm